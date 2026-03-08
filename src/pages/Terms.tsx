import { motion } from "framer-motion";

const Terms = () => (
  <>
    <section className="gradient-hero text-primary-foreground section-padding pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl mb-4">Terms & Conditions</h1>
          <p className="text-primary-foreground/70 font-body">Last updated: March 8, 2026</p>
        </motion.div>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground font-body space-y-6">
        <h2 className="font-heading text-foreground text-2xl">Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
        <h2 className="font-heading text-foreground text-2xl">Use of Services</h2>
        <p>Our services are provided on an "as is" basis. We reserve the right to modify, suspend, or discontinue any part of our services at any time.</p>
        <h2 className="font-heading text-foreground text-2xl">Intellectual Property</h2>
        <p>All content, trademarks, and intellectual property on this website are owned by ApexCorp and protected by applicable copyright and trademark laws.</p>
        <h2 className="font-heading text-foreground text-2xl">Limitation of Liability</h2>
        <p>ApexCorp shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>
      </div>
    </section>
  </>
);

export default Terms;
