import type { LucideIcon } from "lucide-react";

export type BrandCategory =
  | "Racquet Sports"
  | "Table Tennis"
  | "Cricket"
  | "Sports Goods"
  | "Supports & Recovery";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface DownloadableCatalogue {
  label: string;
  url: string;
}

export interface ProductCategory {
  title: string;
  slug: string;
  description: string;
  image: string;
  brandSlugs: string[];
  highlights: string[];
}

export interface ProductLine {
  name: string;
  slug: string;
  categorySlug: string;
  brandSlug: string;
  summary: string;
  description: string;
  image: string;
  useCases: string[];
  categoryModules: string[];
  catalogue: DownloadableCatalogue;
}

export interface Brand {
  name: string;
  slug: string;
  category: BrandCategory;
  logoText: string;
  logoClass: string;
  description: string;
  introduction: string;
  relationship: string;
  categories: string[];
  catalogue: DownloadableCatalogue;
  globalWebsite: string;
  verificationUrl?: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: "Company News" | "Brand News" | "Product Launches" | "Partnerships" | "Events";
  date: string;
  excerpt: string;
  heroImage: string;
  body: string[];
}

export interface Location {
  id: string;
  name: string;
  storeType: "Official Branch" | "Authorized Reseller";
  emirate: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  brands: string[];
  directionsUrl: string;
  image?: string;
  distance?: string;
}

export interface ContactDetails {
  telephone: string;
  email: string;
  officeAddress: string;
  businessHours: string;
}

export interface Metric {
  label: string;
  value: string;
  detail?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
}
