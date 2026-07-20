import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/Hero";
import { Panel } from "@/components/ui/Panel";
import { Section, SectionIntro } from "@/components/ui/Section";
import { newsArticles } from "@/content/news";
import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "News & Blog",
  "Read ARP company updates, brand news, product launches, partnerships and event stories.",
  "/news",
);

export default function NewsPage() {
  const [featured, ...articles] = newsArticles;

  return (
    <>
      <PageHero
        title="News & Blog"
        body="Temporary editorial content is stored centrally and ready for replacement with approved ARP updates."
        image={site.assets.footerRunner}
      />
      <Section>
        <SectionIntro label="Featured Article" title="Company and brand updates in a clean editorial format." />
        <Link href={`/news/${featured.slug}`} className="featured-article">
          <Image src={featured.heroImage} alt="" fill sizes="(max-width: 900px) 100vw, 54vw" />
          <div>
            <span>{featured.category} / {formatDate(featured.date)}</span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <strong>
              Read Article <ArrowRight size={18} aria-hidden="true" />
            </strong>
          </div>
        </Link>
      </Section>
      <Section className="surface-band">
        <SectionIntro label="Article List" title="Latest stories." />
        <div className="article-list">
          {articles.map((article) => (
            <Panel key={article.slug} className="article-row">
              <div>
                <span className="micro-label">{article.category} / {formatDate(article.date)}</span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
              </div>
              <Link href={`/news/${article.slug}`} className="text-link">
                Read Article
              </Link>
            </Panel>
          ))}
        </div>
      </Section>
    </>
  );
}
