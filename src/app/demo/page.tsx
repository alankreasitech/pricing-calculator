import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { Play, CheckCircle, Users, Globe, Headphones } from "lucide-react";

const DEMO_STEPS = [
  {
    icon: Users,
    title: "Tell us about your needs",
    description: "Share details about your events, content, or conversations that need translation.",
  },
  {
    icon: Globe,
    title: "See spf.io in action",
    description: "Watch a live demonstration tailored to your specific use case.",
  },
  {
    icon: Headphones,
    title: "Get all your questions answered",
    description: "Our team will address any concerns and help you plan your implementation.",
  },
];

export default function DemoPage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                See spf.io in <span className="text-primary">action</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a personalized demo and discover how spf.io can help you break down language barriers and reach global audiences.
              </p>

              <div className="space-y-6 mb-8">
                {DEMO_STEPS.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-bold">What you&apos;ll see:</h3>
                <ul className="space-y-2">
                  {[
                    "Real-time translation in action",
                    "Integration with your favorite platforms",
                    "Customization options for your brand",
                    "Pricing tailored to your needs",
                    "Q&A with our experts",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-background border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-primary/20 transition-colors group">
                    <Play className="w-12 h-12 text-primary ml-2 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-muted-foreground">Watch a 2-minute overview</p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-muted/50 border border-border">
                <h3 className="font-bold mb-4">Ready to schedule?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out our request form and we&apos;ll set up a time that works for you.
                </p>
                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
