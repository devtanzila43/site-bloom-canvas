import { motion } from "framer-motion";
import { Shield, Zap, Award, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Trusted Expertise", text: "Industry-recognized team with deep domain knowledge." },
  { icon: Zap, title: "Agile Delivery", text: "Fast, iterative execution without compromising quality." },
  { icon: Award, title: "Proven Results", text: "Consistently exceeding KPIs across 200+ engagements." },
  { icon: HeartHandshake, title: "Client-First Approach", text: "Your success is our metric — transparent, collaborative, committed." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-medium text-sm tracking-widest uppercase">Why Us</span>
        <h2 className="text-3xl md:text-4xl mt-2">Why Choose ApexCorp</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {reasons.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center mx-auto mb-4">
              <Icon size={24} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg mb-2">{title}</h3>
            <p className="text-sm text-primary-foreground/70 font-body">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
