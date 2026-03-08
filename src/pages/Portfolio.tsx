import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroPortfolio from "@/assets/hero-portfolio.jpg";

const projects = [
  { title: "TechVista Platform Redesign", category: "Digital Transformation", result: "+40% Revenue" },
  { title: "GlobalTrade Market Expansion", category: "Strategy Consulting", result: "3 New Markets" },
  { title: "BrightPath Brand Launch", category: "Brand & Design", result: "+120% Engagement" },
  { title: "DataFlow Analytics Suite", category: "Analytics & BI", result: "10x Faster Reporting" },
  { title: "MedCore Process Automation", category: "Operations", result: "60% Cost Reduction" },
  { title: "EcoVentures Digital Platform", category: "Custom Solutions", result: "50K+ Users" },
];

const Portfolio = () => (
  <>
    <section className="gradient-hero text-primary-foreground section-padding pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Portfolio</span>
          <h1 className="text-4xl md:text-5xl mt-2 mb-6">Featured Projects</h1>
          <p className="text-primary-foreground/70 text-lg font-body">A selection of our work that showcases impact, innovation, and measurable outcomes.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, category, result }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="h-48 bg-muted" />
            <div className="p-6">
              <span className="text-xs text-accent font-medium uppercase tracking-wide">{category}</span>
              <h3 className="font-heading text-lg text-foreground mt-2 mb-2 flex items-center gap-1 group-hover:text-accent transition-colors">
                {title} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground font-body">Key Result: <span className="text-foreground font-medium">{result}</span></p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Portfolio;
