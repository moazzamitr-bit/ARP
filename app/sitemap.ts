import type { MetadataRoute } from "next";
import { brands } from "@/content/brands";
import { newsArticles } from "@/content/news";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/brands", "/wholesale", "/news", "/contact"].map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
  }));
  const brandRoutes = brands.map((brand) => ({
    url: `${site.domain}/brands/${brand.slug}`,
    lastModified: new Date(),
  }));
  const newsRoutes = newsArticles.map((article) => ({
    url: `${site.domain}/news/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticRoutes, ...brandRoutes, ...newsRoutes];
}
