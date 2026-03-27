import SiteLayout from "@/components/site-layout";
import { SolutionPage } from "@/components/solution-page";
import { Building2 } from "lucide-react";

export default function GovernmentSolutionPage() {
  return (
    <SiteLayout>
      <SolutionPage
        config={{
          title: "Government Solutions",
          subtitle: "Serve your constituents in their preferred language",
          description: "Meet your mandate to provide accessible government services. From public meetings to community forums, emergency communications to public records—ensure every citizen can access government information.",
          icon: <Building2 className="w-8 h-8" />,
          color: "bg-slate-500/10 text-slate-600",
          benefits: [
            "Comply with language access requirements",
            "Reach Limited English Proficiency (LEP) populations",
            "Provide equitable access to government services",
            "Improve public engagement in democracy",
            "Emergency alerts in multiple languages",
            "Secure, private translation for sensitive matters",
          ],
          features: [
            { title: "Public Meetings", description: "Live captions and translation for council meetings" },
            { title: "Emergency Alerts", description: "Critical information in multiple languages instantly" },
            { title: "Community Outreach", description: "Multilingual surveys and engagement" },
            { title: "Document Translation", description: "Translate public records and forms" },
          ],
          testimonials: {
            quote: "Spf.io has helped us communicate with constituents who were previously unreachable. Our community engagement has increased significantly.",
            author: "Commissioner Maria Santos",
            role: "County Board of Supervisors",
          },
          products: [
            { name: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation/" },
            { name: "Multilingual Polls", href: "/products/multilingual-polls/" },
            { name: "Document Translation Portal", href: "/products/document-translation-portal/" },
          ],
        }}
      />
    </SiteLayout>
  );
}
