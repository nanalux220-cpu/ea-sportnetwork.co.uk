import { whyUs } from '@/mocks/home';
import StudioReel from '@/pages/home/components/StudioReel';

export default function WhyUs() {
  return (
    <section className="sec why">
      <div className="wrap">
        <div className="why-head">
          <div>
            <p className="eyebrow" data-reveal>Why us</p>
            <h2 data-reveal>Why Choose Us</h2>
          </div>
          <p className="body-lg body-lg--on-dark" data-reveal>
            We blend creativity with technology to deliver high-quality, bespoke design tailored to your vision,
            whether you’re a startup, a growing business or an established brand.
          </p>
        </div>

        <div className="why-cols">
          {whyUs.map((w) => (
            <div className="why-col" key={w.title} data-reveal>
              <span className="why-icon" aria-hidden="true"><i className={w.icon} /></span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>

        <StudioReel />
      </div>
    </section>
  );
}