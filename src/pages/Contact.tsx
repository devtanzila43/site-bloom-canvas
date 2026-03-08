import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    }, 1000);
  };

  return (
    <>
      <section className="gradient-hero text-primary-foreground section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Contact</span>
            <h1 className="text-4xl md:text-5xl mt-2 mb-6">Let's Work Together</h1>
            <p className="text-primary-foreground/70 text-lg font-body">Ready to transform your business? Reach out and let's start a conversation.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 bg-card rounded-lg p-8 md:p-10 shadow-card space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block font-body">Full Name</label>
                <Input placeholder="John Doe" required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block font-body">Email</label>
                <Input type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block font-body">Subject</label>
              <Input placeholder="How can we help?" required />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block font-body">Message</label>
              <Textarea placeholder="Tell us about your project..." rows={5} required />
            </div>
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: Mail, label: "Email", value: "hello@apexcorp.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Office", value: "123 Business Avenue, Suite 500, New York, NY 10001" },
              { icon: Clock, label: "Hours", value: "Mon – Fri, 9:00 AM – 6:00 PM EST" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground font-body">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
