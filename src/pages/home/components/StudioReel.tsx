import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  {
    label: 'Discuss',
    word: 'We discuss.',
    line: 'Great design starts with a great conversation. We take the time to understand your vision, goals and audience.',
    img: '/media/reel-discuss.jpg',
    w: 1280,
    h: 720,
  },
  {
    label: 'Create',
    word: 'We create.',
    line: 'We transform ideas into stunning visuals that captivate and inspire, from branding to digital graphics.',
    img: '/media/reel-create.jpg',
    w: 1280,
    h: 720,
  },
  {
    label: 'Produce',
    word: 'We produce.',
    line: 'We deliver high-quality, professionally crafted work that makes an impact, from digital content to print.',
    img: '/media/reel-produce.jpg',
    w: 1280,
    h: 720,
  },
];

const HOLD = 4400;

export default function StudioReel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const clock = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (paused) return undefined;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), HOLD);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const el = clock.current;
    if (!el) return undefined;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = '00:00';
      return undefined;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const total = Math.floor((now - start) / 1000) % 14;
      const secs = String(total).padStart(2, '0');
      el.textContent = `00:${secs}`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const current = SLIDES[index];

  return (
    <div
      className={`reel${paused ? ' is-paused' : ''}`}
      data-reveal
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="reel-stage">
        {SLIDES.map((s, i) => (
          <div className={`reel-shot${i === index ? ' is-on' : ''}`} key={s.label} aria-hidden="true">
            <img src={s.img} alt="" width={s.w} height={s.h} decoding="async" loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}

        <span className="reel-veil" aria-hidden="true" />
        <span className="reel-sweep" aria-hidden="true" />
        <span className="reel-grain" aria-hidden="true" />

        <div className="reel-hud">
          <span className="reel-tag"><i className="ri-record-circle-line" /> showreel</span>
          <span className="reel-time"><span ref={clock}>00:00</span> / 00:13</span>
        </div>

        <div className="reel-copy">
          <p className="reel-kicker">0{index + 1} — {current.label}</p>
          <p className="reel-word" key={`${index}-word`}>{current.word}</p>
          <p className="reel-line" key={`${index}-line`}>{current.line}</p>
        </div>

        <div className="reel-ticks" aria-label="Showreel chapters">
          {SLIDES.map((s, i) => (
            <button
              type="button"
              key={s.label}
              aria-pressed={i === index}
              aria-label={`Show ${s.label}`}
              className={`reel-tick${i === index ? ' is-on' : ''}`}
              onClick={() => setIndex(i)}
            >
              <span aria-hidden="true" />
              <em>{s.label}</em>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}