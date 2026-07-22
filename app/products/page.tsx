import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3, ShieldCheck, Store, Truck } from "lucide-react";
import { BrandLogo } from "@/components/brands/BrandLogo";
import { LinkButton } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/Hero";
import { brands } from "@/content/brands";
import { productCategories, productLines } from "@/content/products";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Product Categories",
  "Explore ARP product categories by official brand, catalogue and local business pathway.",
  "/products",
);

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Product Categories"
        breadcrumb="Products"
        body="Browse ARP product categories by represented brand, buyer need and next business action. Product information is catalogue-led, not e-commerce."
        image={site.assets.brandHero}
      />

      <Section>
        <div className="section-intro">
          <p className="eyebrow">Category Overview</p>
          <h2>Structured product discovery for retailers, clubs and institutions.</h2>
          <p>
            Each category connects to approved brand pages, catalogue downloads, where-to-buy routes and wholesale
            enquiries.
          </p>
        </div>
        <div className="product-category-grid">
          {productCategories.map((category) => (
            <Link className="product-category-card" key={category.slug} href={`/products/${category.slug}`}>
              <div className="product-category-image">
                <Image src={category.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="product-chip-row">
                  {category.highlights.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Section>

      <Section className="surface-band">
        <div className="product-split">
          <div className="section-intro">
            <p className="eyebrow">Product Lines</p>
            <h2>Catalogue-led range pages without online ordering.</h2>
          </div>
          <div className="product-line-list">
            {productLines.slice(0, 4).map((line) => {
              const brand = brands.find((item) => item.slug === line.brandSlug);
              return (
                <Panel key={line.slug} className="product-line-row">
                  <div>
                    {brand ? <BrandLogo text={brand.logoText} className={brand.logoClass} compact /> : null}
                    <h3>{line.name}</h3>
                    <p>{line.summary}</p>
                  </div>
                  <LinkButton href={`/products/${line.categorySlug}/${line.slug}`} variant="secondary">
                    View Range
                  </LinkButton>
                </Panel>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="product-trust-row">
          {[
            { title: "Official Brand Pathways", body: "Products remain connected to represented brands.", Icon: ShieldCheck },
            { title: "Reliable Supply Context", body: "Built for B2B, reseller and institutional review.", Icon: Truck },
            { title: "Category Clarity", body: "Simple modules, not SKU-level filtering.", Icon: Layers3 },
            { title: "Where to Buy", body: "Clear routes to branches and authorized sellers.", Icon: Store },
          ].map(({ title, body, Icon }) => (
            <Panel key={title} className="product-trust-card">
              <Icon size={28} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </Panel>
          ))}
        </div>
      </Section>
    </>
  );
}
