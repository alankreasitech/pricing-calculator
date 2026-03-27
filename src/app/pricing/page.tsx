import PricingCalculator from "@/components/pricing-calculator";
import Link from "next/link";
import { Languages } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-4 text-muted-foreground hover:text-foreground transition-colors">
          <Languages className="w-5 h-5" />
          <span>Back to home</span>
        </Link>
      </div>
      <PricingCalculator />
    </div>
  );
}
