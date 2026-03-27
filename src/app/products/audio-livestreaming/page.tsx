import SiteLayout from "@/components/site-layout";
import { ProductPage } from "@/components/product-page";
import { Headphones } from "lucide-react";

export default function AudioLiveStreamingPage() {
  return (
    <SiteLayout>
      <ProductPage
        config={{
          title: "Audio Live Streaming",
          subtitle: "Stream multilingual audio interpretation in real-time",
          description: "Broadcast high-quality multilingual audio streams to your audience. Whether attendees prefer to listen in their native language or access your event through audio, we've got you covered.",
          icon: <Headphones className="w-8 h-8" />,
          color: "bg-purple-500/10 text-purple-500",
          features: [
            { title: "Multiple Audio Channels", description: "Stream up to 20+ language channels simultaneously" },
            { title: "High-Quality Audio", description: "Crystal clear audio streaming at 128kbps+" },
            { title: "Low Latency", description: "Minimal delay between original and translated audio" },
            { title: "AI Voices", description: "Natural-sounding AI-generated interpretation" },
            { title: "Human Voices Option", description: "Professional interpreters for premium quality" },
            { title: "Device Agnostic", description: "Works on any device with a web browser" },
          ],
          useCases: [
            "International conferences with diverse audiences",
            "Religious services with multicultural congregations",
            "Training sessions for global teams",
            "Live sports commentary for international viewers",
            "Virtual events with breakout rooms",
          ],
          integrations: ["StreamYard", "OBS", "vMix", "Custom RTMP sources"],
          relatedLinks: [
            { title: "Automatic Captions", href: "/products/automatic-captions-and-translation/" },
            { title: "View All Integrations", href: "/products/captioning-translation-integrations/" },
          ],
          ctaText: "Request a Demo",
          ctaLink: "/demo/",
        }}
      />
    </SiteLayout>
  );
}
