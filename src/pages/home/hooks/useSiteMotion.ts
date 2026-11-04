import { useEffect } from 'react';

export default function useSiteMotion() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const nav = document.querySelector('.nav');
    if (nav) {
      const f = () => nav.classList.toggle('is-solid', window.scrollY > 24);
      window.addEventListener('scroll', f, { passive: true }); f();
      cleanups.push(() => window.removeEventListener('scroll', f));
    }
    const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (REDUCED) return () => cleanups.forEach((c) => c());

    // pointer parallax
    if (matchMedia('(pointer: fine)').matches) {
      const root = document.documentElement;
      let tx = 0; let ty = 0; let mx = 0; let my = 0; let mraf = 0;
      const settle = () => {
        mx += (tx - mx) * 0.08; my += (ty - my) * 0.08;
        root.style.setProperty('--mx', mx.toFixed(3));
        root.style.setProperty('--my', my.toFixed(3));
        mraf = Math.abs(tx - mx) + Math.abs(ty - my) > 0.002 ? requestAnimationFrame(settle) : 0;
      };
      const aim = (x: number, y: number) => { tx = x; ty = y; if (!mraf) mraf = requestAnimationFrame(settle); };
      const pm = (e: PointerEvent) => aim((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
      const ml = () => aim(0, 0);
      window.addEventListener('pointermove', pm, { passive: true });
      document.addEventListener('mouseleave', ml);
      cleanups.push(() => { window.removeEventListener('pointermove', pm); document.removeEventListener('mouseleave', ml); cancelAnimationFrame(mraf); });
    }

    // reveal
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in'); io.unobserve(e.target);
    }), { rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      const sibs = [...(el.parentElement?.children || [])].filter((c) => c.hasAttribute('data-reveal'));
      el.style.setProperty('--i', String(sibs.indexOf(el)));
      io.observe(el);
    });
    cleanups.push(() => io.disconnect());

    // parallax
    const layers = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
    let raf = 0;
    const paint = () => {
      raf = 0;
      const h = window.innerHeight;
      layers.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -h || r.top > 2 * h) return;
        const centre = (r.top + r.height / 2 - h / 2) / h;
        let speed = parseFloat(el.dataset.parallax || '0.32');
        if (el.classList.contains('panel-bg') && window.innerWidth < 780) speed = Math.min(speed, 0.22);
        el.style.setProperty('--py', `${(centre * -speed * h).toFixed(1)}px`);
      });
    };

    // resample smoothing
    const SOFT = '.stage video, .plate, .panel-bg';
    const soften = (el: Element) => {
      const m = el as HTMLImageElement & HTMLVideoElement;
      const nw = m.naturalWidth || m.videoWidth; const nh = m.naturalHeight || m.videoHeight;
      if (!nw || !nh) return;
      const r = m.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const factor = Math.max(r.width / nw, r.height / nh);
      const px = factor <= 1.15 ? 0 : Math.min(1.6, Math.max(0.4, (factor - 1) * 1.2));
      m.style.setProperty('--soften', `${px.toFixed(2)}px`);
    };
    const softenAll = () => document.querySelectorAll(SOFT).forEach(soften);
    const onLoad = (e: Event) => { const t = e.target as Element; if (t.matches?.(SOFT)) soften(t); };
    document.addEventListener('load', onLoad, true);
    document.addEventListener('loadedmetadata', onLoad, true);
    softenAll();

    // manifesto
    const manifestos = [...document.querySelectorAll<HTMLElement>('[data-words]')].map((el) => {
      if (!el.querySelector('.w')) {
        const wrap = (node: Node) => {
          [...node.childNodes].forEach((child) => {
            if (child.nodeType === 3) {
              const frag = document.createDocumentFragment();
              (child.textContent || '').split(/(\s+)/).forEach((part) => {
                if (!part) return;
                if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
                const w = document.createElement('span'); w.className = 'w'; w.textContent = part; frag.appendChild(w);
              });
              child.replaceWith(frag);
            } else if (child.nodeType === 1) wrap(child);
          });
        };
        wrap(el);
      }
      return { section: el.closest('section') || el, words: [...el.querySelectorAll<HTMLElement>('.w')] };
    });
    const light = () => {
      const h = window.innerHeight;
      manifestos.forEach((m) => {
        const r = m.section.getBoundingClientRect();
        if (r.bottom < 0 || r.top > h) return;
        const p = Math.min(1, Math.max(0, (h * 0.8 - r.top) / (r.height + h * 0.45)));
        const n = m.words.length;
        m.words.forEach((w, i) => w.style.setProperty('--lit', p * (n + 1) > i + 1 ? '1' : '0'));
      });
    };

    const onScroll = () => { requestAnimationFrame(light); if (!raf) raf = requestAnimationFrame(paint); };
    const onResize = () => { paint(); softenAll(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    paint(); light();
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('load', onLoad, true);
      document.removeEventListener('loadedmetadata', onLoad, true);
    });
    return () => cleanups.forEach((c) => c());
  }, []);
}