import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <h3 className="font-heading text-2xl mb-4">
          Apex<span className="text-accent">Corp</span>
        </h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Delivering innovative solutions that transform businesses and drive measurable results since 2010.
        </p>
      </div>

      <div>
        <h4 className="font-heading text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {["About", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase()}`} className="hover:text-accent transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-heading text-lg mb-4">Contact</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          <li className="flex items-center gap-2"><Mail size={14} className="text-accent" /> hello@apexcorp.com</li>
          <li className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +1 (555) 123-4567</li>
          <li className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> 123 Business Ave, NY</li>
        </ul>
      </div>

      <div>
        <h4 className="font-heading text-lg mb-4">Legal</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} ApexCorp. All rights reserved.
    </div>
  </footer>
);

export default Footer;
