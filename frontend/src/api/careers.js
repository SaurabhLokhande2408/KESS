const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.VITE_API_URL ||
  "http://localhost:8000";

const MAX_APPLICATIONS = 4;
const LIMIT_KEY = "kess_career_submissions";
const ONE_DAY = 24 * 60 * 60 * 1000;

/* -------------------------------------------------------
   Local submission tracking
   ------------------------------------------------------- */

function getSubmissions() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(LIMIT_KEY);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}


function getRecentSubmissions() {
  const now = Date.now();

  const submissions = getSubmissions();

  const recent = submissions.filter(
    (timestamp) => now - timestamp < ONE_DAY
  );

  if (typeof window !== "undefined") {
    localStorage.setItem(
      LIMIT_KEY,
      JSON.stringify(recent)
    );
  }

  return recent;
}


/* -------------------------------------------------------
   Check frontend limit
   ------------------------------------------------------- */

export function canSubmitCareerApplication() {
  const submissions = getRecentSubmissions();

  return submissions.length < MAX_APPLICATIONS;
}


export function getRemainingApplications() {
  const submissions = getRecentSubmissions();

  return Math.max(
    0,
    MAX_APPLICATIONS - submissions.length
  );
}


/* -------------------------------------------------------
   Submit application
   ------------------------------------------------------- */

export async function submitCareerApplication(formData) {
  const submissions = getRecentSubmissions();

  /* Frontend protection */
  if (submissions.length >= MAX_APPLICATIONS) {
    throw new Error(
      "You have reached the maximum number of applications allowed today. Please try again tomorrow."
    );
  }

  let response;

  try {
    response = await fetch(
      `${API_URL}/api/careers/apply`,
      {
        method: "POST",
        body: formData,
      }
    );
  } catch {
    throw new Error(
      "Unable to connect to the application server. Please try again."
    );
  }

  let data = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }


  /* Backend rate limit */
  if (response.status === 429) {
    throw new Error(
      "You have reached the maximum number of applications allowed today. Please try again tomorrow."
    );
  }


  /* Other backend errors */
  if (!response.ok) {
    throw new Error(
      data.detail ||
      "Unable to submit your application. Please try again."
    );
  }


  /* Count ONLY successful submissions */
  const updatedSubmissions = [
    ...submissions,
    Date.now(),
  ];

  if (typeof window !== "undefined") {
    localStorage.setItem(
      LIMIT_KEY,
      JSON.stringify(updatedSubmissions)
    );
  }


  return data;
}