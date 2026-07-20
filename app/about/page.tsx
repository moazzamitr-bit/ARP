import { Building2, Handshake, ShieldCheck, Star, Target, Trophy } from "lucide-react";
import { PageHero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { LinkButton } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { Section, SectionIntro } from "@/components/ui/Section";
import { aboutContent } from "@/content/about";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Built on Trust Since 1969",
  "Learn about ARP's operating history, values, business model and official sports distribution role in the UAE.",
  "/about",
);

const timelineIcons = [Building2, Handshake, Trophy, ShieldCheck, Target];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={aboutContent.hero.title}
        body={aboutContent.hero.body}
        image={site.assets.aboutHero}
        label="Our Heritage. Our Future."
      />
      <Section>
        <div className="split-section">
          <SectionIntro title="A content-ready company profile." label="Company Introduction" body={aboutContent.intro} />
          <Metrics />
        </div>
      </Section>
      <Section id="timeline" className="surface-band">
        <SectionIntro label="Our Journey" title="Milestones that define our legacy." />
        <div className="timeline">
          {aboutContent.timeline.map((item, index) => {
            const Icon = timelineIcons[index] ?? Building2;
            return (
              <article key={item.year}>
                <span>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <strong>{item.year}</strong>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section id="values">
        <div className="values-layout">
          <div>
            <p className="eyebrow">Our Purpose</p>
            <h2>Driven by purpose. Guided by values.</h2>
            <p>Editable values content for ARP&apos;s final approved messaging.</p>
            <LinkButton href="/wholesale">Partner With Us</LinkButton>
          </div>
          <div className="value-grid">
            {aboutContent.values.map((value, index) => {
              const Icon = [ShieldCheck, Target, Handshake, Star][index];
              return (
                <Panel key={value.title} className="value-card">
                  <Icon size={28} aria-hidden="true" />
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </Panel>
              );
            })}
          </div>
        </div>
      </Section>
      <Section className="surface-band">
        <SectionIntro label="Business Model" title="One platform for distribution, wholesale, retail and reseller visibility." />
        <div className="process-row process-row-five">
          {["Official Distribution", "Wholesale", "Retail", "Institutional Supply", "Authorized Reseller Network"].map(
            (item) => (
              <Panel key={item} className="process-step">
                <span>{item}</span>
              </Panel>
            ),
          )}
        </div>
      </Section>
    </>
  );
}
