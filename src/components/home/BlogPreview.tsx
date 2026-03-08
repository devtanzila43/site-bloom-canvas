import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import blogDigital from "@/assets/blog-digital-transformation.jpg";
import blogData from "@/assets/blog-data-driven.jpg";
import blogRemote from "@/assets/blog-remote-collab.jpg";

const posts = [
  { title: "5 Digital Transformation Trends for 2026", category: "Technology", date: "Mar 5, 2026", image: blogDigital },
  { title: "Building a Data-Driven Culture", category: "Strategy", date: "Feb 20, 2026", image: blogData },
  { title: "The Future of Remote Collaboration", category: "Insights", date: "Feb 10, 2026", image: blogRemote },
];

const BlogPreview = () => (
  <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-12"
      >
        <div>
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Blog</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2">Latest Insights</h2>
        </div>
        <Link to="/blog" className="hidden md:flex items-center gap-1 text-sm text-accent font-medium hover:underline">
          View All <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map(({ title, category, date, image }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to="/blog" className="block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group">
              <div className="h-48 bg-muted" />
              <div className="p-6">
                <span className="text-xs text-accent font-medium uppercase tracking-wide">{category}</span>
                <h3 className="font-heading text-lg text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
