import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { LocationFinder } from "@/components/locations/LocationFinder";
import { PageHero } from "@/components/sections/Hero";
import { Panel } from "@/components/ui/Panel";
import { Section, SectionIntro } from "@/components/ui/Section";
import { contactDetails, site } from "@/content/site";
import { locations } from "@/content/locations";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact ARP",
  "Contact ARP, send an enquiry, and find official branches or authorized resellers across the UAE.",
  "/contact",
);

export default function ContactPage() {
  const localBusinessJsonLd = locations
    .filter((location) => location.storeType === "Official Branch")
    .map((location) => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: location.name,
      address: location.address,
      telephone: location.phone,
      url: site.domain,
    }));

  return (
    <>
      <PageHero
        title="Authorized Resellers & Branches"
        body="Find ARP official branches and authorized resellers near you. Genuine products. Trusted support."
        image={site.assets.homeHero}
        className="contact-hero"
      />
      <Section className="surface-band contact-finder-section">
        <SectionIntro label="Where to Buy" title="Official branches and authorized reseller network." />
        <LocationFinder />
      </Section>
      <Section>
        <div className="contact-grid">
          <div className="contact-details">
            <SectionIntro label="Contact Us" title="Speak with ARP." body="Final contact details are centralized for client replacement." />
            <Panel className="contact-card">
              <a href={`tel:${contactDetails.telephone.replace(/\s/g, "")}`}>
                <Phone size={18} /> {contactDetails.telephone}
              </a>
              <a href={`mailto:${contactDetails.email}`}>
                <Mail size={18} /> {contactDetails.email}
              </a>
              <span>
                <MapPin size={18} /> {contactDetails.officeAddress}
              </span>
              <span>
                <Clock size={18} /> {contactDetails.businessHours}
              </span>
            </Panel>
          </div>
          <Panel className="form-panel">
            <ContactForm />
          </Panel>
        </div>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </>
  );
}
