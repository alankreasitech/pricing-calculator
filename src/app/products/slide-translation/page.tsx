import SiteLayout from "@/components/site-layout";
import { ProductPage } from "@/components/product-page";
import { FileText } from "lucide-react";

export default function SlideTranslationPage() {
  return (
    <SiteLayout>
      <ProductPage
        config={{
          title: "Slides Translation",
          subtitle: "Translate presentation slides while preserving formatting",
          description: "Instantly translate your PowerPoint, Google Slides, and other presentation formats. The translation maintains your original formatting, layouts, and design elements across all target languages.",
          icon: <FileText className="w-8 h-8" />,
          color: "bg-pink-500/10 text-pink-500",
          features: [
            { title: "Format Preservation", description: "Original fonts, colors, and layouts maintained" },
            { title: "Multiple Formats", description: "PowerPoint, Google Slides, Keynote, PDF" },
            { title: "Batch Translation", description: "Translate entire presentations in seconds" },
            { title: "AI-Powered", description: "Context-aware translation for accuracy" },
            { title: "Manual Review", description: "Human editors available for quality assurance" },
            { title: "Speaker Notes", description: "Translate presenter notes too" },
          ],
          useCases: [
            "Conference presentations for international audiences",
            "Sales decks for global markets",
            "Educational course materials",
            "Training presentations for multinational teams",
            "Investor presentations for international stakeholders",
          ],
          integrations: ["PowerPoint", "Google Slides", "Keynote", "Canva"],
          relatedLinks: [
            { title: "Document Portal", href: "/products/document-translation-portal/" },
            { title: "Audio Video Captions", href: "/audio-video-captions-and-subtitles/" },
          ],
          ctaText: "Try It Now",
          ctaLink: "/request-a-quote/",
        }}
      />
    </SiteLayout>
  );
}
