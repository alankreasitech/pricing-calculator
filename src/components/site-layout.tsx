import Link from "next/link";
import { Languages } from "lucide-react";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border/50 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Languages className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl">spf.io</span>
          </Link>
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
