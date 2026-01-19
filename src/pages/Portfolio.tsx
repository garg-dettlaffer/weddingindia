import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const categories = ["All", "Traditional", "Modern", "Destination", "Intimate", "Royal"];

const portfolioItems = [
  { id: 1, category: "Traditional", title: "Royal Rajasthani Wedding", location: "Jaipur", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070" },
  { id: 2, category: "Modern", title: "Contemporary Chic", location: "Mumbai", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069" },
  { id: 3, category: "Destination", title: "Beach Paradise", location: "Goa", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070" },
  { id: 4, category: "Royal", title: "Palace Grandeur", location: "Udaipur", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070" },
  { id: 5, category: "Intimate", title: "Garden Romance", location: "Jaipur", image: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069" },
  { id: 6, category: "Traditional", title: "South Indian Splendor", location: "Chennai", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2071" },
  { id: 7, category: "Modern", title: "Urban Elegance", location: "Delhi", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070" },
  { id: 8, category: "Destination", title: "Mountain Escape", location: "Shimla", image: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=2070" },
  { id: 9, category: "Royal", title: "Majestic Celebration", location: "Jodhpur", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070" },
  { id: 10, category: "Intimate", title: "Sunset Vows", location: "Kerala", image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070" },
  { id: 11, category: "Traditional", title: "Bengali Beauty", location: "Kolkata", image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070" },
  { id: 12, category: "Modern", title: "Minimalist Magic", location: "Bangalore", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  const selectedItem = portfolioItems.find(item => item.id === selectedImage);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069')`,
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
              Our Work
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">
              Wedding
              <br />
              Portfolio
            </h1>
            <div className="w-24 h-0.5 bg-gold mb-6" />
            <p className="font-body text-ivory/80 text-xl leading-relaxed">
              A curated collection of our finest wedding celebrations. 
              Each one tells a unique love story, beautifully executed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-heading text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-sharp"
                    : "bg-ivory border border-border hover:border-gold text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="masonry-item group cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ aspectRatio: index % 3 === 0 ? "3/4" : index % 2 === 0 ? "4/3" : "1/1" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-gold text-sm tracking-widest uppercase font-body">
                        {item.location}
                      </span>
                      <h3 className="font-heading text-xl text-ivory font-semibold mt-1">
                        {item.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-ivory/70 hover:text-ivory transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-ivory/70 hover:text-ivory transition-colors border border-ivory/20 hover:border-gold"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-ivory/70 hover:text-ivory transition-colors border border-ivory/20 hover:border-gold"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] mx-4"
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-gold text-sm tracking-widest uppercase font-body">
                  {selectedItem.category} · {selectedItem.location}
                </span>
                <h3 className="font-heading text-2xl text-ivory font-semibold mt-1">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
