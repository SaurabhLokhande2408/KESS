import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Knight Eyes Security Services (KESS) — PSARA-licensed security guarding, housekeeping, manpower outsourcing and on-the-job training in Pune, Maharashtra. Led by Indian Armed Forces veterans."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased bg-ivory text-charcoal">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
