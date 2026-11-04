# E.A Sport Graphics — ea-sportnetwork.co.uk

## 1. Project Description
A fully coded, one-page rebuild of ea-sportnetwork.co.uk, previously a WordPress/Elementor site. Despite the domain name, the business is **E.A Sport Graphics**: a graphic design and aerial photography studio based in Leeds, UK, working with clients worldwide.
Audience: brands, property, sport and event clients who need photography shot from the air plus identity, print and motion design.
Presentation: the original site's own brand — its logo, its white/orange palette and its published wording — rebuilt as a single fast page instead of a WordPress install.

## 2. Page Structure
- `/` — Home, one page, with in-page anchors: hero, about, services, locations, projects, contact/newsletter.

## 3. Core Features
- [x] Brand typography mark (wordmark) instead of the unavailable logo file
- [x] Purpose-shot imagery in one dusk/amber style, hosted on the project CDN
- [x] White page with charcoal bands and orange accent (original palette)
- [x] Autoplaying aerial film on the first screen with the original headline
- [x] Three intro cards (Portfolio & Case Studies / Branding Elements / Content & Messaging)
- [x] About block with the studio copy and the 50+ / 70+ / 99% / 15+ numbers
- [x] Why Choose Us dark band with the three process icons
- [x] Studio showreel band: coded three-chapter motion loop (Discuss / Create / Produce), auto-advancing, clickable chapters, hover to pause
- [x] Four service cards (Graphic Design, AeroView, Motion Graphics, Logo Design)
- [x] Mission / Our Graphics split section
- [x] London locations block with Google map embed and address card
- [x] Latest projects masonry gallery with click-to-enlarge lightbox
- [x] Newsletter signup (built-in Form endpoint)
- [x] Footer with wordmark, quick menu, services, London address, phone and working contact shortcuts
- [x] Mobile navigation

## 4. Data Model Design
None yet — everything shown on the page lives in `src/mocks/home.ts` and mirrors the original site's content.

## 5. Backend / Third-party Integration Plan
- Database: not needed for a one-page marketing site
- Form: newsletter signup opens an email to info@ea-sportnetwork.co.uk
- Media: all photography generated in one dusk/amber art direction and served from the project CDN; hero film from the project CDN
- Later: a client area would need a backend such as Supabase

## 6. Development Phase Plan
### Phase 1: One-page rebuild with original brand (done)
### Phase 2: Separate project pages for each case study, opened from the gallery
### Phase 3: Contact page with the enquiry form and studio details
### Phase 4: Journal / news posts
## 7. Credits
Designed and built by [creativedleading.co.uk](https://creativedleading.co.uk).
