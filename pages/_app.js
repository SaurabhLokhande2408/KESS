import { Fraunces, Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className={`${fraunces.variable} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}