import { services } from '@/mocks/home';

export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="svc-head">
          <div>
            <p className="eyebrow" data-reveal>Services</p>
            <h2 data-reveal>Our Services</h2>
          </div>
          <p className="body-lg" data-reveal>
            We create unique and memorable brand identities that leave a lasting impression. we craft stunning visuals
            that enhance your brand’s presence.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((s) => (
            <a className="svc" href="#contact" key={s.title} data-reveal>
              <img src={s.img} alt={`${s.title} — E.A Sport Graphics service`} loading="lazy" decoding="async" />
              <span className="svc-shade" aria-hidden="true" />
              <span className="svc-body">
                <span className="svc-title">{s.title}</span>
                <span className="svc-text">{s.text}</span>
                <span className="svc-arrow" aria-hidden="true"><i className="ri-arrow-right-line" /></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}