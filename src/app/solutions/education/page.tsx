import SiteLayout from "@/components/site-layout";
import { SolutionPage } from "@/components/solution-page";
import { GraduationCap } from "lucide-react";

export default function EducationSolutionPage() {
  return (
    <SiteLayout>
      <SolutionPage
        config={{
          title: "Education Solutions",
          subtitle: "Make learning accessible in every language",
          description: "From K-12 to universities, language institutes to corporate training—break down language barriers in education. Help students learn better by providing content in their native language.",
          icon: <GraduationCap className="w-8 h-8" />,
          color: "bg-green-500/10 text-green-500",
          benefits: [
            "Support English language learners effectively",
            "Provide accessible content for diverse student bodies",
            "Enable international student participation",
            "Accelerate language acquisition with bilingual content",
            "Meet accessibility requirements (Section 508, WCAG)",
            "Scale language support without hiring more staff",
          ],
          features: [
            { title: "Live Class Translation", description: "Real-time captions and translation for lectures" },
            { title: "Course Materials", description: "Translate syllabi, slides, and assignments" },
            { title: "Recorded Lectures", description: "Auto-caption and translate for on-demand viewing" },
            { title: "Study Groups", description: "Multilingual discussions and study sessions" },
          ],
          testimonials: {
            quote: "Our international students can now fully participate in class discussions. It's been transformative for their learning experience.",
            author: "Dr. Emily Rodriguez",
            role: "Director of International Programs, State University",
          },
          products: [
            { name: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation/" },
            { name: "Slides Translation", href: "/products/slide-translation/" },
            { name: "Document Translation Portal", href: "/products/document-translation-portal/" },
          ],
        }}
      />
    </SiteLayout>
  );
}
