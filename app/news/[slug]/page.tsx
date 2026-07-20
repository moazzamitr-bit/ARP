import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { getArticle, newsArticles } from "@/content/news";
import { formatDate } from "@/lib/utils";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return pageMetadata(article.title, article.excerpt, `/news/${article.slug}`);
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const related = newsArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <section className="article-hero">
        <Container>
          <Link href="/news" className="back-link">
            <ArrowLeft size={18} aria-hidden="true" /> Back to News
          </Link>
          <span className="micro-label">{article.category} / {formatDate(article.date)}</span>
          <h1>{article.title}</h1>
          <div className="article-hero-image">
            <Image src={article.heroImage} alt="" fill priority sizes="100vw" />
          </div>
        </Container>
      </section>
      <Section>
        <article className="article-body">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <div className="related-stories">
          {related.map((item) => (
            <Link href={`/news/${item.slug}`} key={item.slug}>
              {item.title}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
