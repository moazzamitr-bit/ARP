import { site } from "./site";
import type { NewsArticle } from "./types";

export const newsArticles: NewsArticle[] = [
  {
    slug: "arp-partner-network-update",
    title: "ARP Partner Network Update",
    category: "Company News",
    date: "2026-07-18",
    excerpt: "Temporary article content showing how ARP can publish company updates.",
    heroImage: site.assets.footerRunner,
    body: [
      "This temporary article demonstrates the editorial template and should be replaced with approved ARP news copy.",
      "The page supports category labels, dates, a hero image, article body blocks and related stories.",
    ],
  },
  {
    slug: "brand-availability-announcement",
    title: "Brand Availability Announcement",
    category: "Brand News",
    date: "2026-07-18",
    excerpt: "A replaceable placeholder for official brand distribution updates.",
    heroImage: site.assets.brandHero,
    body: [
      "This article is not a verified public announcement. ARP can replace it with approved brand news.",
    ],
  },
  {
    slug: "retailer-support-program",
    title: "Retailer Support Program",
    category: "Partnerships",
    date: "2026-07-18",
    excerpt: "A placeholder story showing how partnership news appears on the website.",
    heroImage: site.assets.wholesaleHero,
    body: [
      "Use this template for approved partnership stories, reseller updates or event coverage.",
    ],
  },
];

export function getArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
