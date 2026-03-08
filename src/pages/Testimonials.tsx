import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechVista", text: "ApexCorp transformed our digital infrastructure completely. Revenue increased 40% within six months of launch. Their team became an extension of ours." },
  { name: "James Rodriguez", role: "COO, GlobalTrade", text: "Their strategic insights helped us enter three new markets ahead of schedule and under budget. Exceptional expertise and communication throughout." },
  { name: "Emily Foster", role: "CMO, BrightPath", text: "The branding work was exceptional. Our customer engagement metrics have never been higher. They truly understood our audience." },
  { name: "Michael Park", role: "CTO, DataFlow", text: "The analytics platform they built reduced our reporting time by 10x. Their technical depth and attention to detail are unmatched." },
  { name: "Lisa Nguyen", role: "Director, MedCore", text: "Process automation saved us 60% in operational costs. ApexCorp delivered beyond expectations with incredible professionalism." },
  { name: "Robert Blake", role: "Founder, EcoVentures", text: "From concept to 50K users in under a year. ApexCorp's custom platform solution was exactly what we needed to scale." },
];

const Testimonials = () => (
  <>
    <section className="gradient-hero text-primary-foreground section-padding pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Testimonials</span>
          <h1 className="text-4xl md:text-5xl mt-2 mb-6">Client Success Stories</h1>
          <p className="text-primary-foreground/70 text-lg font-body">Hear directly from the leaders who trust ApexCorp to deliver results.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(({ name, role, text }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-lg p-8 shadow-card"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-accent text-accent" />)}
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">"{text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted" />
              <div>
                <p className="font-heading text-foreground text-sm">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Testimonials;
