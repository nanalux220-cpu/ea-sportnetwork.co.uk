import { contact } from '@/mocks/home';

export default function Locations() {
  return (
    <section className="sec locations" id="locations">
      <div className="wrap loc-grid">
        <div className="loc-copy">
          <p className="eyebrow" data-reveal>Locations</p>
          <h2 data-reveal>London locations</h2>
          <p className="body-lg" data-reveal>
            Each case study highlights our innovative approach, attention to detail, and client success stories,
            demonstrating how we transform ideas in Leeds
          </p>
          <a className="btn" href="#contact" data-reveal>
            View all location <i className="ri-arrow-right-line" />
          </a>
        </div>

        <div className="loc-map" data-reveal>
          <iframe
            title="Map showing the E.A Sport Graphics office at 42-44 Bishopsgate, London"
            src="https://www.google.com/maps?q=42-44%20Bishopsgate%2C%20London%20EC2N%204AH&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="loc-card">
            <div>
              <strong>London</strong>
              <p>{contact.address}</p>
            </div>
            <span className="loc-pin" aria-hidden="true"><i className="ri-map-pin-2-fill" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}