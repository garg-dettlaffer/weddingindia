import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Star, Users, Camera, Utensils, Wifi, Car } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const venues = [
  {
    id: "palace",
    name: "Taj Lake Palace",
    location: "Udaipur",
    type: "Palace",
    capacity: "500+ Guests",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
    rating: 4.9,
    features: ["Lake View", "Heritage Property", "Luxury Suites", "Multiple Venues"],
    description: "A stunning white marble palace floating on Lake Pichola, offering the most romantic wedding backdrop in India.",
  },
  {
    id: "beach",
    name: "Taj Exotica Resort",
    location: "Goa",
    type: "Beach Resort",
    capacity: "300+ Guests",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
    rating: 4.8,
    features: ["Beachfront", "Infinity Pool", "Spa", "Garden Venues"],
    description: "Luxurious beachfront resort with pristine sands and tropical gardens for dream destination weddings.",
  },
  {
    id: "garden",
    name: "Rambagh Palace",
    location: "Jaipur",
    type: "Palace",
    capacity: "400+ Guests",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
    rating: 4.9,
    features: ["Royal Gardens", "Heritage Suite", "Multiple Lawns", "Royal Dining"],
    description: "The former residence of the Maharaja of Jaipur, offering regal grandeur for unforgettable celebrations.",
  },
  {
    id: "mountain",
    name: "Wildflower Hall",
    location: "Shimla",
    type: "Mountain Resort",
    capacity: "200+ Guests",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074",
    rating: 4.7,
    features: ["Mountain Views", "Cedar Forest", "Spa & Wellness", "Intimate Settings"],
    description: "Nestled in the Himalayas, this former residence of Lord Kitchener offers breathtaking mountain weddings.",
  },
  {
    id: "city",
    name: "The Oberoi",
    location: "Mumbai",
    type: "Luxury Hotel",
    capacity: "350+ Guests",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070",
    rating: 4.8,
    features: ["City Views", "Ballroom", "Rooftop Venue", "Modern Luxury"],
    description: "Contemporary luxury meets impeccable service in the heart of India's most vibrant city.",
  },
  {
    id: "heritage",
    name: "Umaid Bhawan Palace",
    location: "Jodhpur",
    type: "Palace",
    capacity: "450+ Guests",
    image: "https://images.unsplash.com/photo-1569488685587-6ebecd65de9c?q=80&w=2070",
    rating: 5.0,
    features: ["Art Deco Design", "Private Palace", "Museum", "Desert Views"],
    description: "One of the world's largest private residences, offering unparalleled royal wedding experiences.",
  },
];

const Venues = () => {
  const [selectedVenue, setSelectedVenue] = useState<typeof venues[0] | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070')`,
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
              Venue Partners
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">
              Exquisite
              <br />
              Wedding Venues
            </h1>
            <div className="w-24 h-0.5 bg-gold mb-6" />
            <p className="font-body text-ivory/80 text-xl leading-relaxed">
              From majestic palaces to serene beaches, discover India's most stunning 
              wedding venues curated for unforgettable celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-ivory-dark">
        <div className="container mx-auto px-4">
          <div className="aspect-[21/9] bg-muted overflow-hidden shadow-sharp">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9477!2d75.8027!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDgnMTAuMCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Venue locations"
            />
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Curated Venues"
            title="Where Dreams Come True"
            description="Each venue is personally vetted to ensure it meets our standards of excellence."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                id={venue.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVenue(venue)}
              >
                <div className="card-sharp bg-ivory overflow-hidden h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-ivory/90 px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="font-body text-sm font-bold">{venue.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-body uppercase tracking-wider">
                        {venue.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="font-body text-sm">{venue.location}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {venue.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="font-body text-sm">{venue.capacity}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Detail Modal */}
      {selectedVenue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVenue(null)}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-ivory max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-sharp-lg"
          >
            <div className="relative h-80">
              <img
                src={selectedVenue.image}
                alt={selectedVenue.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <button
                onClick={() => setSelectedVenue(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory text-2xl transition-colors"
              >
                ×
              </button>
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 text-gold mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-body text-sm">{selectedVenue.location}</span>
                </div>
                <h2 className="font-heading text-3xl text-ivory font-bold">{selectedVenue.name}</h2>
              </div>
            </div>

            <div className="p-8">
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                {selectedVenue.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {selectedVenue.features.map((feature) => (
                  <div key={feature} className="bg-muted p-3 text-center">
                    <span className="font-body text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center flex-1">
                  Inquire About This Venue
                </Link>
                <button 
                  onClick={() => setSelectedVenue(null)}
                  className="btn-outline text-center flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA */}
      <section className="py-20 bg-champagne">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-semibold mb-6 text-foreground">
              Can't Find Your Perfect Venue?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let us help you discover hidden gems and exclusive venues that match your vision.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Contact Our Venue Specialists
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Venues;
