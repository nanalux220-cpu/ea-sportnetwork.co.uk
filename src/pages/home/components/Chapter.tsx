import { useEffect, useRef } from 'react';

const VIDEO = 'https://static.readdy.ai/video/0af12a1027d1d5372071bb53d7f5559b/e84beba43193bbcce2e47c08b10eee32.mp4';
const COVER = 'https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/903c4f63e296a76f3516d3e7849d5727.jpeg';

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
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          alt="Aerial view of a coastline at dusk seen from a drone lifting off above the cliffs"
        />
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-inner">
          <h1>E.A Sport Photography Service</h1>
          <p className="hero-sub">
            We bring brands to life through creative storytelling, cutting-edge design techniques, and strategic visual
            communication.
          </p>
          <a className="btn" href="#about">
            More info <i className="ri-arrow-right-line" />
          </a>
        </div>
        <div className="hero-cue" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}