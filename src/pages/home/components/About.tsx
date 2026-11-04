import { stats } from '@/mocks/home';

export default function About() {
  return (
    <section className="sec sec--about" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="eyebrow" data-reveal>Welcome</p>
          <h2 data-reveal>About EA Sport Graphics</h2>
          <p className="body-lg" data-reveal>
            E.A SPORTNETWORK is a premier graphic design company based in Leeds, United Kingdom, specializing in
            innovative and visually compelling designs. We bring brands to life through creative storytelling,
            cutting-edge design techniques, and strategic visual communication.
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
            Learn more <i className="ri-arrow-right-line" />
          </a>
        </div>

        <div className="about-media" data-reveal>
          <div className="about-main">
            <img
              src="https://readdy.ai/api/search-image?query=Aerial%20photograph%20taken%20from%20a%20drone%20above%20a%20rugged%20clifftop%20at%20dusk%2C%20dark%20coastline%20with%20white%20surf%20breaking%20on%20black%20rocks%20below%2C%20a%20camera%20operator%20silhouette%20on%20the%20headland%2C%20deep%20charcoal%20shadows%20and%20warm%20amber%20highlights%2C%20cinematic%20editorial%20photography%2C%20high%20detail%2C%20moody%20overcast%20sky&width=1600&height=1067&seq=ea-about-drone-cliff-a1&orientation=landscape"
              alt="Drone pilot flying above a clifftop coastline at dusk for an E.A Sport Graphics shoot"
              width={1600}
              height={1067}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-small">
            <img
              src="https://readdy.ai/api/search-image?query=Close%20detail%20of%20a%20professional%20camera%20drone%20resting%20on%20dark%20slate%2C%20carbon%20fibre%20arms%20and%20gimbal%20camera%20in%20sharp%20focus%2C%20soft%20dusk%20light%20with%20a%20warm%20amber%20rim%20light%2C%20deep%20charcoal%20background%2C%20cinematic%20product%20photography%2C%20high%20detail%2C%20shallow%20depth%20of%20field&width=1600&height=400&seq=ea-about-drone-close-a2&orientation=landscape"
              alt="Close detail of the camera drone used for aerial photography"
              width={1600}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}