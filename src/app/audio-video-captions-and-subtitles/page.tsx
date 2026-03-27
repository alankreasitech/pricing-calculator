import SiteLayout from "@/components/site-layout";
import { ProductPage } from "@/components/product-page";
import { FileText } from "lucide-react";

export default function AudioVideoCaptionsPage() {
  return (
    <SiteLayout>
      <ProductPage
        config={{
          title: "Audio Video Captions & Subtitles",
          subtitle: "Professional captions and subtitles for your media content",
          description: "Transform your audio and video content into accessible, searchable, and globally-reachable assets. Our AI-powered transcription and translation delivers accurate captions in a fraction of the time traditional methods require.",
          icon: <FileText className="w-8 h-8" />,
          color: "bg-amber-500/10 text-amber-500",
          features: [
            { title: "AI Transcription", description: "Automatic speech-to-text with high accuracy" },
            { title: "AI Translation", description: "Translate captions to 100+ languages" },
            { title: "Human Editing", description: "Professional caption editors available" },
            { title: "Multiple Formats", description: "SRT, VTT, ASS, and more export options" },
            { title: "Speaker Identification", description: "Automatically detect and label speakers" },
            { title: "Auto-Timing Sync", description: "Automatic caption timing synchronization" },
          ],
          useCases: [
            "YouTube and Vimeo videos",
            "Online courses and training materials",
            "Corporate training videos",
            "Podcast transcriptions",
            "Legal and medical documentation",
          ],
          integrations: ["YouTube", "Vimeo", "Dropbox", "Google Drive", "AWS S3", "Custom API"],
          relatedLinks: [
            { title: "Slides Translation", href: "/products/slide-translation/" },
            { title: "Document Portal", href: "/products/document-translation-portal/" },
          ],
          ctaText: "Get Started",
          ctaLink: "/request-a-quote/",
        }}
      />
    </SiteLayout>
  );
}
