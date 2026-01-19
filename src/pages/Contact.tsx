import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    budget: "",
    guestCount: "",
    venue: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? "hsl(43, 69%, 53%)" : "hsl(0, 100%, 27%)",
              }}
              initial={{ y: -20, rotate: 0, opacity: 1 }}
              animate={{
                y: window.innerHeight + 20,
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                opacity: 0,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 to-foreground/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-body">
              Get in Touch
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">
              Contact Us
            </h1>
            <div className="w-24 h-0.5 bg-gold mb-6" />
            <p className="font-body text-ivory/80 text-xl leading-relaxed">
              Ready to start planning your dream wedding? Reach out to us and let's 
              create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <SectionHeading
                  subtitle="Reach Out"
                  title="We'd Love to Hear From You"
                  align="left"
                />
                <p className="font-body text-muted-foreground text-lg">
                  Whether you're just starting to plan or ready to book, our team is here 
                  to answer your questions and help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold mb-1">Visit Us</h4>
                    <p className="font-body text-muted-foreground">
                      C-21, Royal Plaza, MI Road<br />
                      Jaipur, Rajasthan 302001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold mb-1">Call Us</h4>
                    <a href="tel:+919876543210" className="font-body text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold mb-1">Email Us</h4>
                    <a href="mailto:info@elegantweddings.in" className="font-body text-muted-foreground hover:text-primary transition-colors">
                      info@elegantweddings.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold mb-1">Office Hours</h4>
                    <p className="font-body text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video bg-muted shadow-sharp overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9477!2d75.8027!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDgnMTAuMCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-gold-border bg-ivory p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gold/10 mx-auto mb-6 flex items-center justify-center">
                      <Check className="w-10 h-10 text-gold" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">
                      Thank You!
                    </h3>
                    <p className="font-body text-muted-foreground mb-6">
                      We've received your inquiry and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-body text-sm text-foreground mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="input-elegant"
                            placeholder="John & Jane Doe"
                          />
                        </div>
                        <div>
                          <label className="block font-body text-sm text-foreground mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="input-elegant"
                            placeholder="you@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-body text-sm text-foreground mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="input-elegant"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block font-body text-sm text-foreground mb-2">
                            Wedding Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formState.date}
                            onChange={handleChange}
                            className="input-elegant"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-body text-sm text-foreground mb-2">
                            Estimated Budget
                          </label>
                          <select
                            name="budget"
                            value={formState.budget}
                            onChange={handleChange}
                            className="input-elegant"
                          >
                            <option value="">Select Budget Range</option>
                            <option value="5-10">₹5 - 10 Lakhs</option>
                            <option value="10-25">₹10 - 25 Lakhs</option>
                            <option value="25-50">₹25 - 50 Lakhs</option>
                            <option value="50-100">₹50 Lakhs - 1 Crore</option>
                            <option value="100+">₹1 Crore+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-body text-sm text-foreground mb-2">
                            Guest Count
                          </label>
                          <select
                            name="guestCount"
                            value={formState.guestCount}
                            onChange={handleChange}
                            className="input-elegant"
                          >
                            <option value="">Select Guest Count</option>
                            <option value="50-100">50 - 100 Guests</option>
                            <option value="100-250">100 - 250 Guests</option>
                            <option value="250-500">250 - 500 Guests</option>
                            <option value="500+">500+ Guests</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-body text-sm text-foreground mb-2">
                          Tell Us About Your Dream Wedding *
                        </label>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="input-elegant resize-none"
                          placeholder="Share your vision, preferred style, any specific requirements..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full">
                        Send Inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
