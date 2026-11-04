import { useEffect, useState } from 'react';
import Chapter from './components/Chapter';
import HeroCards from './components/HeroCards';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Mission from './components/Mission';
import Locations from './components/Locations';
import Work from './components/Work';
import Newsletter from './components/Newsletter';
import SiteFooter from './components/SiteFooter';
import BrandMark from '@/components/feature/BrandMark';
import { navLinks } from '@/mocks/home';
import useSiteMotion from './hooks/useSiteMotion';

export default function Home() {
  useSiteMotion();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menu]);

  return (
    <>
      <header className="site-head nav">
        <div className="head-inner">
          <a href="#home" className="brand" aria-label="E.A Sport Graphics home">
            <BrandMark tone="light" />
          </a>

          <nav className="nav-links" aria-label="Main">
            {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>

          <a href="#contact" className="btn btn--sm head-cta">Contact Us</a>

          <button
            type="button"
            className="nav-burger"
            aria-label={menu ? 'Close menu' : 'Open menu'}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <i className={menu ? 'ri-close-line' : 'ri-menu-line'} />
          </button>
        </div>

        {menu && (
          <div className="nav-mobile">
            {[...navLinks, { href: '#contact', label: 'Contact Us' }].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenu(false)}>{l.label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <Chapter />
        <HeroCards />
        <About />
        <WhyUs />
        <Services />
        <Mission />
        <Locations />
        <Work />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}