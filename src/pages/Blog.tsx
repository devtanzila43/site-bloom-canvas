import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  { title: "5 Digital Transformation Trends for 2026", category: "Technology", date: "Mar 5, 2026", excerpt: "Explore the emerging technologies and strategies that will define digital transformation this year." },
  { title: "Building a Data-Driven Culture", category: "Strategy", date: "Feb 20, 2026", excerpt: "How to align people, processes, and technology to make data your most powerful strategic asset." },
  { title: "The Future of Remote Collaboration", category: "Insights", date: "Feb 10, 2026", excerpt: "New tools and frameworks that are reshaping how distributed teams work and innovate together." },
  { title: "Sustainable Business Practices That Pay Off", category: "Strategy", date: "Jan 28, 2026", excerpt: "Why ESG-focused strategies are delivering both social impact and stronger financial returns." },
  { title: "AI in Enterprise: Beyond the Hype", category: "Technology", date: "Jan 15, 2026", excerpt: "Practical applications of AI that are delivering real ROI for mid-market and enterprise companies." },
  { title: "Design Thinking for Business Growth", category: "Insights", date: "Jan 5, 2026", excerpt: "How human-centered design methodologies can unlock new revenue streams and improve customer retention." },
];

const Blog = () => (
  <>
    <section className="gradient-hero text-primary-foreground section-padding pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Blog</span>
          <h1 className="text-4xl md:text-5xl mt-2 mb-6">Insights & Articles</h1>
          <p className="text-primary-foreground/70 text-lg font-body">Thought leadership, industry analysis, and practical guidance from our experts.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(({ title, category, date, excerpt }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="h-44 bg-muted" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-accent font-medium uppercase tracking-wide">{category}</span>
                <span className="text-xs text-muted-foreground">{date}</span>
              </div>
              <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-accent transition-colors">{title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Blog;
