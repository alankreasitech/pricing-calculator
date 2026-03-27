import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { FileText, Video, MessageCircle, Book, ExternalLink } from "lucide-react";

const DOCS_CATEGORIES = [
  {
    title: "Getting Started",
    items: [
      { title: "Quick Start Guide", description: "Get up and running with spf.io in 5 minutes", icon: Book },
      { title: "Account Setup", description: "Create your account and configure settings", icon: FileText },
      { title: "Platform Overview", description: "Learn about all features and capabilities", icon: Video },
    ],
  },
  {
    title: "Products",
    items: [
      { title: "Live Events Setup", description: "Configure captions and translation for events", icon: Video },
      { title: "Content Translation", description: "Translate audio, video, and documents", icon: FileText },
      { title: "Conversations Guide", description: "Set up multilingual meetings", icon: MessageCircle },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "Zoom Integration", description: "Connect spf.io with Zoom meetings", icon: Video },
      { title: "StreamYard Setup", description: "Add captions to StreamYard streams", icon: Video },
      { title: "Custom Integrations", description: "API and webhook documentation", icon: Book },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      { title: "Common Issues", description: "Solutions to frequent problems", icon: FileText },
      { title: "Audio Quality", description: "Improve transcription accuracy", icon: Book },
      { title: "Contact Support", description: "Get help from our team", icon: MessageCircle },
    ],
  },
];

export default function DocumentationPage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to get started with spf.io and make the most of our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {DOCS_CATEGORIES.map((category) => (
              <div key={category.title} className="p-6 rounded-xl bg-muted/50 border border-border">
                <h2 className="text-xl font-bold mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <Link
                      key={item.title}
                      href="#"
                      className="flex items-start gap-4 p-4 rounded-lg bg-background hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 rounded-2xl bg-primary text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Need more help?</h2>
            <p className="opacity-90 mb-6 max-w-xl mx-auto">
              Our support team is here to help you succeed. Contact us for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us/"
                className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/resources/frequently-asked-questions/"
                className="px-6 py-3 border border-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
