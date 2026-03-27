import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";

const BLOG_POSTS = [
  {
    title: "Private Live Translation: Audio-Only Mode & Access Codes for Internal Events",
    excerpt: "Worried about data leaks? Discover how spf.io's Private Live Translation uses generated Access Codes and Audio-Only mode to protect sensitive internal events.",
    date: "Jan 29, 2026",
    author: "spf.io Team",
    category: "Product Updates",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  },
  {
    title: "Distinct AI Interpreter Voices: Bring Clarity to Multilingual Conversations",
    excerpt: "Make multilingual conversations clearer with distinct AI interpreter voices that help listeners easily tell speakers apart across languages.",
    date: "Nov 7, 2025",
    author: "spf.io Team",
    category: "Features",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
  },
  {
    title: "Make Presentations More Accessible with spf.io's Zoom-In Feature",
    excerpt: "Spf.io's Audience View now includes a zoom-in feature, ensuring every slide detail is clear for every audience—online or in-person.",
    date: "Nov 5, 2025",
    author: "spf.io Team",
    category: "Features",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "5 Tips for Hosting Multilingual Virtual Events",
    excerpt: "Planning a global event? Here are our top tips for ensuring your multilingual virtual event is a success.",
    date: "Oct 15, 2025",
    author: "spf.io Team",
    category: "Best Practices",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    title: "How AI Translation is Changing the Accessibility Landscape",
    excerpt: "Explore how AI-powered translation is making content more accessible than ever before.",
    date: "Oct 1, 2025",
    author: "spf.io Team",
    category: "Industry Insights",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    title: "Building Inclusive Church Communities with Technology",
    excerpt: "How modern churches are using translation technology to welcome diverse congregations.",
    date: "Sep 18, 2025",
    author: "spf.io Team",
    category: "Case Studies",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop",
  },
];

const CATEGORIES = [
  "All Posts",
  "Product Updates",
  "Features",
  "Best Practices",
  "Industry Insights",
  "Case Studies",
];

export default function BlogPage() {
  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              News, insights, and best practices for multilingual events and accessibility.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All Posts"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.title}
                className="group rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all"
              >
                <Link href="#" className="block">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href="#">
                    <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-semibold hover:bg-muted transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
