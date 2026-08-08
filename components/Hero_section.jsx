import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const introRef = useRef(null);
  const heroImgRef = useRef(null);
  const skipRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(introRef.current, { display: 'none' });
        playHero();
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(introRef.current, {
            opacity: 0,
            duration: 0.9,
            onComplete: () => { introRef.current.style.display = 'none'; }
          });
          playHero();
        }
      });

      tl.to('#introLine', { width: 220, duration: 0.7 }, 0.1)
        .to('#eyebrow', { opacity: 1, y: -4, duration: 0.6 }, 0.5)
        // ...rest of your timeline, same as the HTML version

      skipRef.current.addEventListener('click', () => tl.progress(1));
    }, introRef); // <- scopes selectors + auto-cleans on unmount

    function playHero() {
      gsap.timeline()
        .to('#heroImg', { opacity: 1, scale: 1, duration: 1.6 }, 0)
        .to('#heroNav', { opacity: 1, y: 0, duration: 0.7 }, 0.15);
        // ...rest
    }

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <>
      <div ref={introRef} className={styles.intro}>
        <div id="introLine" className={styles.introLine} />
        <button ref={skipRef} className={styles.skipBtn}>Skip intro</button>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            id="heroImg"
            src="/images/guards-hero.jpg.jpeg"
            alt="KESS security guards on duty"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* rest of hero content */}
      </section>
    </>
  );
}