import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SolutionConfig {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
  features: { title: string; description: string }[];
  testimonials?: { quote: string; author: string; role: string };
  products: { name: string; href: string }[];
}

export function SolutionPage({ config }: { config: SolutionConfig }) {
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

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="text-lg text-muted-foreground mb-8">{config.description}</p>
            
            <h2 className="text-2xl font-bold mb-6">Benefits</h2>
            <ul className="space-y-4 mb-8">
              {config.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid gap-4">
              {config.features.map((feature, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {config.testimonials && (
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <svg className="w-8 h-8 text-primary/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                    <p className="text-muted-foreground mb-4 italic">&ldquo;{config.testimonials.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold">{config.testimonials.author}</p>
                  <p className="text-sm text-muted-foreground">{config.testimonials.role}</p>
                </div>
              </div>
            )}

            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <h3 className="font-bold mb-4">Recommended Products</h3>
              <div className="space-y-3">
                {config.products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-sm font-medium">{product.name}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary text-primary-foreground">
              <h3 className="font-bold mb-2">Ready to get started?</h3>
              <p className="text-sm opacity-90 mb-4">
                Contact us for a personalized solution and quote tailored to your needs.
              </p>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
