import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";

const stats = [
  { icon: Target, value: "200+", label: "Projects Delivered" },
  { icon: Eye, value: "15+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Team Members" },
];

const AboutPreview = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-accent font-medium text-sm tracking-widest uppercase">Who We Are</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-6">
          A Partner You Can Trust
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 font-body">
          For over 15 years, ApexCorp has been at the forefront of innovation, helping organizations navigate complexity and seize new opportunities with confidence.
        </p>
        <p className="text-muted-foreground leading-relaxed font-body">
          Our multidisciplinary team brings deep expertise across strategy, technology, and design to deliver solutions that truly make a difference.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-6"
      >
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <Icon size={22} className="text-accent" />
            </div>
            <p className="text-3xl font-heading text-foreground">{value}</p>
            <p className="text-xs text-muted-foreground mt-1 font-body">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutPreview;
