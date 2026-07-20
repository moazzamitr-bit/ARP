# ARP Website Design Audit

Source references copied into `/design-references/`:

- `partner-reseller-reference.png`: wholesale/reseller hero, benefit modules, application form.
- `authorized-resellers-reference.png`: contact/where-to-buy tabbed branch and reseller finder.
- `locations-reference.png`: location map/list/detail composition.
- `about-reference.png`: about hero, metrics, timeline, values.
- `brand-partner-reference.png`: reusable brand detail template.
- `footer-reference.png`: footer CTA strip and multi-column footer.

Design inventory:

- Canvas: true white page with very pale blue surface bands only where modules need grouping.
- Container: reference browser content area maps to a centered site container around 1280px, with desktop gutters near 40px and mobile gutters near 20px.
- Header: sticky, 76-88px tall, white, thin bottom border after scroll, ARP wordmark left, centered nav, deep blue rounded CTA right.
- Typography: Manrope-like sans, deep blue headlines, green emphasis words, section headings around 40-48px desktop, body 16-18px with open line height, labels 12-14px uppercase or semibold.
- Palette: primary blue `#0B3D91`, dark blue `#082E6B`, green `#2EAD4B`, muted text `#667085`, border `#E1E7EF`, surfaces `#F6F8FB` and `#EEF3F8`.
- Buttons: pill-like but controlled, 10-12px radius, primary blue fill with white text and arrow icon, secondary white outline with blue text.
- Cards/modules: soft white panels, 14-20px radius, fine borders, restrained shadow. No nested decorative card systems.
- Imagery: large right-side or full-band sport/Dubai assets with white edge fades and diagonal blue/green motion ribbons.
- Forms: two-column desktop grid, single-column mobile, clear labels, bordered inputs, red error text, full-width primary submit.
- Locations: tab bar, compact filters, two-column list plus map/detail on desktop, map-ready placeholder if no API key.
- Footer: upper CTA strip with left blue panel, center runner image, right newsletter; lower multi-column links with brand row and trust badges.

Reference mapping:

- Home: hero language from brand/partner/footer references; authority modules from about; where-to-buy and news sections follow locations/reseller density.
- About: `about-reference.png`.
- Brands list: derived from brand detail reference card rhythm, but limited to approved six brands.
- Brand detail: `brand-partner-reference.png`.
- Wholesale: `partner-reseller-reference.png`.
- News: editorial extension of the footer and corporate section rhythm; no dense blog grid.
- Contact: `authorized-resellers-reference.png` plus `locations-reference.png`.
- Footer: `footer-reference.png`.

Visual QA ledger is maintained in `docs/visual-qa-ledger.md`.
