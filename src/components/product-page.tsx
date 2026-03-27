import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface RelatedLink {
  title: string;
  href: string;
}

interface PageConfig {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: Feature[];
  useCases?: string[];
  integrations?: string[];
  relatedLinks?: RelatedLink[];
  ctaText?: string;
  ctaLink?: string;
}

export function ProductPage({ config }: { config: PageConfig }) {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${config.color} mb-6`}>
            {config.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{config.title}</h1>
          <p className="text-lg text-muted-foreground">{config.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-muted-foreground mb-8">{config.description}</p>
            
            <h2 className="text-2xl font-bold mb-6">Features</h2>
            <ul className="space-y-4 mb-8">
              {config.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold">{feature.title}</span>
                    <span className="text-muted-foreground"> — {feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            {config.useCases && (
              <>
                <h2 className="text-2xl font-bold mb-6">Use Cases</h2>
                <ul className="space-y-3 mb-8">
                  {config.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {config.relatedLinks && config.relatedLinks.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Related Resources</h3>
                <div className="flex flex-wrap gap-3">
                  {config.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors text-sm"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {config.ctaText && (
              <div className="mt-8">
                <Link
                  href={config.ctaLink || "/request-a-quote/"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  {config.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {config.integrations && config.integrations.length > 0 && (
              <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
                <h3 className="font-bold mb-4">Works With</h3>
                <div className="flex flex-wrap gap-2">
                  {config.integrations.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 rounded-full bg-background text-sm text-muted-foreground"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
              <h3 className="font-bold mb-4">Ready to get started?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact us for a personalized demo and quote tailored to your needs.
              </p>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
              <h3 className="font-bold mb-4">Need help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check our documentation or contact support for assistance.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/resources/documentation/" className="text-sm text-primary hover:underline">
                  View Documentation →
                </Link>
                <Link href="/contact-us/" className="text-sm text-primary hover:underline">
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
