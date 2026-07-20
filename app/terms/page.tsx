import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Terms", "Terms placeholder for ARP client approval.", "/terms");

export default function TermsPage() {
  return (
    <Section>
      <div className="article-body">
        <p className="eyebrow">Legal</p>
        <h1>Terms</h1>
        <p>This placeholder page is ready for ARP&apos;s approved terms and conditions content.</p>
      </div>
    </Section>
  );
}
