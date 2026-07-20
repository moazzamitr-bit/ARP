import type { ContactDetails, Metric } from "./types";

export const site = {
  name: "Al Raed Pioneers",
  shortName: "ARP",
  domain: "https://arpgroup.ae",
  description:
    "Official sports brand distribution partner in the UAE for wholesale buyers, retailers, institutions and customers.",
  foundingYear: "1969",
  assets: {
    homeHero: "/assets/images/hero-sports-distribution.png",
    aboutHero: "/assets/images/about-building.png",
    wholesaleHero: "/assets/images/wholesale-handshake.png",
    brandHero: "/assets/images/brand-badminton.png",
    store: "/assets/images/storefront-arp.png",
    footerRunner: "/assets/images/footer-runner.png",
  },
};

export const approvedMetrics: Metric[] = [
  { value: "55+", label: "Years of Experience" },
  { value: "12+", label: "Sports Categories" },
  { value: "3", label: "Physical Locations" },
  { value: "1,500+", label: "Local Customers" },
];

export const contactDetails: ContactDetails = {
  telephone: "+971 4 123 4567",
  email: "info@arpgroup.ae",
  officeAddress: "Client-supplied office address, Dubai, UAE",
  businessHours: "Sunday - Saturday, client-supplied hours",
};
