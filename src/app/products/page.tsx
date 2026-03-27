import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { Video, Headphones, BarChart3, FileText, MessageCircle, Languages } from "lucide-react";

const PRODUCTS = [
  {
    category: "Events",
    items: [
      {
        title: "Automatic Captions & Translation",
        description: "Real-time AI-powered captions and translations for live events",
        icon: Video,
        href: "/products/automatic-captions-and-translation/",
        color: "bg-blue-500/10 text-blue-500",
      },
      {
        title: "Audio Live Streaming",
        description: "Stream multilingual audio interpretation to your audience",
        icon: Headphones,
        href: "/products/audio-livestreaming/",
        color: "bg-purple-500/10 text-purple-500",
      },
      {
        title: "Multilingual Polls",
        description: "Engage your audience with interactive polls in multiple languages",
        icon: BarChart3,
        href: "/products/multilingual-polls/",
        color: "bg-green-500/10 text-green-500",
      },
    ],
  },
  {
    category: "Content",
    items: [
      {
        title: "Audio Video Captions & Subtitles",
        description: "Generate accurate captions and subtitles for your media content",
        icon: FileText,
        href: "/audio-video-captions-and-subtitles/",
        color: "bg-amber-500/10 text-amber-500",
      },
      {
        title: "Document Translation Portal",
        description: "Translate and manage documents across multiple languages",
        icon: MessageCircle,
        href: "/products/document-translation-portal/",
        color: "bg-cyan-500/10 text-cyan-500",
      },
      {
        title: "Slides Translation",
        description: "Instantly translate presentation slides while preserving formatting",
        icon: FileText,
        href: "/products/slide-translation/",
        color: "bg-pink-500/10 text-pink-500",
      },
    ],
  },
  {
    category: "Conversations",
    items: [
      {
        title: "Multilingual Conversations",
        description: "Enable real-time translation for multilingual meetings and discussions",
        icon: Languages,
        href: "/products/multilingual-conversations/",
        color: "bg-indigo-500/10 text-indigo-500",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All-in-One AI Translation Platform</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to make your events, content, and conversations accessible in any language.
            </p>
          </div>

          {PRODUCTS.map((section) => (
            <div key={section.category} className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{section.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="group p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl ${product.color} flex items-center justify-center mb-4`}>
                      <product.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 p-8 rounded-2xl bg-muted/50 border border-border text-center">
            <h2 className="text-2xl font-bold mb-4">Professional Services</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Beyond our platform, we offer professional interpretation, captioning, AI customization, and strategy consulting services.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Professional Interpreters", "Human Captioners", "AI Customization", "Strategy Consulting", "Event Support"].map((service) => (
                <span key={service} className="px-4 py-2 rounded-full bg-background text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
