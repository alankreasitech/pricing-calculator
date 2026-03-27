import SiteLayout from "@/components/site-layout";
import { SolutionPage } from "@/components/solution-page";
import { Church } from "lucide-react";

export default function ChurchSolutionPage() {
  return (
    <SiteLayout>
      <SolutionPage
        config={{
          title: "Church Translation Solutions",
          subtitle: "Reach your multicultural congregation in every language",
          description: "Make your church services and programs accessible to everyone in your community. From Sunday services to Bible studies, youth groups to pastoral counseling—ensure no one is left out due to language barriers.",
          icon: <Church className="w-8 h-8" />,
          color: "bg-blue-500/10 text-blue-500",
          benefits: [
            "Include immigrants and internationals in your community",
            "Serve multilingual families with children",
            "Host international mission teams and visitors",
            "Expand your reach beyond language barriers",
            "Provide accessibility for the deaf and hard of hearing",
            "Create a welcoming environment for all",
          ],
          features: [
            { title: "Live Captions", description: "Real-time captions in 100+ languages for services" },
            { title: "Audio Streaming", description: "Multilingual audio interpretation to earpieces" },
            { title: "On-Demand", description: "Captioned sermons for later viewing" },
            { title: "Easy Setup", description: "Works with your existing streaming setup" },
          ],
          testimonials: {
            quote: "With spf.io, our international members finally feel included in our services. We've seen families who haven't attended in years start coming back.",
            author: "Pastor Michael Chen",
            role: "Grace Community Church, Los Angeles",
          },
          products: [
            { name: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation/" },
            { name: "Audio Live Streaming", href: "/products/audio-livestreaming/" },
            { name: "Multilingual Conversations", href: "/products/multilingual-conversations/" },
          ],
        }}
      />
    </SiteLayout>
  );
}
