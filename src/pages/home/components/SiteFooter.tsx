import { footerMenu, footerServices, contact } from '@/mocks/home';
import BrandMark from '@/components/feature/BrandMark';

const quickLinks = [
  { icon: 'ri-mail-line', label: 'Email E.A Sport Graphics', href: `mailto:${contact.email}`, external: false },
  { icon: 'ri-phone-line', label: 'Call 07707 066972', href: `tel:${contact.phone}`, external: false },
  { icon: 'ri-whatsapp-line', label: 'Message on WhatsApp', href: 'https://wa.me/447707066972', external: true },
  {
    icon: 'ri-map-pin-line',
    label: 'Directions to 42-44 Bishopsgate, London',
    href: 'https://www.google.com/maps/search/?api=1&query=42-44%20Bishopsgate%2C%20London%20EC2N%204AH',
    external: true,
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#home" aria-label="E.A Sport Graphics home">
              <BrandMark />
            </a>
            <p>
              We are based in the vibrant and creative city of Leeds, offering our services online to clients worldwide.
              Our digital platform ensures seamless communication and collaboration, no matter where you are.
            </p>
          </div>

          <div className="foot-col">
            <h4>Quick Menu</h4>
            <ul>
              {footerMenu.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              {footerServices.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Contacts</h4>
            <p className="foot-addr">{contact.address}</p>
            <p className="foot-addr">
              <a href={`tel:${contact.phone}`}>{contact.phoneLabel}</a>
            </p>
            <p className="foot-addr">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        </div>

        <div className="foot-bottom">
          <span>Copyright© 2023 Ea-Sportsnetwork - All Rights Reserved.</span>
          <div className="foot-social">
            {quickLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}