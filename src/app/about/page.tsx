import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { ArrowRight, Globe, Users, Zap, Shield } from "lucide-react";

const STATS = [
  { value: "100+", label: "Languages Supported" },
  { value: "10M+", label: "Users Reached" },
  { value: "50K+", label: "Events Powered" },
  { value: "99.9%", label: "Uptime" },
];

const VALUES = [
  {
    icon: Globe,
    title: "Accessibility First",
    description: "We believe everyone deserves access to information in their language, regardless of location or resources.",
  },
  {
    icon: Users,
    title: "Human-Centered AI",
    description: "Our AI augments human translators and interpreters, never replaces them. Quality and accuracy come first.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We're constantly pushing the boundaries of what's possible with AI translation technology.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your data is protected with enterprise-grade security. We never use your content to train our models.",
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Breaking language barriers,<br />
              <span className="text-primary">one conversation at a time</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Spf.io is an all-in-one AI translation and accessibility platform helping organizations connect with global audiences through real-time translation, captions, and multilingual engagement tools.
            </p>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((value) => (
                <div key={value.title} className="p-6 rounded-xl bg-muted/50 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-12 rounded-2xl bg-primary text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Join us in making the world more connected</h2>
            <p className="opacity-90 mb-8 max-w-xl mx-auto">
              Whether you&apos;re hosting events, creating content, or facilitating conversations, spf.io helps you reach global audiences.
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
