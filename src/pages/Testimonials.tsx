import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya & Raj Sharma",
    location: "Mumbai",
    date: "December 2025",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    rating: 5,
    text: "Elegant Weddings made our dream come true. Every detail was perfect, from the palace venue in Udaipur to the tiniest flower arrangement. Meera and her team were with us every step of the way, handling stress so we could enjoy our special day. Our guests are still talking about the magical experience!",
    event: "Palace Wedding",
  },
  {
    id: 2,
    name: "Ananya & Vikram Mehta",
    location: "Delhi",
    date: "November 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    rating: 5,
    text: "The team's creativity and professionalism exceeded our expectations. They transformed our vision of a modern yet traditional celebration into reality. The coordination was flawless, and the decor was absolutely breathtaking. Highly recommend to anyone looking for a stress-free wedding experience.",
    event: "Grand Celebration",
  },
  {
    id: 3,
    name: "Sneha & Arjun Patel",
    location: "Jaipur",
    date: "October 2025",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    rating: 5,
    text: "They handled everything with such grace. From the initial planning meetings to the last guest leaving, every moment was orchestrated beautifully. We could actually enjoy our own wedding without any stress. The team felt like family by the end of it all.",
    event: "Traditional Wedding",
  },
  {
    id: 4,
    name: "Kavya & Rohan Khanna",
    location: "Bangalore",
    date: "September 2025",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976",
    rating: 5,
    text: "Our destination wedding in Goa was nothing short of magical. The Elegant Weddings team handled every logistic perfectly - from guest accommodations to beach permits. The sunset ceremony was exactly what we dreamed of, and the reception was a celebration our guests will never forget.",
    event: "Destination Wedding",
  },
  {
    id: 5,
    name: "Isha & Aditya Reddy",
    location: "Hyderabad",
    date: "August 2025",
    image: "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?q=80&w=1997",
    rating: 5,
    text: "Working with Elegant Weddings was the best decision we made. Their attention to detail is unmatched. Every vendor they recommended was top-notch, and the way they managed our multi-day celebration across different venues was impressive. True professionals!",
    event: "Multi-Day Celebration",
  },
  {
    id: 6,
    name: "Riya & Kabir Singh",
    location: "Chandigarh",
    date: "July 2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964",
    rating: 5,
    text: "From our first meeting, we knew we were in good hands. The team understood our vision perfectly and executed it flawlessly. The decor was stunning, the food was exquisite, and every moment was captured beautifully. We couldn't have asked for a better wedding experience.",
    event: "Garden Wedding",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2071')`,
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
              Happy Couples
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">
              Testimonials
            </h1>
            <div className="w-24 h-0.5 bg-gold mb-6" />
            <p className="font-body text-ivory/80 text-xl leading-relaxed">
              Hear from the couples who trusted us with their most special day. 
              Their words inspire everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-24 bg-foreground text-ivory">
        <div className="container mx-auto px-4">
          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-16 h-16 text-gold/30 mx-auto mb-8" />
              <p className="font-body text-xl md:text-2xl text-ivory/90 leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <h3 className="font-heading text-2xl text-gold mb-1">
                {testimonials[activeIndex].name}
              </h3>
              <p className="font-body text-ivory/60">
                {testimonials[activeIndex].location} · {testimonials[activeIndex].event}
              </p>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-ivory/30 hover:border-gold flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setAutoPlay(false); setActiveIndex(index); }}
                    className={`w-3 h-3 transition-colors ${
                      index === activeIndex ? "bg-gold" : "bg-ivory/30 hover:bg-ivory/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-ivory/30 hover:border-gold flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="All Reviews"
            title="What Our Couples Say"
            description="Every testimonial represents a love story we were honored to be part of."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-sharp bg-ivory p-8 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-4xl text-gold/20 font-heading">
                  "
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
