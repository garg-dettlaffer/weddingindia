import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What's included in your wedding packages?", a: "Our packages range from day-of coordination to full planning services including venue selection, vendor management, decor design, timeline creation, and on-site execution. Each package is customizable to your needs." },
  { q: "How far in advance should we book?", a: "We recommend booking 12-18 months in advance for full planning services, especially for peak wedding season (October-February). Day-of coordination can be booked 3-6 months ahead." },
  { q: "Do you handle destination weddings?", a: "Yes! We specialize in destination weddings across India including Udaipur, Goa, Kerala, and Jaipur. We handle all logistics including guest accommodations and travel coordination." },
  { q: "Can you work within our budget?", a: "Absolutely. We work with various budgets and help you prioritize spending to get the most impact. We're transparent about costs and help you make informed decisions." },
  { q: "What happens if vendors cancel?", a: "We maintain relationships with backup vendors in every category. If any vendor cancels, we quickly source a replacement of equal or better quality at no extra cost to you." },
  { q: "Do you provide decor and florals?", a: "Yes, we have an in-house design team that creates custom decor concepts. We also work with top florists and decor vendors to bring your vision to life." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="relative pt-32 pb-24 bg-foreground">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-body">Questions</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">FAQ</h1>
            <div className="w-24 h-0.5 bg-gold" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-sharp bg-ivory">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full p-6 flex items-center justify-between text-left">
                  <span className="font-heading text-lg font-semibold text-foreground pr-4">{faq.q}</span>
                  {openIndex === index ? <Minus className="w-5 h-5 text-gold flex-shrink-0" /> : <Plus className="w-5 h-5 text-gold flex-shrink-0" />}
                </button>
                <motion.div initial={false} animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }} className="overflow-hidden">
                  <div className="px-6 pb-6 font-body text-muted-foreground">{faq.a}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
