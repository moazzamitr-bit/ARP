import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck, Truck, Undo2 } from "lucide-react";
import { BrandLogo } from "@/components/brands/BrandLogo";
import { brands } from "@/content/brands";
import { contactDetails, site } from "@/content/site";
import { LinkButton } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const footerColumns = [
  {
    title: "About ARP",
    links: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Story", href: "/about#timeline" },
      { label: "Our Values", href: "/about#values" },
      { label: "News & Media", href: "/news" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "All Brands", href: "/brands" },
      { label: "Racquet Sports", href: "/brands?category=Racquet%20Sports" },
      { label: "Cricket", href: "/brands?category=Cricket" },
      { label: "Sports Goods", href: "/brands?category=Sports%20Goods" },
    ],
  },
  {
    title: "Wholesale",
    links: [
      { label: "Partner With Us", href: "/wholesale" },
      { label: "Wholesale Benefits", href: "/wholesale#benefits" },
      { label: "Application", href: "/wholesale#application" },
    ],
  },
  {
    title: "Stores",
    links: [
      { label: "Where to Buy", href: "/contact#where-to-buy" },
      { label: "Official Branches", href: "/contact#where-to-buy" },
      { label: "Authorized Resellers", href: "/contact#where-to-buy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="footer-cta">
          <div className="footer-cta-blue">
            <p className="eyebrow">Partner With ARP</p>
            <h2>Let&apos;s Build Winning Partnerships</h2>
            <p>Join a network of global brands and grow with ARP across the UAE.</p>
            <LinkButton href="/wholesale" variant="secondary">
              Partner With Us
            </LinkButton>
          </div>
          <div className="footer-cta-image" aria-hidden="true">
            <Image src={site.assets.footerRunner} alt="" fill sizes="(max-width: 1100px) 100vw, 34vw" />
          </div>
          <form className="newsletter" action="/api/forms/contact" method="post">
            <ShieldCheck aria-hidden="true" />
            <h2>Stay in the Game</h2>
            <p>Subscribe for product launches, news and partner updates.</p>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="newsletter-row">
              <input id="newsletter-email" name="email" type="email" placeholder="Enter your email" required />
              <button aria-label="Subscribe" type="submit">
                <Mail size={18} aria-hidden="true" />
              </button>
            </div>
            <label className="checkbox-label">
              <input type="checkbox" name="consent" required />
              <span>I agree to receive communications from ARP Group.</span>
            </label>
          </form>
        </div>

        <div className="footer-main">
          <div className="footer-identity">
            <Logo />
            <p>Official sports brand distribution partner in the UAE.</p>
            <div className="social-links" aria-label="Social links">
              <Link href="#" aria-label="Facebook">
                <Facebook size={18} aria-hidden="true" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram size={18} aria-hidden="true" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title} className="footer-column">
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <Link key={link.href + link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <a href={`tel:${contactDetails.telephone.replace(/\s/g, "")}`}>
              <Phone size={16} aria-hidden="true" />
              {contactDetails.telephone}
            </a>
            <a href={`mailto:${contactDetails.email}`}>
              <Mail size={16} aria-hidden="true" />
              {contactDetails.email}
            </a>
            <span>
              <MapPin size={16} aria-hidden="true" />
              {contactDetails.officeAddress}
            </span>
            <LinkButton href="/contact" variant="secondary">
              Contact Us
            </LinkButton>
          </div>
        </div>

        <div className="footer-brand-row">
          <div>
            <p className="micro-label">Our Brands</p>
            <div className="footer-logos">
              {brands.map((brand) => (
                <Link key={brand.slug} href={`/brands/${brand.slug}`}>
                  <BrandLogo text={brand.logoText} className={brand.logoClass} compact />
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-trust">
            <span>
              <ShieldCheck size={18} /> Official Products
            </span>
            <span>
              <Truck size={18} /> Reliable Supply
            </span>
            <span>
              <Undo2 size={18} /> Partner Support
            </span>
          </div>
        </div>

        <div className="footer-legal">
          <p>© 2026 ARP Group. All rights reserved.</p>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
