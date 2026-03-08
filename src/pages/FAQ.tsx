import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What industries does ApexCorp serve?", a: "We work across technology, finance, healthcare, retail, manufacturing, and professional services. Our multidisciplinary approach allows us to adapt to any industry context." },
  { q: "How long does a typical engagement last?", a: "Project timelines range from 4 weeks for focused assessments to 12+ months for comprehensive transformations. We scope every engagement to deliver value quickly with clear milestones." },
  { q: "Do you work with startups or only enterprises?", a: "We serve organizations of all sizes. Our solutions scale from early-stage startups to Fortune 500 enterprises, with pricing and scope tailored accordingly." },
  { q: "What is your pricing model?", a: "We offer project-based, retainer, and hybrid pricing models. Every engagement starts with a free consultation to understand your needs and provide a transparent proposal." },
  { q: "How do you measure success?", a: "We define clear KPIs at the start of every project and provide regular reporting against those metrics. Our focus is always on measurable business outcomes." },
  { q: "Can you integrate with our existing systems?", a: "Absolutely. We specialize in working within existing tech ecosystems. Our team evaluates your current infrastructure and builds solutions that integrate seamlessly." },
  { q: "Do you offer ongoing support?", a: "Yes. We offer maintenance, optimization, and managed services to ensure the solutions we deliver continue to perform and evolve with your business." },
];

const FAQ = () => (
  <>
    <section className="gradient-hero text-primary-foreground section-padding pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">FAQ</span>
          <h1 className="text-4xl md:text-5xl mt-2 mb-6">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/70 text-lg font-body">Find answers to the most common questions about working with ApexCorp.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem value={`faq-${i}`} className="bg-card rounded-lg px-6 shadow-card border-none">
                <AccordionTrigger className="font-heading text-foreground text-left hover:no-underline">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed">{a}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default FAQ;
