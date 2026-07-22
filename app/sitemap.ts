import type { MetadataRoute } from "next";
import { brands } from "@/content/brands";
import { newsArticles } from "@/content/news";
import { productCategories, productLines } from "@/content/products";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/brands", "/products", "/wholesale", "/news", "/contact"].map((path) => ({
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
  const productCategoryRoutes = productCategories.map((category) => ({
    url: `${site.domain}/products/${category.slug}`,
    lastModified: new Date(),
  }));
  const productLineRoutes = productLines.map((line) => ({
    url: `${site.domain}/products/${line.categorySlug}/${line.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...brandRoutes, ...productCategoryRoutes, ...productLineRoutes, ...newsRoutes];
}
