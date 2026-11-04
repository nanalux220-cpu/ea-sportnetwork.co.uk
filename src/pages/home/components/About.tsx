import { stats } from '@/mocks/home';

export default function About() {
  return (
    <section className="sec sec--about" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="eyebrow" data-reveal>Welcome</p>
          <h2 data-reveal>About E.A Sport Graphics</h2>
          <p className="body-lg" data-reveal>
            E.A Sport Graphics is a graphic design and aerial photography studio based in Leeds, United Kingdom,
            specialising in innovative and visually compelling work. We bring brands to life through creative
            storytelling, cutting-edge design techniques and strategic visual communication.
          </p>
          <p className="body-lg" data-reveal>
            From branding and logo design to digital graphics and marketing materials, we craft designs that captivate
            audiences and elevate businesses.
          </p>

          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label} data-reveal>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <a className="btn" href="#services" data-reveal>
            Explore our services <i className="ri-arrow-right-line" />
          </a>
        </div>

        <div className="about-media" data-reveal>
          <div className="about-main">
            <img
              src="/media/about-drone-cliff.jpg"
              alt="Drone pilot steering a camera drone with a remote controller"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-small">
            <img
              src="/media/about-drone-close.jpg"
              alt="Camera drone flying against a blue sky"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}