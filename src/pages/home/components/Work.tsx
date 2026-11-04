import { useEffect, useState } from 'react';
import { projects } from '@/mocks/home';

export default function Work() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  const current = active === null ? null : projects[active];

  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <div className="work-head">
          <div>
            <p className="eyebrow" data-reveal>Portfolio</p>
            <h2 data-reveal>Our Latest Projects</h2>
          </div>
          <p className="body-lg" data-reveal>
            we blend creativity with technology to deliver high-quality, bespoke design solutions tailored to your
            unique vision. Whether you’re a startup, a growing business.
          </p>
          <div className="work-head-cta" data-reveal>
            <a className="btn" href="#contact">View all project <i className="ri-arrow-right-line" /></a>
          </div>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <button
              type="button"
              className="work-item"
              key={p.title}
              onClick={() => setActive(i)}
              aria-label={`Open ${p.title}`}
            >
              <img src={p.img} alt={`${p.title} — aerial photography by E.A Sport Graphics`} loading="lazy" decoding="async" />
              <span className="work-hover" aria-hidden="true"><i className="ri-zoom-in-line" /></span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={() => setActive(null)}>
          <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setActive(null)}>
            <i className="ri-close-line" />
          </button>
          <figure className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={current.img} alt={`${current.title} — E.A Sport Graphics`} />
          </figure>
        </div>
      )}
    </section>
  );
}