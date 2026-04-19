import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="font-serif text-2xl font-bold">
            Ivory<span className="text-gold">Edge</span>
          </span>
          <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
            Premium dental care designed for comfort. Advanced technology meets a gentle touch at South Delhi's most trusted dental studio.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Our Services" },
              { to: "/booking", label: "Book Appointment" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-sans text-lg font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-3">
            {["Teeth Whitening", "Dental Implants", "Braces & Aligners", "Root Canal", "Cosmetic Dentistry"].map((s) => (
              <Link key={s} to="/services" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-lg font-semibold mb-4">Contact Us</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />
              <span className="text-sm text-primary-foreground/60">IvoryEdge Dental Studio, Saket, South Delhi, 110017</span>
            </div>
            <a href="tel:+911234567890" className="flex gap-3 items-center text-sm text-primary-foreground/60 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 text-gold shrink-0" /> +91 123 456 7890
            </a>
            <a href="mailto:student29gopal@gmail.com" className="flex gap-3 items-center text-sm text-primary-foreground/60 hover:text-gold transition-colors">
              <Mail className="w-4 h-4 text-gold shrink-0" /> student29gopal@gmail.com
            </a>
            <div className="flex gap-3 items-start">
              <Clock className="w-4 h-4 mt-1 text-gold shrink-0" />
              <span className="text-sm text-primary-foreground/60">Mon – Sat: 9AM – 8PM<br />Sun: 10AM – 2PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
        © {new Date().getFullYear()} IvoryEdge Dental Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
