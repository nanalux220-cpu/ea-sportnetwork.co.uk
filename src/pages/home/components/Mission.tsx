export default function Mission() {
  return (
    <section className="sec sec--muted">
      <div className="wrap mission-grid">
        <div className="mission-media" data-reveal>
          <img
            src="/media/mission-kit.jpg"
            alt="Close-up of a camera drone with its propellers spinning"
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mission-copy">
          <p className="eyebrow" data-reveal>Mission</p>
          <h2 data-reveal>Aerial photography that stands out</h2>
          <p className="body-lg" data-reveal>
            E.A Sport Graphics offers high-quality aerial photography, capturing stunning visuals from unique
            perspectives. Whether for real estate, events, sports or commercial projects, our aerial shots deliver
            breathtaking clarity and creativity that help your brand stand out.
          </p>
          <a className="btn" href="#contact" data-reveal>
            Book a shoot <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}