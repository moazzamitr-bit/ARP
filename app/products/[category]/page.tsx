import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download, Store } from "lucide-react";
import { BrandLogo } from "@/components/brands/BrandLogo";
import { LinkButton } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Panel } from "@/components/ui/Panel";
import { brands } from "@/content/brands";
import { getProductCategory, getProductLinesForCategory, productCategories } from "@/content/products";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = getProductCategory(params.category);
  if (!category) return {};
  return pageMetadata(`${category.title} Products`, category.description, `/products/${category.slug}`);
}

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  const category = getProductCategory(params.category);
  if (!category) notFound();

  const categoryBrands = brands.filter((brand) => category.brandSlugs.includes(brand.slug));
  const lines = getProductLinesForCategory(category.slug);

  return (
    <>
      <section className="product-hero">
        <Container>
          <div className="breadcrumb">Home / Products / {category.title}</div>
          <div className="product-hero-grid">
            <div className="product-hero-copy">
              <p className="eyebrow">Product Category</p>
              <h1>{category.title}</h1>
              <p>{category.description}</p>
              <div className="hero-actions">
                <LinkButton href="#ranges">Explore Ranges</LinkButton>
                <LinkButton href="/wholesale" variant="secondary">
                  Wholesale Inquiry
                </LinkButton>
              </div>
            </div>
            <div className="product-hero-image">
              <Image src={category.image} alt="" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="product-split">
          <div>
            <p className="eyebrow">Represented Brands</p>
            <h2>Brand-backed category availability.</h2>
            <p>ARP can replace these modules with final approved brand/category content before launch.</p>
          </div>
          <div className="category-brand-strip">
            {categoryBrands.map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`}>
                <BrandLogo text={brand.logoText} className={brand.logoClass} />
                <span>{brand.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section id="ranges" className="surface-band">
        <div className="section-intro">
          <p className="eyebrow">Range Overview</p>
          <h2>Product lines for catalogue review and B2B enquiry.</h2>
        </div>
        <div className="product-range-grid">
          {lines.map((line) => {
            const brand = brands.find((item) => item.slug === line.brandSlug);
            return (
              <Link className="product-range-card" key={line.slug} href={`/products/${category.slug}/${line.slug}`}>
                <div className="product-range-image">
                  <Image src={line.image} alt="" fill sizes="(max-width: 900px) 100vw, 36vw" />
                </div>
                <div>
                  {brand ? <BrandLogo text={brand.logoText} className={brand.logoClass} compact /> : null}
                  <h3>{line.name}</h3>
                  <p>{line.summary}</p>
                  <div className="product-chip-row">
                    {line.categoryModules.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="brand-action-grid">
          <Panel className="brand-local-action">
            <Download size={26} aria-hidden="true" />
            <h2>Catalogue First</h2>
            <p>Use brand catalogue downloads for approved range details and product specifications.</p>
          </Panel>
          <Panel className="brand-local-action">
            <Store size={26} aria-hidden="true" />
            <h2>Local Availability</h2>
            <p>Find official ARP branches and authorized sellers for supported categories.</p>
            <LinkButton href="/contact#where-to-buy" variant="secondary">
              Where to Buy
            </LinkButton>
          </Panel>
        </div>
      </Section>
    </>
  );
}

