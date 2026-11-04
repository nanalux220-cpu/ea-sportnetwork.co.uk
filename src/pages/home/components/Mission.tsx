export default function Mission() {
  return (
    <section className="sec sec--muted">
      <div className="wrap mission-grid">
        <div className="mission-media" data-reveal>
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20drone%20equipment%20laid%20out%20on%20a%20dark%20slate%20workbench%2C%20spare%20propellers%2C%20batteries%2C%20controller%20and%20hard%20case%20arranged%20in%20a%20neat%20row%2C%20warm%20amber%20workshop%20light%20from%20the%20side%2C%20deep%20charcoal%20background%2C%20cinematic%20product%20photography%2C%20high%20detail%2C%20top%20down&width=1600&height=1067&seq=ea-mission-kit-a7&orientation=landscape"
            alt="Aerial photography drone kit laid out before a flight"
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mission-copy">
          <p className="eyebrow" data-reveal>Mission</p>
          <h2 data-reveal>Our Graphics</h2>
          <p className="body-lg" data-reveal>
            offers high-quality aerial photography services, capturing stunning visuals from unique perspectives.
            Whether for real estate, events, sports, or commercial projects, our aerial shots deliver breathtaking
            clarity and creativity, helping your brand stand out.
          </p>
          <a className="btn" href="#contact" data-reveal>
            Learn more <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}