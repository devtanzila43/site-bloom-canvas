import { motion } from "framer-motion";
import { Lightbulb, BarChart3, Code2, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Lightbulb, title: "Strategy Consulting", description: "Data-driven strategies that align your vision with market opportunities and measurable outcomes." },
  { icon: Code2, title: "Digital Transformation", description: "End-to-end technology solutions that modernize operations and unlock new growth channels." },
  { icon: BarChart3, title: "Analytics & Insights", description: "Advanced analytics and BI platforms that turn complex data into actionable intelligence." },
  { icon: Palette, title: "Brand & Design", description: "Compelling brand experiences that resonate with your audience and drive engagement." },
];

const ServicesOverview = () => (
  <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-medium text-sm tracking-widest uppercase">What We Do</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2">Our Core Services</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              to="/services"
              className="block bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-shadow h-full group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
