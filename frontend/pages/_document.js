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
        <link rel="icon" href="/images/logo/kess_logo.png" type="image/png" />
        <style jsx global>{`
          html, body {
            margin: 0;
            padding: 0;
            background: #000000;
          }

          #kess-critical-loader {
            position: fixed;
            inset: 0;
            z-index: 2147483647;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background: #000000;
            transition: opacity 0.45s ease, visibility 0.45s ease;
            pointer-events: auto;
            overflow: hidden;
          }

          #kess-critical-loader.is-hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }

          .kess-critical-loader__ring {
            position: relative;
            width: 11rem;
            height: 11rem;
            border-radius: 50%;
            background: conic-gradient(
              from 0deg,
              #fcf6ba 0%,
              #bf953f 18%,
              #fbf5b7 46%,
              #b38728 72%,
              #fcf6ba 100%
            );
            box-shadow: 0 0 18px rgba(251, 245, 183, 0.65);
            animation: kess-critical-loader-ring 2.2s ease-in-out infinite alternate;
          }

          .kess-critical-loader__ring::before {
            content: "";
            position: absolute;
            inset: 12px;
            border-radius: 50%;
            background: #000000;
          }

          .kess-critical-loader__label {
            margin-top: 1.25rem;
            font-size: 0.72rem;
            line-height: 1;
            letter-spacing: 0.52em;
            text-transform: uppercase;
            color: #f5e7b2;
            font-weight: 500;
            text-align: center;
          }

          .kess-critical-loader__dots {
            display: flex;
            gap: 0.5rem;
            justify-content: center;
            align-items: center;
            margin-top: 0.9rem;
            min-height: 0.75rem;
          }

          .kess-critical-loader__dots span {
            display: block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background: linear-gradient(180deg, #fcf6ba 0%, #d4af37 100%);
            animation: kess-critical-loader-dot 1.3s ease-in-out infinite;
          }

          .kess-critical-loader__dots span:nth-child(2) {
            animation-delay: 0.2s;
          }

          .kess-critical-loader__dots span:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes kess-critical-loader-ring {
            0% {
              transform: scale(0.96);
              opacity: 0.7;
              box-shadow: 0 0 10px rgba(251, 245, 183, 0.3);
            }
            100% {
              transform: scale(1);
              opacity: 1;
              box-shadow: 0 0 20px rgba(251, 245, 183, 0.8);
            }
          }

          @keyframes kess-critical-loader-dot {
            0%,
            80%,
            100% {
              opacity: 0.2;
              transform: scale(0.8);
            }
            40% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @media (max-width: 640px) {
            .kess-critical-loader__ring {
              width: 8.4rem;
              height: 8.4rem;
            }
          }
        `}</style>
      </Head>
      <body className="antialiased bg-ivory text-charcoal">
        <div id="kess-critical-loader" data-loader="critical" aria-live="polite" aria-busy="true">
          <div className="kess-critical-loader__ring" aria-hidden="true" />
          <div className="kess-critical-loader__label">LOADING</div>
          <div className="kess-critical-loader__dots" aria-label="Loading progress">
            <span />
            <span />
            <span />
          </div>
        </div>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var loader = document.getElementById('kess-critical-loader');
                  if (!loader) return;
                  window.addEventListener('load', function () {
                    loader.classList.add('is-hidden');
                  }, { once: true });
                } catch (err) {
                  console.warn('Critical loader init failed', err);
                }
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
