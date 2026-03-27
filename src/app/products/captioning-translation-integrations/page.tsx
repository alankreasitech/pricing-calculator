import SiteLayout from "@/components/site-layout";
import { CheckCircle, Video, MessageCircle, Globe } from "lucide-react";

const INTEGRATIONS = [
  { name: "Zoom", category: "Video Conferencing", icon: Video, status: "Available" },
  { name: "Microsoft Teams", category: "Video Conferencing", icon: MessageCircle, status: "Available" },
  { name: "Google Meet", category: "Video Conferencing", icon: Globe, status: "Available" },
  { name: "StreamYard", category: "Live Streaming", icon: Video, status: "Available" },
  { name: "Twitch", category: "Live Streaming", icon: Video, status: "Available" },
  { name: "YouTube Live", category: "Live Streaming", icon: Video, status: "Available" },
  { name: "Facebook Live", category: "Live Streaming", icon: Globe, status: "Available" },
  { name: "OBS Studio", category: "Live Streaming", icon: Video, status: "Available" },
  { name: "vMix", category: "Live Streaming", icon: Video, status: "Available" },
  { name: "PowerPoint", category: "Productivity", icon: MessageCircle, status: "Available" },
  { name: "Google Slides", category: "Productivity", icon: MessageCircle, status: "Available" },
  { name: "Dropbox", category: "Storage", icon: Globe, status: "Available" },
  { name: "Google Drive", category: "Storage", icon: Globe, status: "Available" },
  { name: "SharePoint", category: "Storage", icon: MessageCircle, status: "Available" },
];

export default function IntegrationsPage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Integrations</h1>
            <p className="text-lg text-muted-foreground">
              Spf.io integrates seamlessly with the tools you already use. No need to change your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {INTEGRATIONS.map((integration) => (
              <div
                key={integration.name}
                className="p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <integration.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {integration.status}
                  </span>
                </div>
                <h3 className="font-bold mb-1">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.category}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-8 rounded-2xl bg-muted/50 border border-border">
            <h2 className="text-2xl font-bold mb-4">                  Don&apos;t see your platform?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We support custom integrations and RTMP streams. Contact us to discuss your specific needs.
            </p>
            <a
              href="/contact-us/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
