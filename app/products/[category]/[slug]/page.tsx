import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDownToLine, ExternalLink, ShieldCheck, Store, Truck } from "lucide-react";
import { BrandLogo } from "@/components/brands/BrandLogo";
import { LinkButton } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Panel } from "@/components/ui/Panel";
import { getBrand } from "@/content/brands";
import {
  getProductCategory,
  getProductLine,
  productCategories,
  productLines,
} from "@/content/products";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return productLines.map((line) => ({ category: line.categorySlug, slug: line.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const line = getProductLine(params.category, params.slug);
  if (!line) return {};
  return pageMetadata(line.name, line.summary, `/products/${line.categorySlug}/${line.slug}`);
}

export default function ProductLinePage({ params }: { params: { category: string; slug: string } }) {
  const category = getProductCategory(params.category);
  const line = getProductLine(params.category, params.slug);
  if (!category || !line) notFound();

  const brand = getBrand(line.brandSlug);
  const related = productCategories.filter((item) => item.slug !== category.slug).slice(0, 3);

  return (
    <>
      <section className="product-detail-hero">
        <Container>
          <div className="breadcrumb">Home / Products / {category.title} / {line.name}</div>
          <div className="product-detail-grid">
            <div className="product-detail-copy">
              {brand ? <BrandLogo text={brand.logoText} className={brand.logoClass} /> : null}
              <p className="eyebrow">Product Line</p>
              <h1>{line.name}</h1>
              <p>{line.description}</p>
              <div className="hero-actions">
                <LinkButton href={line.catalogue.url}>
                  <ArrowDownToLine size={17} aria-hidden="true" />
                  {line.catalogue.label}
                </LinkButton>
                <LinkButton href="/wholesale" variant="secondary">
                  Wholesale Inquiry
                </LinkButton>
              </div>
            </div>
            <div className="product-detail-image">
              <Image src={line.image} alt="" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="product-detail-layout">
          <Panel className="product-modules-panel">
            <h2>Category Modules</h2>
            <div className="product-module-list">
              {line.categoryModules.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Panel>
          <Panel className="product-modules-panel">
            <h2>Common Buying Context</h2>
            <ul className="check-list">
              {line.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
          <Panel className="product-verification-panel">
            <ShieldCheck size={30} aria-hidden="true" />
            <div>
              <h2>Official Brand Pathway</h2>
              <p>
                This page is a catalogue-led product overview. Final product specifications, certifications or claims
                must come from ARP-approved material.
              </p>
            </div>
          </Panel>
        </div>
      </Section>

      <Section className="surface-band">
        <div className="brand-action-grid">
          {brand ? (
            <Panel className="brand-local-action">
              <h2>{brand.name} Brand Page</h2>
              <p>Review the represented brand profile, catalogue and local UAE actions.</p>
              <LinkButton href={`/brands/${brand.slug}`} variant="secondary">
                View Brand
                <ExternalLink size={16} aria-hidden="true" />
              </LinkButton>
            </Panel>
          ) : null}
          <Panel className="brand-local-action">
            <Store size={26} aria-hidden="true" />
            <h2>Where to Buy</h2>
            <p>Find official ARP branches and authorized sellers for supported categories.</p>
            <LinkButton href="/contact#where-to-buy">Find Locations</LinkButton>
          </Panel>
          <Panel className="brand-local-action">
            <Truck size={26} aria-hidden="true" />
            <h2>Wholesale Supply</h2>
            <p>For retail partner, club, academy or institutional supply conversations.</p>
            <LinkButton href="/wholesale" variant="secondary">
              Become a Partner
            </LinkButton>
          </Panel>
        </div>
      </Section>

      <Section>
        <div className="section-intro">
          <p className="eyebrow">Related Categories</p>
          <h2>Continue exploring ARP product categories.</h2>
        </div>
        <div className="related-product-categories">
          {related.map((item) => (
            <Link key={item.slug} href={`/products/${item.slug}`}>
              {item.title}
              <ExternalLink size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

