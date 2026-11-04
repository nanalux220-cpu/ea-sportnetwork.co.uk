import { useState, type FormEvent } from 'react';

const INBOX = 'info@ea-sportnetwork.co.uk';

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get('email') || '').trim();
    if (!email) return;
    const subject = encodeURIComponent('Newsletter signup');
    const body = encodeURIComponent(`Please add ${email} to the E.A Sport Graphics newsletter.`);
    window.location.href = `mailto:${INBOX}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="newsletter">
      <div className="wrap nl-grid">
        <div className="nl-copy">
          <p className="eyebrow" data-reveal>Newsletter</p>
          <h2 data-reveal>Subscribe to our newsletter</h2>
          <p className="body-lg body-lg--on-dark" data-reveal>
            Get design tips, new work and studio news straight to your inbox. Let’s bring your vision to life with
            powerful storytelling.
          </p>

          <form id="ea-newsletter-form" className="nl-form" onSubmit={onSubmit} data-reveal>
            <label htmlFor="nl-email" className="sr-only">Email address</label>
            <input id="nl-email" type="email" name="email" required placeholder="Your email address" />
            <button type="submit" className="btn">Subscribe</button>
          </form>
          {sent && (
            <p className="nl-note nl-note--ok">
              Thanks! Your email app should open so you can send your signup to {INBOX}.
            </p>
          )}
        </div>

        <div className="nl-art" aria-hidden="true">
          <img
            src="/media/newsletter-drone.jpg"
            alt=""
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}