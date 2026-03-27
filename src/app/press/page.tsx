import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const PRESS_RELEASES = [
  {
    title: "Spf.io Launches New AI-Powered Real-Time Translation Platform",
    date: "Jan 15, 2026",
    excerpt: "The TheoTech subsidiary announces breakthrough in multilingual accessibility for events and content.",
  },
  {
    title: "Major Healthcare Network Partners with spf.io for Patient Communication",
    date: "Dec 8, 2025",
    excerpt: "Leading healthcare provider implements spf.io to improve care for limited English proficiency patients.",
  },
  {
    title: "Spf.io Selected as CES 2025 Accessibility Partner",
    date: "Oct 22, 2025",
    excerpt: "The Consumer Technology Association chooses spf.io to provide multilingual accessibility for 100,000+ attendees.",
  },
  {
    title: "Spf.io Raises $15M Series A to Accelerate Global Expansion",
    date: "Aug 3, 2025",
    excerpt: "Funding will support product development and expansion into new markets.",
  },
];

const MEDIA_INQUIRIES = {
  email: "press@spf.io",
  name: "Media Relations Team",
};

export default function PressPage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press</h1>
            <p className="text-lg text-muted-foreground">
              Latest news, announcements, and media resources from spf.io.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Press Releases</h2>
            <div className="space-y-6">
              {PRESS_RELEASES.map((release, i) => (
                <article key={i} className="p-6 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{release.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                  <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                  <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-muted/50 border border-border text-center">
            <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
            <p className="text-muted-foreground mb-6">
              For press inquiries, interview requests, or media resources, please contact our media relations team.
            </p>
            <div className="inline-flex flex-col items-center gap-2">
              <span className="font-medium">{MEDIA_INQUIRIES.name}</span>
              <a href={`mailto:${MEDIA_INQUIRIES.email}`} className="text-primary hover:underline">
                {MEDIA_INQUIRIES.email}
              </a>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Brand Assets</h2>
            <p className="text-muted-foreground mb-4">
              Download our logo, brand guidelines, and press kit.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Download Press Kit
            </button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
