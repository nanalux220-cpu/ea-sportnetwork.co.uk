import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  {
    label: 'Discuss',
    word: 'We discuss.',
    line: 'we believe great designs start with great conversations. We take the time to understand your vision, goals',
    img: 'https://readdy.ai/api/search-image?query=Cinematic%20wide%20aerial%20frame%20of%20a%20drone%20team%20on%20a%20windswept%20clifftop%20at%20dusk%2C%20pilot%20holding%20a%20controller%2C%20a%20second%20operator%20watching%20a%20monitor%2C%20dark%20sea%20and%20white%20surf%20below%2C%20warm%20amber%20highlights%20and%20deep%20charcoal%20shadows%2C%20high%20detail%2C%20editorial%20photography&width=1600&height=700&seq=ea-reel-discuss-a15&orientation=landscape',
    w: 1600,
    h: 700,
  },
  {
    label: 'Create',
    word: 'We create.',
    line: 'we transform ideas into stunning visuals that captivate and inspire. From branding to digital graphics.',
    img: 'https://readdy.ai/api/search-image?query=Cinematic%20wide%20frame%20of%20a%20design%20studio%20at%20night%2C%20two%20designers%20reviewing%20branding%20layouts%20on%20a%20large%20monitor%2C%20warm%20amber%20lamp%20light%20on%20dark%20walls%2C%20colour%20swatches%20and%20sketches%20on%20the%20desk%2C%20deep%20charcoal%20shadows%2C%20high%20detail%2C%20editorial%20photography&width=1600&height=700&seq=ea-reel-create-a16&orientation=landscape',
    w: 1600,
    h: 700,
  },
  {
    label: 'Produce',
    word: 'We produce.',
    line: 'we deliver high-quality, professionally crafted designs that make an impact. From digital content to print materials.',
    img: 'https://readdy.ai/api/search-image?query=Cinematic%20wide%20frame%20of%20a%20print%20finishing%20workshop%20at%20night%2C%20large%20format%20prints%20rolling%20out%20of%20a%20machine%2C%20warm%20amber%20light%20raking%20across%20dark%20surfaces%2C%20an%20operator%20checking%20colour%20proofs%2C%20deep%20charcoal%20shadows%2C%20high%20detail%2C%20editorial%20photography&width=1600&height=700&seq=ea-reel-produce-a17&orientation=landscape',
    w: 1600,
    h: 700,
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