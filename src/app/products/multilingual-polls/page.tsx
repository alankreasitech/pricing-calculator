import SiteLayout from "@/components/site-layout";
import { ProductPage } from "@/components/product-page";
import { BarChart3 } from "lucide-react";

export default function MultilingualPollsPage() {
  return (
    <SiteLayout>
      <ProductPage
        config={{
          title: "Multilingual Polls",
          subtitle: "Engage your audience with interactive polls in any language",
          description: "Create and run live polls that participants can answer in their preferred language. Results are instantly translated and aggregated, giving you real-time insights from your global audience.",
          icon: <BarChart3 className="w-8 h-8" />,
          color: "bg-green-500/10 text-green-500",
          features: [
            { title: "Multi-language Questions", description: "Create polls in multiple languages at once" },
            { title: "Real-time Results", description: "See aggregated results as responses come in" },
            { title: "Multiple Question Types", description: "Multiple choice, rating scales, word clouds, and more" },
            { title: "Audience Participation", description: "Participants vote from their own devices" },
            { title: "Export Data", description: "Download detailed analytics and responses" },
            { title: "Branded Experience", description: "Customize colors and add your logo" },
          ],
          useCases: [
            "Interactive training sessions and workshops",
            "Audience engagement during conferences",
            "Church congregation feedback",
            "Customer satisfaction surveys",
            "Educational formative assessments",
          ],
          integrations: ["Zoom", "Microsoft Teams", "StreamYard", "Standalone web link"],
          relatedLinks: [
            { title: "Audio Live Streaming", href: "/products/audio-livestreaming/" },
            { title: "Case Studies", href: "/spfio-case-studies/" },
          ],
          ctaText: "Try It Free",
          ctaLink: "/request-a-quote/",
        }}
      />
    </SiteLayout>
  );
}
