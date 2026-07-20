import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Newspaper, ShieldCheck, Truck, Users } from "lucide-react";
import { BrandRail } from "@/components/sections/BrandRail";
import { Metrics } from "@/components/sections/Metrics";
import { LinkButton } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { Container, Section, SectionIntro } from "@/components/ui/Section";
import { brands } from "@/content/brands";
import { homeContent } from "@/content/home";
import { locations } from "@/content/locations";
import { newsArticles } from "@/content/news";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Official Sports Brand Distribution Partner in the UAE",
  "ARP connects official sports brands with wholesale buyers, retailers, institutions and customers across the UAE.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <Container>
          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <h1>{homeContent.hero.title}</h1>
              <p>{homeContent.hero.body}</p>
              <div className="hero-actions">
                <LinkButton href="/brands">{homeContent.hero.primaryCta}</LinkButton>
                <LinkButton href="/wholesale" variant="secondary">
                  {homeContent.hero.secondaryCta}
                </LinkButton>
              </div>
              <BrandRail />
            </div>
            <div className="home-hero-image">
              <Image src={site.assets.homeHero} alt="" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
            </div>
          </div>
          <Metrics compact />
        </Container>
      </section>

      <Section>
        <div className="split-section">
          <SectionIntro
            label="Why ARP"
            title="Structured support for official sports brand growth."
            body="ARP's website is built around the real-world needs of buyers: trust, availability, channels and next actions."
          />
          <div className="strength-list">
            {homeContent.strengths.map((item, index) => {
              const Icon = [ShieldCheck, Truck, Users, Building2][index];
              return (
                <Panel key={item.title} className="strength-panel">
                  <Icon size={28} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Panel>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="surface-band">
        <SectionIntro label="Brands" title="Official brands ARP represents." body="Six approved brands presented with clear pathways to catalogue, wholesale and where-to-buy actions." />
        <div className="overview-brand-grid">
          {brands.map((brand) => (
            <Link href={`/brands/${brand.slug}`} key={brand.slug} className="overview-brand">
              <span className={`brand-logo ${brand.logoClass}`}>{brand.logoText}</span>
              <span>{brand.category}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="cta-band">
          <div>
            <p className="eyebrow">Wholesale & Reseller</p>
            <h2>Become an ARP Retail Partner</h2>
            <p>Apply to connect with ARP&apos;s commercial team for official products, reliable supply and long-term partnership.</p>
          </div>
          <LinkButton href="/wholesale">Become an ARP Retail Partner</LinkButton>
        </div>
      </Section>

      <Section className="surface-band">
        <div className="where-preview">
          <div>
            <SectionIntro label="Where to Buy" title="Official branches and authorized resellers." body="Help customers find ARP-managed locations and approved sellers with confidence." />
            <LinkButton href="/contact#where-to-buy" variant="secondary">
              Find Locations
            </LinkButton>
          </div>
          <div className="mini-location-list">
            {locations.slice(0, 3).map((location) => (
              <Panel key={location.id} className="mini-location">
                <Image src={location.image ?? site.assets.store} alt="" width={142} height={92} />
                <div>
                  <strong>{location.name}</strong>
                  <span>{location.city}, UAE</span>
                  <small>{location.storeType}</small>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </Section>

      <Section>
      <SectionIntro label="News" title="Latest ARP updates." body="Temporary editorial content is centralized for replacement with approved company, brand and event news." />
        <div className="news-preview">
          <Link className="featured-story" href={`/news/${newsArticles[0].slug}`}>
            <Image src={newsArticles[0].heroImage} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <span>{newsArticles[0].category}</span>
            <h3>{newsArticles[0].title}</h3>
          </Link>
          <div className="supporting-stories">
            {newsArticles.slice(1).map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`}>
                <Newspaper size={22} aria-hidden="true" />
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
