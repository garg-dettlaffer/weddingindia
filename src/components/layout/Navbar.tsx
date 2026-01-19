import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Heart, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { 
    name: "Services", 
    path: "/services",
    submenu: [
      { name: "Full Planning", path: "/services#full-planning" },
      { name: "Day-of Coordination", path: "/services#coordination" },
      { name: "Decor & Design", path: "/services#decor" },
    ]
  },
  { name: "Portfolio", path: "/portfolio" },
  { 
    name: "Venues", 
    path: "/venues",
    submenu: [
      { name: "Palace Venues", path: "/venues#palace" },
      { name: "Beach Venues", path: "/venues#beach" },
      { name: "Garden Venues", path: "/venues#garden" },
    ]
  },
  { name: "Vendors", path: "/vendors" },
  { name: "Planning", path: "/planning-process" },
  { name: "Gallery", path: "/gallery" },
  { 
    name: "More", 
    path: "#",
    submenu: [
      { name: "Blog", path: "/blog" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "FAQ", path: "/faq" },
      { name: "Pricing", path: "/pricing" },
      { name: "Our Team", path: "/team" },
      { name: "Real Weddings", path: "/real-weddings" },
      { name: "Inspiration", path: "/inspiration" },
      { name: "Destination Weddings", path: "/destination-weddings" },
      { name: "Corporate Events", path: "/corporate-events" },
      { name: "Videos", path: "/gallery-videos" },
    ]
  },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-ivory/95 backdrop-blur-sm shadow-sharp border-b border-gold/20" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Heart className="w-8 h-8 text-primary fill-primary" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-heading text-xl font-bold tracking-wide ${isScrolled ? 'text-primary' : 'text-ivory'}`}>
                  Elegant Weddings
                </span>
                <span className={`text-xs tracking-[0.3em] uppercase ${isScrolled ? 'text-gold-dark' : 'text-gold'}`}>
                  India
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={link.path}
                    className={`nav-link flex items-center gap-1 ${
                      isScrolled ? "text-foreground" : "text-ivory hover:text-gold"
                    } ${location.pathname === link.path ? "text-gold" : ""}`}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className="w-3 h-3" />}
                  </Link>

                  {/* Submenu */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-ivory border-2 border-gold shadow-sharp-lg z-50"
                      >
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className="block px-4 py-3 text-sm font-body text-foreground hover:bg-gold/10 hover:text-primary border-b border-border last:border-b-0 transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/book" className="btn-gold text-xs py-3 px-6">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? "text-primary" : "text-ivory"}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-80 bg-ivory z-50 shadow-sharp-lg border-l-2 border-gold overflow-y-auto"
          >
            <div className="p-6 pt-24">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      className="block py-3 px-4 font-heading text-foreground hover:bg-gold/10 hover:text-primary border-b border-border transition-colors"
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="pl-6 bg-muted/50">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className="block py-2 px-4 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <Link to="/book" className="btn-primary w-full text-center block">
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/placeholder?text=Hi,%20let's%20plan%20my%20wedding"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 shadow-sharp-lg group"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-ivory px-4 py-2 text-sm font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Inquire Now
        </span>
      </motion.a>
    </>
  );
};
