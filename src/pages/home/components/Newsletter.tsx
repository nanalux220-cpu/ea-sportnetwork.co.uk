import { useState, type FormEvent } from 'react';

const SUBMIT = 'https://readdy.ai/api/form/dblo86ube8r9umpno4ng';

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const trap = String(fd.get('contact_alt') || '').trim();
    if (trap) { setStatus('ok'); return; }
    fd.delete('contact_alt');

    setStatus('sending');
    setFormError('');
    try {
      const body = new URLSearchParams();
      fd.forEach((v, k) => body.append(k, String(v)));
      const response = await fetch(SUBMIT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: string } } | null = null;
      try { parsed = JSON.parse(responseText); } catch { parsed = null; }
      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      if (response.ok && parsed?.code === 'OK' && !/spam/i.test(serverMsg || '')) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
        setFormError(serverMsg || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setFormError('Could not send right now. Please check your connection and try again.');
    }
  };

  return (
    <section className="newsletter">
      <div className="wrap nl-grid">
        <div className="nl-copy">
          <p className="eyebrow" data-reveal>Newsletter</p>
          <h2 data-reveal>Subscribe our newsletter</h2>
          <p className="body-lg body-lg--on-dark" data-reveal>
            we ensure your audience connects with your brand across digital and print platforms. Let’s bring your
            vision to life with powerful storytelling!
          </p>

          <form id="ea-newsletter-form" data-readdy-form className="nl-form" onSubmit={onSubmit} data-reveal>
            <input
              type="text"
              name="contact_alt"
              className="alt-field"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              readOnly
            />
            <label htmlFor="nl-email" className="sr-only">Email address</label>
            <input id="nl-email" type="email" name="email" required placeholder="Your Email Address" />
            <button type="submit" className="btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Subscribe'}
            </button>
          </form>
          {status === 'ok' && <p className="nl-note nl-note--ok">Thanks — you are subscribed.</p>}
          {status === 'error' && <p className="nl-note nl-note--err">{formError}</p>}
        </div>

        <div className="nl-art" aria-hidden="true">
          <img
            src="https://readdy.ai/api/search-image?query=A%20professional%20camera%20drone%20hovering%20in%20mid%20air%20against%20a%20deep%20charcoal%20dusk%20sky%2C%20rotors%20blurred%20in%20motion%2C%20warm%20amber%20highlights%20on%20the%20carbon%20body%2C%20distant%20coastal%20lights%20softly%20out%20of%20focus%20below%2C%20cinematic%20studio%20lighting%2C%20high%20detail%2C%20dramatic%20minimal%20composition&width=1200&height=850&seq=ea-newsletter-drone-a8&orientation=landscape"
            alt=""
            width={1200}
            height={850}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}