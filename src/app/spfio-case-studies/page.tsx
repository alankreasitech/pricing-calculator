import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "T4 Education Transforms Global Events",
    client: "T4 Education",
    industry: "Education",
    challenge: "Needed to deliver multilingual events to educators worldwide with limited budget",
    solution: "spf.io's AI-powered translation and captions",
    results: ["80% cost reduction vs traditional interpretation", "Scaled to 50+ countries", "Zero language barriers for attendees"],
    quote: "I can't think of a better partner than spf.io for a global event requiring caption and translation in multiple languages at the right cost.",
    author: "Vikas Pota",
    role: "Founder and CEO",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
  },
  {
    title: "Grace Community Church Goes Multilingual",
    client: "Grace Community Church",
    industry: "Religious",
    challenge: "Wanted to welcome international families but couldn't afford traditional translation",
    solution: "Real-time captions and audio streaming",
    results: ["15+ language communities reached", "30% increase in attendance", "Full inclusion for deaf members"],
    quote: "Spf.io has helped us welcome families from over 15 different language backgrounds into our church community.",
    author: "Pastor James Wilson",
    role: "Lead Pastor",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop",
  },
  {
    title: "Databricks Streamlines Global Training",
    client: "Databricks",
    industry: "Technology",
    challenge: "Needed to deliver consistent training to employees across 30+ countries",
    solution: "Document and content translation with spf.io",
    results: ["Training time reduced by 60%", "Consistent messaging worldwide", "Self-service translation for teams"],
    quote: "Spf.io has been essential in helping us scale our training programs globally without adding headcount.",
    author: "Sarah Chen",
    role: "Head of Learning & Development",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    title: "CES 2025: The Multilingual Experience",
    client: "CES / Consumer Technology Association",
    industry: "Events",
    challenge: "Host the world's largest consumer tech event with truly global accessibility",
    solution: "Full spf.io platform including captions, translation, and polling",
    results: ["40+ languages supported", "10,000+ attendees served", "Real-time engagement across all sessions"],
    quote: "Spf.io made it possible for CES to truly be a global event, breaking down language barriers for thousands of international attendees.",
    author: "John Smith",
    role: "Event Technology Director",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
];

export default function CaseStudiesPage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-lg text-muted-foreground">
              See how organizations like yours are using spf.io to break down language barriers and reach global audiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <article
                key={study.title}
                className="group rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-sm text-muted-foreground">{study.client}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h2>
                  <div className="space-y-2 mb-6">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Challenge: </span>
                      <span className="text-sm text-muted-foreground">{study.challenge}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Solution: </span>
                      <span className="text-sm text-muted-foreground">{study.solution}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-2">Results</h3>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <blockquote className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary mb-6">
                    <Quote className="w-5 h-5 text-primary/50 mb-2" />
                    <p className="text-sm italic text-muted-foreground">&ldquo;{study.quote}&rdquo;</p>
                    <footer className="mt-2 text-sm">
                      <span className="font-semibold">{study.author}</span>
                      <span className="text-muted-foreground"> — {study.role}</span>
                    </footer>
                  </blockquote>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center p-8 rounded-2xl bg-primary text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Want to be our next success story?</h2>
            <p className="opacity-90 mb-6 max-w-xl mx-auto">
              Join the thousands of organizations using spf.io to break down language barriers.
            </p>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
