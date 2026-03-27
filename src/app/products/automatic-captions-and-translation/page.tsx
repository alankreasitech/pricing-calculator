import SiteLayout from "@/components/site-layout";
import { ProductPage } from "@/components/product-page";
import { Video } from "lucide-react";

export default function AutomaticCaptionsPage() {
  return (
    <SiteLayout>
      <ProductPage
        config={{
          title: "Automatic Captions & Translation",
          subtitle: "Real-time captions and translations powered by AI",
          description: "Display real-time captions and translations during your live events. Our AI automatically transcribes speech and translates it into 100+ languages, making your content accessible to global audiences.",
          icon: <Video className="w-8 h-8" />,
          color: "bg-blue-500/10 text-blue-500",
          features: [
            { title: "Real-time Processing", description: "Captions appear within seconds of speech" },
            { title: "100+ Languages", description: "Translate to and from any supported language" },
            { title: "Human Supervision", description: "Correct errors in real-time as they happen" },
            { title: "Speaker Labels", description: "Identify who's speaking in the captions" },
            { title: "Multiple Display Styles", description: "Customize font, size, and position" },
            { title: "Accessibility Compliant", description: "Meet WCAG and ADA requirements" },
          ],
          useCases: [
            "Live-streamed conferences and webinars",
            "Corporate town halls and all-hands meetings",
            "Educational lectures and online courses",
            "Government meetings and public forums",
            "Religious services and community events",
          ],
          integrations: ["Zoom", "StreamYard", "YouTube Live", "Twitch", "OBS", "Microsoft Teams", "Google Meet"],
          relatedLinks: [
            { title: "Live Events Overview", href: "/products/" },
            { title: "Integrations", href: "/products/captioning-translation-integrations/" },
          ],
          ctaText: "Get Started",
          ctaLink: "/request-a-quote/",
        }}
      />
    </SiteLayout>
  );
}
