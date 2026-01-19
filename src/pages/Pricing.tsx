import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Essential",
    price: "₹5 Lakhs",
    subtitle: "Starting from",
    description: "Perfect for intimate ceremonies with essential planning support.",
    features: [
      "Up to 100 guests",
      "Day-of coordination",
      "Basic decor setup",
      "Vendor recommendations",
      "Timeline management",
      "2 planning consultations",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹15 Lakhs",
    subtitle: "Starting from",
    description: "Comprehensive planning for memorable mid-sized celebrations.",
    features: [
      "Up to 300 guests",
      "Full wedding planning",
      "Custom decor design",
      "Vendor coordination",
      "Budget management",
      "Unlimited consultations",
      "Photography package",
      "Guest management",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "₹35 Lakhs",
    subtitle: "Starting from",
    description: "Grand celebrations with premium services and exclusive venues.",
    features: [
      "Up to 500 guests",
      "Dedicated planning team",
      "Bespoke decor & florals",
      "Celebrity entertainment",
      "Premium catering",
      "Multi-day event planning",
      "Destination coordination",
      "Luxury accommodation",
      "Cinematic videography",
    ],
    popular: false,
  },
  {
    name: "Royal",
    price: "Custom",
    subtitle: "Price on request",
    description: "The ultimate wedding experience with no limits.",
    features: [
      "Unlimited guests",
      "White-glove service",
      "International designers",
      "Exclusive palace venues",
      "Private jet coordination",
      "Personal concierge",
      "Global vendor sourcing",
      "Multi-week celebrations",
      "Everything customized",
      "24/7 dedicated support",
    ],
    popular: false,
  },
];

const comparisons = [
  { feature: "Planning Consultations", essential: "2", premium: "Unlimited", luxury: "Unlimited", royal: "Unlimited" },
  { feature: "Guest Capacity", essential: "100", premium: "300", luxury: "500", royal: "Unlimited" },
  { feature: "Venue Selection", essential: "1 venue", premium: "3 venues", luxury: "5 venues", royal: "Unlimited" },
  { feature: "Decor Design", essential: "Basic", premium: "Custom", luxury: "Bespoke", royal: "Couture" },
  { feature: "Photography", essential: "Basic", premium: "Premium", luxury: "Cinematic", royal: "International" },
  { feature: "Day-of Coordination", essential: "✓", premium: "✓", luxury: "✓", royal: "✓" },
  { feature: "Multi-day Events", essential: "—", premium: "2 days", luxury: "5 days", royal: "Unlimited" },
  { feature: "Destination Support", essential: "—", premium: "—", luxury: "✓", royal: "✓" },
];

const Pricing = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')`,
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
              Investment
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">
              Wedding
              <br />
              Packages
            </h1>
            <div className="w-24 h-0.5 bg-gold mb-6" />
            <p className="font-body text-ivory/80 text-xl leading-relaxed">
              Tailored packages to match your vision and budget. Every wedding is unique, 
              and so is our approach to pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Choose Your Package"
            title="Wedding Planning Packages"
            description="Select the package that best fits your celebration, or contact us for a custom quote."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${pkg.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gold text-gold-foreground px-4 py-1 text-sm font-heading uppercase tracking-wider flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`h-full ${pkg.popular ? "card-gold-border bg-ivory" : "card-sharp bg-ivory"}`}>
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-sm text-muted-foreground font-body">{pkg.subtitle}</span>
                      <div className="font-heading text-4xl font-bold text-primary">
                        {pkg.price}
                      </div>
                    </div>
                    <p className="font-body text-muted-foreground text-sm mb-6">
                      {pkg.description}
                    </p>
                    <div className="h-px bg-border mb-6" />
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="font-body text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact" 
                      className={`block text-center ${pkg.popular ? "btn-primary" : "btn-outline"} w-full`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-ivory-dark">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Compare"
            title="Package Comparison"
            description="A detailed look at what's included in each package."
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[800px] bg-ivory shadow-sharp">
              <thead>
                <tr className="border-b-2 border-gold">
                  <th className="p-6 text-left font-heading text-lg text-foreground">Feature</th>
                  <th className="p-6 text-center font-heading text-lg text-foreground">Essential</th>
                  <th className="p-6 text-center font-heading text-lg text-foreground bg-gold/5">Premium</th>
                  <th className="p-6 text-center font-heading text-lg text-foreground">Luxury</th>
                  <th className="p-6 text-center font-heading text-lg text-foreground">Royal</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={row.feature} className={index !== comparisons.length - 1 ? "border-b border-border" : ""}>
                    <td className="p-6 font-body text-foreground">{row.feature}</td>
                    <td className="p-6 text-center font-body text-muted-foreground">{row.essential}</td>
                    <td className="p-6 text-center font-body text-foreground bg-gold/5">{row.premium}</td>
                    <td className="p-6 text-center font-body text-muted-foreground">{row.luxury}</td>
                    <td className="p-6 text-center font-body text-muted-foreground">{row.royal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-ivory">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-semibold mb-6">
              Need a Custom Package?
            </h2>
            <p className="font-body text-ivory/80 text-lg mb-8 max-w-2xl mx-auto">
              Every wedding is unique. Let us create a tailored package that perfectly 
              matches your vision and requirements.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              Request Custom Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
