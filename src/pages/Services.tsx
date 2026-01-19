import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar, Camera, Flower2, Heart, MapPin, Music, Sparkles, Utensils, Video, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    id: "full-planning",
    icon: Calendar,
    title: "Full Wedding Planning",
    shortDesc: "End-to-end planning from concept to execution",
    description: "Our comprehensive wedding planning service takes care of every detail from start to finish. We handle venue selection, vendor coordination, timeline management, budget tracking, and day-of execution.",
    features: [
      "Initial consultation and vision planning",
      "Budget creation and management",
      "Venue research and booking",
      "Complete vendor coordination",
      "Design concept development",
      "Timeline and logistics planning",
      "Guest management",
      "Day-of coordination and execution",
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
  },
  {
    id: "coordination",
    icon: Sparkles,
    title: "Day-of Coordination",
    shortDesc: "Professional coordination for your special day",
    description: "Already have your vendors and venue? Our day-of coordination ensures everything runs smoothly on your wedding day, so you can relax and enjoy every moment.",
    features: [
      "Pre-wedding walkthrough",
      "Vendor confirmation and management",
      "Timeline creation and execution",
      "On-site coordination team",
      "Problem-solving and troubleshooting",
      "Guest direction and management",
      "Setup and breakdown supervision",
      "Emergency kit on standby",
    ],
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069",
  },
  {
    id: "decor",
    icon: Flower2,
    title: "Decor & Design",
    shortDesc: "Stunning decorations that bring your vision to life",
    description: "From traditional mandap designs to modern minimalist setups, our in-house design team creates breathtaking environments that reflect your personal style and cultural heritage.",
    features: [
      "Custom design concept creation",
      "Floral arrangements and installations",
      "Mandap and stage design",
      "Lighting design and execution",
      "Table settings and centerpieces",
      "Entrance and pathway decorations",
      "Themed decor packages",
      "Sustainable decor options",
    ],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
  },
  {
    id: "catering",
    icon: Utensils,
    title: "Catering Services",
    shortDesc: "Exquisite cuisine for every palate",
    description: "Partner with top culinary experts to create memorable dining experiences. From traditional Indian feasts to international cuisine, we curate menus that delight every guest.",
    features: [
      "Menu customization and tasting",
      "Multi-cuisine options",
      "Live cooking stations",
      "Specialized dietary accommodations",
      "Bar and beverage services",
      "Service staff coordination",
      "Premium presentation",
      "Post-event packaging",
    ],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
  },
  {
    id: "photography",
    icon: Camera,
    title: "Photography & Videography",
    shortDesc: "Capturing your precious moments forever",
    description: "Work with award-winning photographers and videographers who specialize in wedding storytelling. From candid moments to cinematic films, we preserve your memories beautifully.",
    features: [
      "Pre-wedding photoshoots",
      "Candid wedding coverage",
      "Traditional ceremony photography",
      "Cinematic wedding films",
      "Drone aerial coverage",
      "Same-day edits",
      "Premium albums and prints",
      "Online gallery access",
    ],
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070",
  },
  {
    id: "entertainment",
    icon: Music,
    title: "Entertainment",
    shortDesc: "Music and performances that elevate the celebration",
    description: "From live bands to celebrity performances, DJs to traditional musicians, we curate entertainment that keeps your guests engaged and the energy high throughout your celebration.",
    features: [
      "Live band and orchestra",
      "Professional DJ services",
      "Celebrity artist bookings",
      "Traditional performers",
      "Dance choreography",
      "Sound and light production",
      "Interactive entertainment",
      "Kids' entertainment zone",
    ],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070')`,
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
              What We Offer
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">
              Our Wedding
              <br />
              Services
            </h1>
            <div className="w-24 h-0.5 bg-gold mb-6" />
            <p className="font-body text-ivory/80 text-xl leading-relaxed">
              Comprehensive wedding planning services tailored to your unique vision. 
              From intimate ceremonies to grand celebrations, we handle every detail with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Expertise"
            title="Complete Wedding Solutions"
            description="Every aspect of your wedding, expertly planned and flawlessly executed."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="card-sharp bg-ivory overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-ivory font-heading text-lg">View Details</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="inline-flex p-3 bg-gold/10 mb-4">
                      <service.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-ivory max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-sharp-lg"
          >
            <div className="relative h-64 md:h-80">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <selectedService.icon className="w-10 h-10 text-gold mb-2" />
                <h2 className="font-heading text-3xl md:text-4xl text-ivory font-bold">
                  {selectedService.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory text-2xl transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-8 md:p-10">
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                {selectedService.description}
              </p>

              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                What's Included
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Request Quote
                </Link>
                <Link to="/book" className="btn-outline text-center">
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Process Preview */}
      <section className="py-24 bg-foreground text-ivory">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="How We Work"
            title="Our Planning Process"
            description="A streamlined approach to bringing your wedding vision to life."
            light
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We meet to understand your vision, preferences, and budget." },
              { step: "02", title: "Planning", desc: "Our team creates a detailed plan and curates the perfect vendors." },
              { step: "03", title: "Design", desc: "We develop custom design concepts and bring your vision to life." },
              { step: "04", title: "Execution", desc: "On your big day, we ensure every detail is perfect." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="text-6xl font-heading font-bold text-gold/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl text-ivory mb-2">{item.title}</h3>
                <p className="font-body text-ivory/70">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gold/20 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/planning-process" className="btn-gold">
              Learn More About Our Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-semibold mb-6 text-foreground">
              Ready to Create Your Dream Wedding?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and how we can bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-outline">
                View Packages
              </Link>
              <Link to="/book" className="btn-primary">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
