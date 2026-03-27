import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { Clock, Users, Globe } from "lucide-react";

export default function RequestQuotePage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Request a <span className="text-primary">Quote</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Tell us about your project and we&apos;ll create a customized quote tailored to your specific needs.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">Get a personalized quote within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Expert Guidance</h3>
                    <p className="text-sm text-muted-foreground">Our team will help you find the perfect solution</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Flexible Options</h3>
                    <p className="text-sm text-muted-foreground">Custom pricing for any budget and scale</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6 p-8 rounded-2xl bg-muted/50 border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Work Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Organization *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Organization Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select type</option>
                    <option value="church">Church / Religious Organization</option>
                    <option value="education">Educational Institution</option>
                    <option value="corporate">Corporate / Business</option>
                    <option value="government">Government / Public Sector</option>
                    <option value="nonprofit">Non-profit Organization</option>
                    <option value="individual">Individual</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select service</option>
                    <option value="events">Live Events Translation</option>
                    <option value="content">Content Translation</option>
                    <option value="conversations">Multilingual Conversations</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="consulting">Professional Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                    <option value="">Select budget</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-25k">$5,000 - $25,000</option>
                    <option value="25k-100k">$25,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Submit Request
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
