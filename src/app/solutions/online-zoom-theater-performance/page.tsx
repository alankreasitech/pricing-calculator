import SiteLayout from "@/components/site-layout";
import { SolutionPage } from "@/components/solution-page";
import { Theater } from "lucide-react";

export default function TheaterSolutionPage() {
  return (
    <SiteLayout>
      <SolutionPage
        config={{
          title: "Theater & Performance Solutions",
          subtitle: "Bring your performances to international audiences",
          description: "Expand your theatrical reach beyond language barriers. From Broadway to community theater, opera to dance performances—make your art accessible to global audiences in real-time.",
          icon: <Theater className="w-8 h-8" />,
          color: "bg-rose-500/10 text-rose-500",
          benefits: [
            "Reach international tourists and expats",
            "Provide accessibility for deaf and hard of hearing",
            "Enable VIP experiences with premium translation",
            "Create memorable experiences for diverse audiences",
            "Increase ticket sales by reaching new markets",
            "Perfect for hybrid in-person and streaming events",
          ],
          features: [
            { title: "Live Captions", description: "Real-time captions via devices or display" },
            { title: "Audio Description", description: "Verbal descriptions for visually impaired" },
            { title: "Simultaneous Translation", description: "Premium headphone-based interpretation" },
            { title: "Streaming", description: "Multilingual streaming for virtual audiences" },
          ],
          testimonials: {
            quote: "Adding spf.io to our productions has opened up a whole new audience. We can now welcome international visitors who would never have been able to enjoy our shows before.",
            author: "James Wright",
            role: "Artistic Director, Regional Theater Company",
          },
          products: [
            { name: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation/" },
            { name: "Audio Live Streaming", href: "/products/audio-livestreaming/" },
            { name: "Audio Video Captions", href: "/audio-video-captions-and-subtitles/" },
          ],
        }}
      />
    </SiteLayout>
  );
}
