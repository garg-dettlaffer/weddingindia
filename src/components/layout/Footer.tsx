import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
  };

  const footerLinks = {
    services: [
      { name: "Full Wedding Planning", path: "/services" },
      { name: "Day-of Coordination", path: "/services" },
      { name: "Decor & Design", path: "/services" },
      { name: "Destination Weddings", path: "/destination-weddings" },
      { name: "Corporate Events", path: "/corporate-events" },
    ],
    explore: [
      { name: "Portfolio", path: "/portfolio" },
      { name: "Real Weddings", path: "/real-weddings" },
      { name: "Gallery", path: "/gallery" },
      { name: "Videos", path: "/gallery-videos" },
      { name: "Inspiration", path: "/inspiration" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Blog", path: "/blog" },
      { name: "FAQ", path: "/faq" },
    ],
    support: [
      { name: "Contact", path: "/contact" },
      { name: "Pricing", path: "/pricing" },
      { name: "Book Now", path: "/book" },
      { name: "Vendors", path: "/vendors" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ],
  };

  return (
    <footer className="bg-foreground text-ivory relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Newsletter Section */}
      <div className="border-b border-ivory/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase">Stay Connected</span>
              <h3 className="font-heading text-3xl">Subscribe to Our Newsletter</h3>
              <p className="text-ivory/70 font-body">
                Get the latest wedding trends, inspiration, and exclusive offers delivered to your inbox.
              </p>

              {isSubscribed ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center justify-center gap-2 text-gold py-4"
                >
                  <Heart className="w-5 h-5 fill-gold" />
                  <span className="font-heading">Thank you for subscribing!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-0 max-w-md mx-auto mt-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 bg-ivory/10 border-2 border-ivory/20 text-ivory placeholder:text-ivory/50 font-body focus:outline-none focus:border-gold transition-colors"
                  />
                  <button
                    type="submit"
                    className="btn-gold py-4"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-gold fill-gold" />
              <div>
                <span className="font-heading text-xl font-bold text-ivory">Elegant Weddings</span>
                <span className="block text-xs tracking-[0.3em] uppercase text-gold">India</span>
              </div>
            </Link>
            <p className="text-ivory/70 font-body leading-relaxed">
              Creating timeless wedding experiences across India. From intimate ceremonies to grand celebrations, 
              we transform your dreams into reality with elegance and precision.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-body">+91 98765 43210</span>
              </a>
              <a href="mailto:info@elegantweddings.in" className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-body">info@elegantweddings.in</span>
              </a>
              <div className="flex items-start gap-3 text-ivory/70">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="font-body">C-21, Royal Plaza, MI Road, Jaipur, Rajasthan 302001</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg text-gold">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-ivory/70 hover:text-gold transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg text-gold">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-ivory/70 hover:text-gold transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg text-gold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-ivory/70 hover:text-gold transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg text-gold">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-ivory/70 hover:text-gold transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ivory/50 text-sm font-body">
              © 2026 Elegant Weddings India. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-ivory/20 text-ivory/70 hover:bg-gold hover:text-foreground hover:border-gold transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-ivory/20 text-ivory/70 hover:bg-gold hover:text-foreground hover:border-gold transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-ivory/20 text-ivory/70 hover:bg-gold hover:text-foreground hover:border-gold transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <p className="text-ivory/50 text-sm font-body">
              Designed by{" "}
              <a 
                href="https://krish-garg.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Krish Garg
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
