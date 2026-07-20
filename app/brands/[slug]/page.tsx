import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowDownToLine, ExternalLink, Globe2, Handshake, ShieldCheck, Trophy } from "lucide-react";
import { BrandLogo } from "@/components/brands/BrandLogo";
import { LinkButton } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { Container, Section } from "@/components/ui/Section";
import { brands, getBrand } from "@/content/brands";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const brand = getBrand(params.slug);
  if (!brand) return {};
  return pageMetadata(`${brand.name} UAE Distribution Partner`, brand.description, `/brands/${brand.slug}`);
}

export default function BrandDetailPage({ params }: { params: { slug: string } }) {
  const brand = getBrand(params.slug);
  if (!brand) notFound();

  return (
    <>
      <section className="brand-detail-hero">
        <Container>
          <div className="breadcrumb">Home / Brands / {brand.name}</div>
          <div className="brand-detail-grid">
            <div className="brand-detail-copy">
              <BrandLogo text={brand.logoText} className={brand.logoClass} />
              <p className="eyebrow">Official Partner</p>
              <h1>Official UAE Distribution Partner</h1>
              <p>{brand.relationship}</p>
              <div className="hero-actions">
                <LinkButton href={brand.globalWebsite} external>
                  Visit Global Brand Website
                </LinkButton>
                <LinkButton href="/contact#where-to-buy" variant="secondary">
                  Where to Buy
                </LinkButton>
              </div>
            </div>
            <div className="brand-detail-image">
              <Image src={site.assets.brandHero} alt="" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
            </div>
          </div>
          <div className="trust-modules">
            {[
              { title: "Official Partner", body: "Authorized distribution pathway in the UAE", Icon: ShieldCheck },
              { title: "Global Quality", body: "Brand profile content managed centrally", Icon: Globe2 },
              { title: "Performance Driven", body: "Category-led discovery without e-commerce", Icon: Trophy },
              { title: "Strong Partnership", body: "Wholesale, retail and reseller actions", Icon: Handshake },
            ].map(({ title, body, Icon }) => (
              <div key={String(title)}>
                <Icon size={28} aria-hidden="true" />
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <div className="brand-info-grid">
          <Panel>
            <h2>About {brand.name}</h2>
            <p>{brand.introduction}</p>
          </Panel>
          <Panel>
            <h2>Our Partnership</h2>
            <ul className="check-list">
              <li>Official distribution partner content area</li>
              <li>Authorized supply to retail, clubs and institutions</li>
              <li>Local business support and contact pathways</li>
              <li>After-sales and warranty support content area</li>
            </ul>
          </Panel>
          <Panel>
            <h2>Product Categories</h2>
            <div className="category-list">
              {brand.categories.map((category) => (
                <a key={category} href="/contact#where-to-buy">
                  {category}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </Panel>
          <Panel>
            <h2>Region & Territory</h2>
            <div className="uae-map-mini" aria-hidden="true" />
            <p>Distribution territory content should be confirmed by ARP before publication.</p>
          </Panel>
        </div>
      </Section>

      <Section className="surface-band">
        <div className="brand-action-grid">
          <Panel className="catalogue-panel">
            <h2>{brand.name} UAE Product Catalogue</h2>
            <p>Download link is managed from the central brand data file.</p>
            <LinkButton href={brand.catalogue.url} variant="secondary">
              <ArrowDownToLine size={17} aria-hidden="true" />
              {brand.catalogue.label}
            </LinkButton>
          </Panel>
          <Panel className="brand-local-action">
            <h2>Explore {brand.name} in the UAE</h2>
            <p>Discover local purchase routes through ARP&apos;s network of official branches and authorized sellers.</p>
            <LinkButton href="/contact#where-to-buy">Where to Buy</LinkButton>
          </Panel>
          <Panel className="brand-local-action">
            <h2>Let&apos;s Work Together</h2>
            <p>For partnership enquiries, bulk orders or institutional requirements.</p>
            <LinkButton href="/wholesale" variant="secondary">
              Wholesale Inquiry
            </LinkButton>
          </Panel>
        </div>
      </Section>
    </>
  );
}
