import type { ProductCategory, ProductLine } from "./types";

// Temporary product/category content. Replace with ARP-approved category names,
// product-line descriptions, catalogue files and imagery before final launch.
export const productCategories: ProductCategory[] = [
  {
    title: "Racquet Sports",
    slug: "racquet-sports",
    description: "Badminton and racquet sport product lines represented through ARP brand channels.",
    image: "/assets/images/brand-badminton.png",
    brandSlugs: ["yonex"],
    highlights: ["Racquets", "Shuttlecocks", "Footwear", "Bags & Accessories"],
  },
  {
    title: "Table Tennis",
    slug: "table-tennis",
    description: "Table tennis equipment for clubs, schools, academies and retail partners.",
    image: "/assets/images/hero-sports-distribution.png",
    brandSlugs: ["stiga"],
    highlights: ["Tables", "Blades", "Rubbers", "Balls"],
  },
  {
    title: "Cricket",
    slug: "cricket",
    description: "Cricket equipment categories for players, academies and institutional buyers.",
    image: "/assets/images/wholesale-handshake.png",
    brandSlugs: ["ss-cricket"],
    highlights: ["Bats", "Protective Gear", "Balls", "Bags"],
  },
  {
    title: "Sports Goods",
    slug: "sports-goods",
    description: "Multi-sport goods for schools, clubs, retailers and active UAE communities.",
    image: "/assets/images/storefront-arp.png",
    brandSlugs: ["cosco", "surco"],
    highlights: ["Team Sports", "Fitness", "Training", "Accessories"],
  },
  {
    title: "Supports & Recovery",
    slug: "supports-recovery",
    description: "Support, protection and recovery product lines for sport and daily movement.",
    image: "/assets/images/about-building.png",
    brandSlugs: ["lp-support"],
    highlights: ["Braces", "Supports", "Protection", "Recovery"],
  },
];

export const productLines: ProductLine[] = [
  {
    name: "Badminton Performance Range",
    slug: "badminton-performance-range",
    categorySlug: "racquet-sports",
    brandSlug: "yonex",
    summary: "Racquets, shuttlecocks, footwear and accessories for badminton players and retailers.",
    description:
      "A category-led range for badminton retailers, clubs and institutional buyers. Final product assortment and copy should be supplied by ARP.",
    image: "/assets/images/brand-badminton.png",
    useCases: ["Retail display", "Club supply", "Academy programmes", "Institutional procurement"],
    categoryModules: ["Racquets", "Shuttlecocks", "Shoes", "Bags & Accessories"],
    catalogue: { label: "Download Yonex Catalogue", url: "/catalogues/yonex-catalogue.pdf" },
  },
  {
    name: "Table Tennis Club Range",
    slug: "table-tennis-club-range",
    categorySlug: "table-tennis",
    brandSlug: "stiga",
    summary: "Tables, bats, rubbers, balls and training accessories for table tennis environments.",
    description:
      "A product-line overview for clubs, schools, showrooms and resellers. Replace this copy with approved STIGA range information.",
    image: "/assets/images/hero-sports-distribution.png",
    useCases: ["Clubs", "Schools", "Sports retailers", "Training facilities"],
    categoryModules: ["Tables", "Blades", "Rubbers", "Balls"],
    catalogue: { label: "Download STIGA Catalogue", url: "/catalogues/stiga-catalogue.pdf" },
  },
  {
    name: "Cricket Equipment Range",
    slug: "cricket-equipment-range",
    categorySlug: "cricket",
    brandSlug: "ss-cricket",
    summary: "Cricket bats, balls, protective gear and team accessories for UAE cricket buyers.",
    description:
      "A non-ecommerce product-line page for cricket category discovery, wholesale enquiries and where-to-buy pathways.",
    image: "/assets/images/wholesale-handshake.png",
    useCases: ["Academies", "Teams", "Retail partners", "Institutional buyers"],
    categoryModules: ["Bats", "Protective Gear", "Balls", "Bags"],
    catalogue: { label: "Download SS Cricket Catalogue", url: "/catalogues/ss-cricket-catalogue.pdf" },
  },
  {
    name: "Multi-Sport Goods Range",
    slug: "multi-sport-goods-range",
    categorySlug: "sports-goods",
    brandSlug: "cosco",
    summary: "Team sport, training and fitness goods for broad wholesale and retail demand.",
    description:
      "A flexible category page for Cosco and related sports goods. ARP can replace the modules with approved product families.",
    image: "/assets/images/storefront-arp.png",
    useCases: ["Schools", "Sports stores", "Clubs", "Corporate supply"],
    categoryModules: ["Balls", "Fitness", "Training", "Team Sports"],
    catalogue: { label: "Download Cosco Catalogue", url: "/catalogues/cosco-catalogue.pdf" },
  },
  {
    name: "Supports & Recovery Range",
    slug: "supports-recovery-range",
    categorySlug: "supports-recovery",
    brandSlug: "lp-support",
    summary: "Support, protection and recovery categories for athletes and everyday performance.",
    description:
      "A product-line overview for support and recovery buyers. Final medical, performance or product claims must be client-approved.",
    image: "/assets/images/about-building.png",
    useCases: ["Sports retail", "Training centres", "Recovery support", "Everyday movement"],
    categoryModules: ["Braces", "Supports", "Protection", "Recovery"],
    catalogue: { label: "Download LP Support Catalogue", url: "/catalogues/lp-support-catalogue.pdf" },
  },
];

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductLine(categorySlug: string, slug: string) {
  return productLines.find((line) => line.categorySlug === categorySlug && line.slug === slug);
}

export function getProductLinesForCategory(categorySlug: string) {
  return productLines.filter((line) => line.categorySlug === categorySlug);
}

