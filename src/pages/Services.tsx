import { motion } from "framer-motion";
import { Lightbulb, Code2, BarChart3, Palette, Settings, Globe } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  { icon: Lightbulb, title: "Strategy Consulting", desc: "We analyze market dynamics, competitive landscapes, and internal capabilities to craft strategies that drive sustainable growth." },
  { icon: Code2, title: "Digital Transformation", desc: "End-to-end technology modernization — from legacy migration to cloud-native architectures and process automation." },
  { icon: BarChart3, title: "Analytics & BI", desc: "Custom dashboards, predictive models, and data pipelines that turn raw information into strategic advantage." },
  { icon: Palette, title: "Brand & Design", desc: "Visual identity, UX/UI design, and content strategy that create memorable experiences and drive engagement." },
  { icon: Settings, title: "Operations Optimization", desc: "Lean process redesign, supply chain improvements, and workflow automation to maximize efficiency." },
  { icon: Globe, title: "Custom Solutions", desc: "Bespoke software, integrations, and platforms tailored to your unique business requirements." },
];

const Services = () => (
  <>
    <section className="gradient-hero text-primary-foreground section-padding pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Services</span>
          <h1 className="text-4xl md:text-5xl mt-2 mb-6">Solutions That Drive Results</h1>
          <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
            From strategy to execution, we offer a comprehensive suite of services designed to help your business thrive in an ever-evolving landscape.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <Icon size={24} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Services;
