import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechVista", text: "ApexCorp transformed our digital infrastructure. Revenue increased 40% within six months of launch." },
  { name: "James Rodriguez", role: "COO, GlobalTrade", text: "Their strategic insights helped us enter three new markets ahead of schedule and under budget." },
  { name: "Emily Foster", role: "CMO, BrightPath", text: "The branding work was exceptional. Our customer engagement metrics have never been higher." },
];

const TestimonialsPreview = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-medium text-sm tracking-widest uppercase">Testimonials</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2">What Our Clients Say</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(({ name, role, text }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-8 shadow-card"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">"{text}"</p>
            <div>
              <p className="font-heading text-foreground">{name}</p>
              <p className="text-xs text-muted-foreground">{role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsPreview;
