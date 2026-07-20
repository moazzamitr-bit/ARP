import { BrandFilter } from "@/components/brands/BrandFilter";
import { PageHero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Official Brands We Distribute",
  "Explore the approved sports brands represented by ARP across wholesale, retail and reseller channels in the UAE.",
  "/brands",
);

export default function BrandsPage() {
  return (
    <>
      <PageHero
        title="Official Brands We Distribute"
        body="ARP presents approved global sports brands through structured UAE distribution, wholesale and where-to-buy pathways."
        image={site.assets.brandHero}
      />
      <Section>
        <BrandFilter />
      </Section>
    </>
  );
}
