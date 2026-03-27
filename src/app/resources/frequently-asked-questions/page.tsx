import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { Plus } from "lucide-react";

const FAQS = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get started with spf.io?",
        a: "Getting started is easy! Sign up for a free account, connect your preferred platform (Zoom, StreamYard, etc.), and you're ready to add captions and translations to your content. Our onboarding wizard will guide you through the process.",
      },
      {
        q: "What platforms does spf.io integrate with?",
        a: "Spf.io integrates with Zoom, Microsoft Teams, Google Meet, StreamYard, OBS, Twitch, YouTube Live, Facebook Live, and more. We also support custom RTMP streams and have an API for advanced integrations.",
      },
      {
        q: "How accurate is the AI translation?",
        a: "Our AI delivers high-quality translations suitable for general understanding. For critical content, you can enable human supervision to review and correct translations in real-time.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        q: "How does spf.io pricing work?",
        a: "Spf.io offers flexible pricing based on your usage. You can calculate your exact costs using our pricing calculator. We offer per-event, monthly, and annual plans to fit different needs.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes! We offer a free trial so you can test spf.io with your content before committing. Contact us to get started with your trial.",
      },
      {
        q: "Do you offer discounts for non-profits or education?",
        a: "Yes, we offer special pricing for qualifying non-profit organizations and educational institutions. Contact our sales team to learn more.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What languages does spf.io support?",
        a: "Spf.io supports over 100 languages including all major world languages, regional languages, and many minority languages. Our language list continues to grow.",
      },
      {
        q: "What's the latency for live translations?",
        a: "Our AI translation typically has a latency of 2-5 seconds from speech to translated captions. Audio streaming has similar latency. Human-supervised translations may take slightly longer but offer higher accuracy.",
      },
      {
        q: "Is spf.io secure and private?",
        a: "Security is our priority. We use enterprise-grade encryption, are SOC 2 compliant, and offer private translation options for sensitive content. Your data is never used to train our AI models.",
      },
    ],
  },
  {
    category: "Events",
    questions: [
      {
        q: "How many attendees can spf.io support?",
        a: "Spf.io scales from small team meetings to events with 10,000+ attendees. Our infrastructure automatically scales to handle your audience size.",
      },
      {
        q: "Can I use spf.io for recorded content?",
        a: "Absolutely! Spf.io works great for both live and recorded content. Upload your videos or audio files and receive captioned and translated versions.",
      },
      {
        q: "What if I need a human interpreter?",
        a: "We offer professional interpretation services as an add-on. Our human interpreters can supervise AI translations or provide full interpretation for critical events.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about spf.io.
            </p>
          </div>

          <div className="space-y-12">
            {FAQS.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
                <div className="space-y-4">
                  {section.questions.map((faq, i) => (
                    <details
                      key={i}
                      className="group p-6 rounded-xl bg-muted/50 border border-border open:bg-background"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none font-semibold">
                        <span>{faq.q}</span>
                        <Plus className="w-5 h-5 text-muted-foreground group-open:rotate-45 transition-transform" />
                      </summary>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 rounded-2xl bg-muted/50 border border-border">
            <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
                Can&apos;t find what you&apos;re looking for? Our team is happy to help.
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
