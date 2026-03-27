import SiteLayout from "@/components/site-layout";
import { ProductPage } from "@/components/product-page";
import { MessageCircle } from "lucide-react";

export default function DocumentTranslationPortalPage() {
  return (
    <SiteLayout>
      <ProductPage
        config={{
          title: "Document Translation Portal",
          subtitle: "Manage and translate documents across languages",
          description: "Upload, manage, and translate your documents in one centralized platform. Perfect for organizations handling large volumes of multilingual content that need to maintain consistency and quality.",
          icon: <MessageCircle className="w-8 h-8" />,
          color: "bg-cyan-500/10 text-cyan-500",
          features: [
            { title: "Bulk Upload", description: "Upload multiple documents simultaneously" },
            { title: "AI Translation", description: "Instant AI-powered translations" },
            { title: "Collaborative Editing", description: "Work together with team members" },
            { title: "Translation Memory", description: "Consistent terminology across documents" },
            { title: "Version Control", description: "Track changes and maintain history" },
            { title: "Workflow Automation", description: "Set up approval workflows" },
          ],
          useCases: [
            "Government agencies managing public documents",
            "Legal firms translating contracts",
            "HR departments with multinational teams",
            "Publishing houses localizing content",
            "Healthcare organizations with diverse patients",
          ],
          integrations: ["SharePoint", "Google Workspace", "Dropbox", "Box", "Microsoft 365"],
          relatedLinks: [
            { title: "Slides Translation", href: "/products/slide-translation/" },
            { title: "Audio Video Captions", href: "/audio-video-captions-and-subtitles/" },
          ],
          ctaText: "Request a Demo",
          ctaLink: "/demo/",
        }}
      />
    </SiteLayout>
  );
}
