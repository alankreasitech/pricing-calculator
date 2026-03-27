import SiteLayout from "@/components/site-layout";
import { ProductPage } from "@/components/product-page";
import { Languages } from "lucide-react";

export default function MultilingualConversationsPage() {
  return (
    <SiteLayout>
      <ProductPage
        config={{
          title: "Multilingual Conversations",
          subtitle: "Enable seamless multilingual discussions in real-time",
          description: "Break down language barriers in meetings, conversations, and discussions. Participants can speak naturally in their preferred language while everyone else receives real-time translation.",
          icon: <Languages className="w-8 h-8" />,
          color: "bg-indigo-500/10 text-indigo-500",
          features: [
            { title: "Real-time Translation", description: "Live captions and translations during conversations" },
            { title: "100+ Languages", description: "Support for virtually any language combination" },
            { title: "AI Interpreter Voices", description: "Natural-sounding synthetic voices for translations" },
            { title: "In-Person Mode", description: "Perfect for面对面 meetings with earpieces" },
            { title: "Online Mode", description: "Works with video conferencing platforms" },
            { title: "Group Conversations", description: "Support for multiple speakers simultaneously" },
          ],
          useCases: [
            "International business meetings",
            "Medical appointments with non-English speakers",
            "Legal consultations across language barriers",
            "Community forums and town halls",
            "Family gatherings with mixed-language attendees",
          ],
          integrations: ["Zoom", "Microsoft Teams", "Google Meet", "Standalone App", "In-person devices"],
          relatedLinks: [
            { title: "Audio Live Streaming", href: "/products/audio-livestreaming/" },
            { title: "Automatic Captions", href: "/products/automatic-captions-and-translation/" },
          ],
          ctaText: "Request a Demo",
          ctaLink: "/demo/",
        }}
      />
    </SiteLayout>
  );
}
