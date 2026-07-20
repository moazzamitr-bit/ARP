import { Box, ClipboardCheck, PhoneCall, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ResellerForm } from "@/components/forms/ResellerForm";
import { Panel } from "@/components/ui/Panel";
import { Container, Section, SectionIntro } from "@/components/ui/Section";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Become an ARP Retail Partner",
  "Apply to work with ARP for official products, reliable supply, brand support and long-term wholesale partnership.",
  "/wholesale",
);

export default function WholesalePage() {
  return (
    <>
      <section id="benefits" className="wholesale-first">
        <Container>
          <div className="breadcrumb">Home / Partner With Us / Application</div>
          <div className="wholesale-visual" aria-hidden="true">
            <Image src={site.assets.wholesaleHero} alt="" fill priority sizes="100vw" />
          </div>
          <div className="wholesale-first-grid">
            <div className="wholesale-copy">
              <p className="eyebrow">Partner With ARP</p>
              <h1>
                Become an ARP <span>Retail Partner</span>
              </h1>
              <p>Apply to work with ARP for genuine official products, reliable supply, brand support and long-term partnership.</p>
              <div className="benefit-column compact-benefits">
                {[
                  { title: "Official Products", body: "Access authentic products from global brands represented by ARP.", Icon: ShieldCheck },
                  { title: "Reliable Supply", body: "Commercial support for planned wholesale and reseller demand.", Icon: Box },
                ].map(({ title, body, Icon }) => (
                  <Panel key={String(title)} className="benefit-card">
                    <Icon size={31} aria-hidden="true" />
                    <h2>{title}</h2>
                    <p>{body}</p>
                  </Panel>
                ))}
              </div>
              <Panel className="legacy-panel legacy-panel-horizontal">
                <strong>55+</strong>
                <span>Years of Experience</span>
                <strong>Official</strong>
                <span>Distribution Partner</span>
                <strong>3</strong>
                <span>Strategic Locations</span>
              </Panel>
            </div>
            <Panel className="form-panel first-form">
              <h2>Partner & Reseller Application</h2>
              <p>Complete the form and ARP&apos;s team will get in touch after review.</p>
              <ResellerForm />
            </Panel>
          </div>
        </Container>
      </section>
      <Section className="surface-band">
        <SectionIntro label="Process" title="A simple three-step application path." />
        <div className="process-row">
          {[
            { step: "1", title: "Submit Application", Icon: ClipboardCheck },
            { step: "2", title: "ARP Reviews the Request", Icon: ShieldCheck },
            { step: "3", title: "Commercial Team Contacts You", Icon: PhoneCall },
          ].map(({ step, title, Icon }) => (
            <Panel key={String(title)} className="process-step">
              <Icon size={24} aria-hidden="true" />
              <em>{step}</em>
              <span>{title}</span>
            </Panel>
          ))}
        </div>
      </Section>
    </>
  );
}
