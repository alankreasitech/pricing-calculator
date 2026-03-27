import SiteLayout from "@/components/site-layout";
import { SolutionPage } from "@/components/solution-page";
import { Mic } from "lucide-react";

export default function ConferencesSolutionPage() {
  return (
    <SiteLayout>
      <SolutionPage
        config={{
          title: "Conference Translation Solutions",
          subtitle: "Host world-class multilingual events at any scale",
          description: "Whether you're hosting a 50-person workshop or a 10,000-attendee international conference, spf.io scales to meet your needs. Provide professional multilingual experiences that impress your global audience.",
          icon: <Mic className="w-8 h-8" />,
          color: "bg-purple-500/10 text-purple-500",
          benefits: [
            "Reduce interpretation costs by up to 70%",
            "Scale to any audience size instantly",
            "Professional quality AI or human-supervised captions",
            "Seamless integration with major event platforms",
            "Real-time analytics on audience engagement",
            "Support for hybrid and virtual events",
          ],
          features: [
            { title: "Multi-Language Keynotes", description: "Stream translated audio to attendee devices" },
            { title: "Session Captions", description: "Real-time captions in 100+ languages" },
            { title: "Breakout Rooms", description: "Multilingual support for parallel sessions" },
            { title: "Networking", description: "Enable conversations across language barriers" },
          ],
          testimonials: {
            quote: "I can't think of a better partner than spf.io for a global event requiring caption and translation in multiple languages at the right cost.",
            author: "Vikas Pota",
            role: "Founder and CEO, T4 Education",
          },
          products: [
            { name: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation/" },
            { name: "Audio Live Streaming", href: "/products/audio-livestreaming/" },
            { name: "Multilingual Polls", href: "/products/multilingual-polls/" },
          ],
        }}
      />
    </SiteLayout>
  );
}
