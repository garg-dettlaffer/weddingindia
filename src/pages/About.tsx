import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Heart, Star, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const timeline = [
  { year: "2010", title: "The Beginning", description: "Founded in Jaipur with a vision to redefine Indian weddings." },
  { year: "2013", title: "First 100 Weddings", description: "Milestone celebration marking our growing reputation for excellence." },
  { year: "2016", title: "Destination Expansion", description: "Extended services across Rajasthan, Goa, and Kerala." },
  { year: "2019", title: "Industry Recognition", description: "Won 'Best Wedding Planner' at India Wedding Awards." },
  { year: "2022", title: "Pan-India Presence", description: "Established operations in 15+ major cities." },
  { year: "2025", title: "500+ Celebrations", description: "Continuing to craft unforgettable wedding experiences." },
];

const values = [
  { icon: Heart, title: "Passion", description: "We pour our hearts into every celebration, treating each wedding as our own." },
  { icon: Star, title: "Excellence", description: "Uncompromising standards in every detail, from venue to final dance." },
  { icon: Users, title: "Personalization", description: "Your story is unique; your wedding should be too." },
  { icon: Target, title: "Precision", description: "Meticulous planning ensures flawless execution." },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070')`,
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
              Our Story
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">
              About Elegant
              <br />
              Weddings India
            </h1>
            <div className="w-24 h-0.5 bg-gold mb-6" />
            <p className="font-body text-ivory/80 text-xl leading-relaxed">
              For over 15 years, we've been crafting extraordinary wedding experiences 
              that blend timeless elegance with modern sophistication, creating celebrations 
              that resonate for generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <SectionHeading
                subtitle="The Journey"
                title="Where It All Began"
                align="left"
              />
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                In 2010, founder Meera Rajawat turned her lifelong passion for celebrations 
                into Elegant Weddings India. What started as a small team in Jaipur has 
                blossomed into one of India's most trusted wedding planning firms.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                Our philosophy is simple: every love story deserves a celebration as unique 
                as the couple themselves. We don't believe in cookie-cutter weddings. Instead, 
                we dive deep into understanding our clients' personalities, cultural backgrounds, 
                and dreams to create truly bespoke experiences.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                From royal palace weddings in Udaipur to intimate beach ceremonies in Goa, 
                we've orchestrated over 500 celebrations, each one a masterpiece of planning, 
                creativity, and flawless execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=2070"
                alt="Our founder"
                className="w-full aspect-square object-cover shadow-sharp-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 shadow-sharp">
                <Award className="w-12 h-12 text-gold mb-4" />
                <p className="font-heading text-ivory text-xl">Award Winning</p>
                <p className="text-ivory/70 font-body text-sm">Wedding Planners 2024</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-ivory-dark floral-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="What Drives Us"
            title="Our Core Values"
            description="The principles that guide every decision we make and every celebration we create."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gold-border bg-ivory p-8 text-center"
              >
                <div className="inline-flex p-4 bg-gold/10 mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-foreground text-ivory">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones"
            light
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 transform md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-8 md:pl-0`}>
                  <div className="bg-ivory/5 border border-ivory/10 p-6">
                    <span className="text-gold font-heading text-2xl font-bold">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl text-ivory mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-ivory/70">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gold transform md:-translate-x-1/2 z-10" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-sharp bg-ivory p-10"
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-body">
                Our Mission
              </span>
              <h3 className="font-heading text-3xl font-semibold mb-4 text-foreground">
                Creating Unforgettable Moments
              </h3>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                To transform wedding dreams into reality through meticulous planning, 
                creative excellence, and unwavering dedication to our clients' happiness. 
                We strive to make every celebration a reflection of the couple's unique 
                love story.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-gold-border bg-ivory p-10"
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-body">
                Our Vision
              </span>
              <h3 className="font-heading text-3xl font-semibold mb-4 text-foreground">
                Redefining Indian Weddings
              </h3>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                To be India's most trusted and innovative wedding planning company, 
                setting new standards in the industry while honoring rich cultural 
                traditions. We envision a future where every couple has access to 
                world-class wedding experiences.
              </p>
            </motion.div>
          </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can make your wedding dreams come true.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
