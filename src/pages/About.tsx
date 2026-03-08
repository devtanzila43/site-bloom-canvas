import { motion } from "framer-motion";
import { Target, Eye, Users2, Award } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

const team = [
  { name: "Alexandra Hart", role: "CEO & Founder", bio: "20+ years leading enterprise transformations across Fortune 500 companies." },
  { name: "David Kim", role: "CTO", bio: "Former Google engineer specializing in scalable cloud architectures." },
  { name: "Maria Santos", role: "VP of Strategy", bio: "McKinsey alumna with expertise in market entry and growth strategy." },
  { name: "Thomas Wright", role: "Creative Director", bio: "Award-winning designer with a passion for purposeful brand storytelling." },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="relative text-primary-foreground section-padding pt-32 overflow-hidden">
      <img src={heroAbout} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">About Us</span>
          <h1 className="text-4xl md:text-5xl mt-2 mb-6">Our Story, Our Mission</h1>
          <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
            Founded in 2010, ApexCorp was born from a simple belief: every organization deserves a strategic partner that combines deep expertise with genuine care for their success.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-lg p-10 shadow-card">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Target size={22} className="text-accent" />
          </div>
          <h3 className="font-heading text-2xl text-foreground mb-3">Our Mission</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            To empower businesses with innovative, data-driven solutions that unlock growth, optimize performance, and create lasting competitive advantage.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-lg p-10 shadow-card">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Eye size={22} className="text-accent" />
          </div>
          <h3 className="font-heading text-2xl text-foreground mb-3">Our Vision</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            To be the global standard for excellence in business consulting — trusted by industry leaders for our integrity, innovation, and impact.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding-sm bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { icon: Award, val: "200+", label: "Projects" },
          { icon: Users2, val: "50+", label: "Experts" },
          { icon: Target, val: "98%", label: "Client Satisfaction" },
          { icon: Eye, val: "15+", label: "Years" },
        ].map(({ icon: Icon, val, label }) => (
          <div key={label}>
            <Icon size={24} className="text-accent mx-auto mb-2" />
            <p className="text-3xl font-heading">{val}</p>
            <p className="text-xs text-primary-foreground/60 mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Leadership</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2">Meet Our Team</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(({ name, role, bio }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-card text-center"
            >
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4" />
              <h3 className="font-heading text-lg text-foreground">{name}</h3>
              <p className="text-xs text-accent font-medium mb-3">{role}</p>
              <p className="text-sm text-muted-foreground font-body">{bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
