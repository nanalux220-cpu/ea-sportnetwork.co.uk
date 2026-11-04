import { useEffect, useRef } from 'react';

const VIDEO = '/media/hero.mp4';
const COVER = '/media/hero-cover.jpg';

export default function Chapter() {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = stage.current;
    if (!host) return undefined;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const v = document.createElement('video');
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.autoplay = true;
    v.preload = 'auto';
    v.tabIndex = -1;
    v.setAttribute('aria-hidden', 'true');
    v.poster = COVER;
    v.src = VIDEO;
    v.addEventListener('loadeddata', () => host.classList.add('is-live'), { once: true });
    host.insertBefore(v, host.querySelector('.hero-veil'));

    const play = () => { const p = v.play(); if (p) p.catch(() => {}); };
    play();
    const wake = () => play();
    window.addEventListener('pointerdown', wake, { once: true, passive: true });
    window.addEventListener('touchstart', wake, { once: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', wake);
      window.removeEventListener('touchstart', wake);
      v.pause();
      v.removeAttribute('src');
      v.load();
      v.remove();
    };
  }, []);

  return (
    <section className="hero" id="home" data-video={VIDEO} data-duration="14" data-poster={COVER}>
      <div className="hero-stage" ref={stage}>
        <img
          className="hero-plate"
          src={COVER}
          width={1280}
          height={720}
          fetchPriority="high"
          decoding="async"
          alt="Aerial drone view of waves breaking over dark rocks"
        />
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-inner">
          <h1>Graphic design &amp; aerial photography</h1>
          <p className="hero-sub">
            E.A Sport Graphics brings brands to life through creative storytelling, cutting-edge design and striking
            drone photography, from Leeds to clients worldwide.
          </p>
          <a className="btn" href="#about">
            Discover more <i className="ri-arrow-right-line" />
          </a>
        </div>
        <div className="hero-cue" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}