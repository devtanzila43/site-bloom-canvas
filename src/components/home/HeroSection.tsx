import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 gradient-hero opacity-80" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-4">
          Welcome to ApexCorp
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
          Building the Future of Business Excellence
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-8 font-body">
          We partner with ambitious companies to deliver transformative solutions that drive growth, efficiency, and lasting impact.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get a Free Consultation <ArrowRight size={18} />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
