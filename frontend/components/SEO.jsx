import Head from "next/head";

export default function SEO({ title, description, path = "" }) {
  const fullTitle = `${title} | Knight Eyes Security Services (KESS)`;
  const url = `https://www.knighteye.in${path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
    </Head>
  );
}
