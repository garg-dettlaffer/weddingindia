import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Camera, Flower2, MapPin, Sparkles, Star, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Calendar,
    title: "Full Wedding Planning",
    description: "End-to-end planning from concept to execution, creating your perfect celebration.",
    link: "/services",
  },
  {
    icon: Flower2,
    title: "Decor & Design",
    description: "Stunning floral arrangements, mandap designs, and thematic decorations.",
    link: "/services",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing every precious moment with artistic vision and attention to detail.",
    link: "/services",
  },
  {
    icon: MapPin,
    title: "Destination Weddings",
    description: "Exotic locations from Udaipur palaces to Goa beaches, fully managed.",
    link: "/destination-weddings",
  },
];

const testimonials = [
  {
    name: "Priya & Raj Sharma",
    location: "Mumbai",
    text: "Elegant Weddings made our dream come true. Every detail was perfect, from the palace venue to the tiniest decoration.",
    rating: 5,
  },
  {
    name: "Ananya & Vikram Mehta",
    location: "Delhi",
    text: "The team's creativity and professionalism exceeded our expectations. Our guests are still talking about the wedding!",
    rating: 5,
  },
  {
    name: "Sneha & Arjun Patel",
    location: "Jaipur",
    text: "They handled everything with such grace. We could actually enjoy our own wedding without any stress.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')`,
            }}
          />
          <div className="hero-overlay" />
        </div>

        {/* Floating Petals Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="petal"
              initial={{ x: Math.random() * window.innerWidth, y: -50 }}
              animate={{
                y: window.innerHeight + 50,
                x: Math.random() * 200 - 100,
                rotate: 360,
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear",
              }}
              style={{ left: `${Math.random() * 100}%` }}
            >
              ❀
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-gold text-sm tracking-[0.4em] uppercase mb-6 font-body">
              Premium Wedding Planners in Jaipur
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-ivory mb-6 leading-tight"
          >
            Crafting Timeless
            <br />
            <span className="shimmer-gold">Weddings in India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-ivory/90 text-lg md:text-xl font-body max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Expert Planning for Your Dream Day — Rated 4.9/5 by 200+ Happy Couples
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/book" className="btn-hero flex items-center gap-2 group">
              <span>Start Planning</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/portfolio" className="btn-outline border-ivory text-ivory hover:bg-ivory hover:text-primary px-10 py-5">
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-ivory/50 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 floral-pattern opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} suffix="+" label="Events Planned" />
            <AnimatedCounter end={15} suffix="+" label="Years Experience" />
            <AnimatedCounter end={100} suffix="%" label="Client Satisfaction" />
            <AnimatedCounter end={50} suffix="+" label="Expert Team Members" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-ivory-dark floral-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Expertise"
            title="Comprehensive Wedding Services"
            description="From intimate ceremonies to grand celebrations, we offer end-to-end wedding planning services tailored to your vision and culture."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="card-sharp block p-8 h-full group bg-ivory hover:bg-card transition-colors"
                >
                  <div className="mb-6 inline-flex p-4 bg-primary/5 group-hover:bg-gold/10 transition-colors">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-heading text-gold uppercase tracking-wider">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Featured Celebrations"
            description="A glimpse into the magical moments we've created for our cherished couples."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069",
                title: "Royal Palace Wedding",
                location: "Udaipur",
              },
              {
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
                title: "Garden Romance",
                location: "Jaipur",
              },
              {
                image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070",
                title: "Beachside Bliss",
                location: "Goa",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative overflow-hidden aspect-[4/5]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-gold text-sm tracking-widest uppercase font-body">
                    {item.location}
                  </span>
                  <h3 className="font-heading text-2xl text-ivory font-semibold mt-1">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors pointer-events-none" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2">
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-champagne">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-dark text-sm tracking-[0.3em] uppercase mb-4 block font-body">
                Why Elegant Weddings
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Where Dreams Meet
                <br />
                <span className="text-primary">Impeccable Execution</span>
              </h2>
              <div className="w-24 h-0.5 bg-gold mb-8" />
              <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
                With over 15 years of experience in crafting unforgettable weddings across India, 
                we bring together tradition and innovation to create celebrations that reflect 
                your unique love story.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Sparkles, text: "Bespoke designs tailored to your vision" },
                  { icon: Users, text: "Dedicated team of 50+ expert planners" },
                  { icon: MapPin, text: "Pan-India presence with local expertise" },
                  { icon: Star, text: "Award-winning service excellence" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 bg-gold/10">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-body text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="btn-outline inline-block mt-10">
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069"
                  alt="Wedding decoration"
                  className="w-full aspect-[4/5] object-cover shadow-sharp-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 border-2 border-gold -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-foreground text-ivory relative overflow-hidden">
        <div className="absolute inset-0 floral-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <SectionHeading
            subtitle="Testimonials"
            title="Words From Our Couples"
            description="The joy we bring to our clients is the greatest reward."
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-ivory/5 border border-ivory/10 p-8 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-ivory/90 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-heading text-lg text-gold">{testimonial.name}</p>
                  <p className="text-sm text-ivory/60 font-body">{testimonial.location}</p>
                </div>
                <div className="absolute top-4 right-4 text-6xl text-gold/20 font-heading">
                  "
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/testimonials" className="btn-gold inline-flex items-center gap-2">
              Read All Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2071')`,
          }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-body">
              Begin Your Journey
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-ivory mb-6">
              Ready to Plan Your
              <br />
              Dream Wedding?
            </h2>
            <p className="font-body text-ivory/80 text-lg max-w-2xl mx-auto mb-10">
              Let's create something extraordinary together. Schedule a consultation 
              and let us bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book" className="btn-hero">
                Book Consultation
              </Link>
              <Link to="/contact" className="btn-outline border-ivory text-ivory hover:bg-ivory hover:text-primary px-10 py-5">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
