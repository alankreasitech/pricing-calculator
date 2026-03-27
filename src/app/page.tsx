"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Languages,
  Video,
  FileText,
  MessageCircle,
  Users,
  Zap,
  Shield,
  CheckCircle,
  ChevronDown,
  Menu,
  X,
  Play,
  Quote,
  Clock,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PricingCalculator from "@/components/pricing-calculator";

const NAV_ITEMS = {
  Product: [
    { name: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation/" },
    { name: "Audio Live Streaming", href: "/products/audio-livestreaming/" },
    { name: "Multilingual Polls", href: "/products/multilingual-polls/" },
    { name: "Audio Video Captions & Subtitles", href: "/audio-video-captions-and-subtitles/" },
    { name: "Document Translation Portal", href: "/products/document-translation-portal/" },
    { name: "Slides Translation", href: "/products/slide-translation/" },
    { name: "Multilingual Conversations", href: "/products/multilingual-conversations/" },
    { name: "All Products", href: "/products/" },
  ],
  Solutions: [
    { name: "Churches", href: "/solutions/religious/" },
    { name: "Conferences", href: "/solutions/conferences/" },
    { name: "Corporate Events", href: "/solutions/corporate-events/" },
    { name: "Education", href: "/solutions/education/" },
    { name: "Government", href: "/solutions/government/" },
    { name: "Theater", href: "/solutions/online-zoom-theater-performance/" },
  ],
  Resources: [
    { name: "Blog", href: "/category/blog/" },
    { name: "Case Studies", href: "/spfio-case-studies/" },
    { name: "Documentation", href: "/resources/documentation/" },
    { name: "FAQ", href: "/resources/frequently-asked-questions/" },
    { name: "Help", href: "/contact-us/" },
  ],
};

const INTEGRATIONS = [
  { name: "StreamYard", icon: Video },
  { name: "Twitch", icon: Play },
  { name: "OBS", icon: Layers },
  { name: "Facebook Live", icon: Globe },
  { name: "YouTube", icon: Video },
  { name: "Google Meet", icon: Users },
  { name: "Microsoft Teams", icon: Users },
  { name: "Zoom", icon: Video },
];

const TESTIMONIALS = [
  {
    quote: "I can't think of a better partner than spf.io for a global event requiring caption and translation in multiple languages at the right cost.",
    author: "Vikas Pota",
    role: "Founder and CEO, T4 Education",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The translation results are very helpful for translators, so they don't need to translate from scratch.",
    author: "Maria Fennita",
    role: "Editorial Director, Christianity Today Indonesia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "With spf.io Convo app, now we're able to have multiple people on a call in a group setting where we're speaking different languages.",
    author: "Pastor Steven Zapolski",
    role: "Founder, United Community Church",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const FEATURES = [
  {
    icon: Globe,
    title: "100+ Languages",
    description: "Translate between over 100 languages with AI-powered accuracy.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Get instant captions and translations as content is spoken.",
  },
  {
    icon: Shield,
    title: "Human-in-the-Loop",
    description: "Supervise and correct AI output in real-time for guaranteed quality.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Run multilingual events anytime with always-on AI translation.",
  },
];

const ADDITIONAL_SERVICES = [
  "On-call Support & Remote Operators",
  "Professional Captioners & Interpreters",
  "Event Preparation & Tech Checks",
  "AI Customization",
  "Multilingual Strategy Consulting",
  "Translation & Transcription Services",
];

const BLOG_POSTS = [
  {
    title: "Private Live Translation: Audio-Only Mode & Access Codes for Internal Events",
    date: "Jan 29, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
  },
  {
    title: "Distinct AI Interpreter Voices: Bring Clarity to Multilingual Conversations",
    date: "Nov 7, 2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
  },
  {
    title: "Make Presentations More Accessible with spf.io's Zoom-In Feature",
    date: "Nov 5, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
];

function LinkButton({ href, children, variant = "default", size = "default" }: { href: string; children: React.ReactNode; variant?: "default" | "outline"; size?: "default" | "lg"; }) {
  return (
    <Link href={href}>
      <Button variant={variant} size={size}>{children}</Button>
    </Link>
  );
}

export default function HomePage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <Languages className="w-8 h-8 text-primary" />
                <span className="font-bold text-xl">spf.io</span>
              </Link>
              <div className="hidden lg:flex items-center gap-1">
                {Object.entries(NAV_ITEMS).map(([label, items]) => (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === label ? null : label);
                      }}
                      className={`px-4 py-2 text-sm font-medium hover:text-foreground transition-colors flex items-center gap-1 ${activeDropdown === label ? 'text-foreground' : 'text-muted-foreground'}`}
                    >
                      {label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === label ? 'rotate-180' : ''}`} />
                    </Link>
                    {activeDropdown === label && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-xl py-2 animate-in fade-in-0 zoom-in-95 z-50">
                        {items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/pricing" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <LinkButton href="/request-a-quote/">Request a Quote</LinkButton>
              <button
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-2">
              {Object.entries(NAV_ITEMS).map(([label, items]) => (
                <div key={label} className="py-2">
                  <div className="font-semibold text-sm mb-2">{label}</div>
                  <div className="pl-4 space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-sm text-muted-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Access in any{" "}
              <span className="text-primary">language</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Make your events, content, and conversations accessible and multilingual
              with our all-in-one platform powered by AI with a human touch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton href="/request-a-quote/" size="lg">Request a Quote</LinkButton>
              <LinkButton href="/demo/" variant="outline" size="lg">See a Demo</LinkButton>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-gradient-to-br from-muted to-background">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/20 transition-colors">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground">Watch how spf.io works</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {["Volvo", "Accenture", "CES", "Christianity Today", "Databricks", "Delta"].map((brand) => (
              <span key={brand} className="font-bold text-lg text-muted-foreground">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Delighting your multilingual audience doesn&apos;t have to be stressful.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Overwhelmed by the complexity of creating a multilingual event?",
              "Concerned about costs blowing up as you add more languages?",
              "Frustrated by finding and managing quality interpreters?",
              "Anxious about burning out staff and volunteers?",
              "Worried few people will actually use your translations?",
              "Looking for a solution that scales as your audience grows?",
            ].map((pain, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm">{pain}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">
            Spf.io makes it easy to translate events, content, and conversations. Our AI
            translation platform streamlines your localization efforts and elevates the
            end-to-end experience for your multilingual audience.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need for multilingual accessibility
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One platform for all your translation and accessibility needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-background border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Events */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Events</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Host multilingual events with ease
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Display real-time captions and translations, stream audio interpretation and poll audiences in 100+ languages.",
                  "Use autopilot or supervise AI and swiftly correct errors in real-time to ensure quality.",
                  "Useful for in-person, online, and hybrid events of all sizes.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <LinkButton href="/products/">Learn more</LinkButton>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-border/50 flex items-center justify-center">
                <Video className="w-24 h-24 text-primary/50" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-border/50 flex items-center justify-center">
                <FileText className="w-24 h-24 text-primary/50" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Content</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Translate content faster
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Quickly translate audio, video, slides, and documents with language AI that learns from you.",
                  "Easily edit AI generated results to achieve your desired quality while training the AI.",
                  "Easily manage content and collaborators across multiple languages.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <LinkButton href="/products/">Learn more</LinkButton>
            </div>
          </div>

          {/* Conversations */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Conversations</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                AI translation for multilingual conversations
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Let people speak freely in their native language through real-time captions and translations.",
                  "Support relationships and collaboration across languages–online and in-person.",
                  "Customize spf.io's language AI to ensure safer and more accurate captions.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <LinkButton href="/products/multilingual-conversations/">Learn more</LinkButton>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-border/50 flex items-center justify-center">
                <MessageCircle className="w-24 h-24 text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integrates with your workflow
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Works with the streaming platforms you already use
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {INTEGRATIONS.map((integration) => (
              <div
                key={integration.name}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-colors"
              >
                <integration.icon className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <LinkButton href="/products/captioning-translation-integrations/" variant="outline">View all integrations</LinkButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What our customers say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="p-6 rounded-xl bg-muted/30 border border-border/50">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Additional services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ADDITIONAL_SERVICES.map((service) => (
              <div key={service} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to get started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schedule a call with us to assess your needs and see a live demo of spf.io.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href="/request-a-quote/" size="lg">Request a Quote</LinkButton>
            <LinkButton href="/pricing/" variant="outline" size="lg">View Pricing</LinkButton>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Latest from our blog</h2>
            <LinkButton href="/category/blog/" variant="outline">View all</LinkButton>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.title}
                href="#"
                className="group"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20 bg-muted/30" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate your pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Build your perfect multilingual solution. Only pay for what you need.
            </p>
          </div>
          <PricingCalculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions?</h2>
          <p className="text-muted-foreground mb-8">
            Check out our Frequently Asked Questions or contact us for more information.
          </p>
          <LinkButton href="/resources/frequently-asked-questions/" variant="outline">Read FAQs</LinkButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Languages className="w-8 h-8 text-primary" />
                <span className="font-bold text-xl">spf.io</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                All-in-one AI translation and accessibility platform for events, content, and conversations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/products/" className="text-muted-foreground hover:text-foreground transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/products/automatic-captions-and-translation/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Captions & Translation
                  </Link>
                </li>
                <li>
                  <Link href="/products/audio-livestreaming/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Audio Streaming
                  </Link>
                </li>
                <li>
                  <Link href="/products/multilingual-conversations/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Conversations
                  </Link>
                </li>
                <li>
                  <Link href="/products/captioning-translation-integrations/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/pricing/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/spfio-case-studies/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/religious/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Churches
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/education/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/conferences/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Conferences
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/government/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Government
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/corporate-events/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Corporate Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/category/blog/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/documentation/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/resources/frequently-asked-questions/" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/demo/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Request a Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about/" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/press/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/request-a-quote/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 TheoTech LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
