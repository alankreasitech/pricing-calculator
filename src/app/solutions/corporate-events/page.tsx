import SiteLayout from "@/components/site-layout";
import { SolutionPage } from "@/components/solution-page";
import { Building } from "lucide-react";

export default function CorporateEventsSolutionPage() {
  return (
    <SiteLayout>
      <SolutionPage
        config={{
          title: "Corporate Events Solutions",
          subtitle: "Connect your global workforce across every language",
          description: "From all-hands meetings to training sessions, product launches to internal communications—ensure your entire global workforce stays connected and engaged, regardless of their language.",
          icon: <Building className="w-8 h-8" />,
          color: "bg-amber-500/10 text-amber-500",
          benefits: [
            "Unify multinational teams with real-time translation",
            "Reduce travel costs with high-quality virtual events",
            "Ensure compliance with local language requirements",
            "Maintain brand consistency across languages",
            "Track engagement with analytics dashboards",
            "Enterprise-grade security and compliance",
          ],
          features: [
            { title: "Town Halls", description: "Company-wide meetings with live translation" },
            { title: "Training Programs", description: "Multilingual training at scale" },
            { title: "Product Launches", description: "Global simultaneous product announcements" },
            { title: "Internal Communications", description: "Translate videos and documents" },
          ],
          testimonials: {
            quote: "Spf.io transformed how we run our global town halls. Our employees in 30 countries can now participate fully in company updates.",
            author: "Sarah Johnson",
            role: "VP of Global Communications, Fortune 500 Company",
          },
          products: [
            { name: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation/" },
            { name: "Audio Video Captions", href: "/audio-video-captions-and-subtitles/" },
            { name: "Multilingual Conversations", href: "/products/multilingual-conversations/" },
          ],
        }}
      />
    </SiteLayout>
  );
}
