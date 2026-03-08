import { motion } from "framer-motion";

const Privacy = () => (
  <>
    <section className="gradient-hero text-primary-foreground section-padding pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/70 font-body">Last updated: March 8, 2026</p>
        </motion.div>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground font-body space-y-6">
        <h2 className="font-heading text-foreground text-2xl">Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email.</p>
        <h2 className="font-heading text-foreground text-2xl">How We Use Your Information</h2>
        <p>We use the information to respond to your inquiries, provide our services, improve our website, and communicate with you about relevant updates and offerings.</p>
        <h2 className="font-heading text-foreground text-2xl">Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
        <h2 className="font-heading text-foreground text-2xl">Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at privacy@apexcorp.com.</p>
      </div>
    </section>
  </>
);

export default Privacy;
