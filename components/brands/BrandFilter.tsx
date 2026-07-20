"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BrandLogo } from "@/components/brands/BrandLogo";
import { brandCategories, brands } from "@/content/brands";

export function BrandFilter() {
  const [category, setCategory] = useState("All");
  const visibleBrands = useMemo(
    () => brands.filter((brand) => category === "All" || brand.category === category),
    [category],
  );

  return (
    <div>
      <div className="filter-row" aria-label="Brand categories">
        {["All", ...brandCategories].map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? "filter-chip filter-chip-active" : "filter-chip"}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="brand-grid">
        {visibleBrands.map((brand) => (
          <Link key={brand.slug} href={`/brands/${brand.slug}`} className="brand-card">
            <BrandLogo text={brand.logoText} className={brand.logoClass} />
            <span className="micro-label">{brand.category}</span>
            <h2>{brand.name}</h2>
            <p>{brand.description}</p>
            <span className="text-link">Explore Brand</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
