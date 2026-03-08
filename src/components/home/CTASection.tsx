import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding bg-background">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl text-foreground mb-4">Ready to Elevate Your Business?</h2>
      <p className="text-muted-foreground font-body mb-8 text-lg">
        Let's discuss how ApexCorp can help you achieve your goals. Schedule a free consultation today.
      </p>
      <Button variant="hero" size="lg" asChild>
        <Link to="/contact">
          Start a Conversation <ArrowRight size={18} />
        </Link>
      </Button>
    </motion.div>
  </section>
);

export default CTASection;
