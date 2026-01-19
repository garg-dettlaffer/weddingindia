import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ChevronLeft, ChevronRight, Check } from "lucide-react";

const BookNow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", package: "", guests: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <section className="relative pt-32 pb-24 bg-foreground">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-body">Start Planning</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">Book Now</h1>
            <div className="w-24 h-0.5 bg-gold" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 flex items-center justify-center font-heading ${step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && <div className={`w-20 h-0.5 ${step > s ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <div className="card-gold-border bg-ivory p-8">
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="font-heading text-2xl font-semibold mb-6">Your Details</h2>
                <input type="text" name="name" placeholder="Your Names" value={formData.name} onChange={handleChange} className="input-elegant" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-elegant" />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="input-elegant" />
                <button onClick={() => setStep(2)} className="btn-primary w-full">Continue</button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="font-heading text-2xl font-semibold mb-6">Wedding Details</h2>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="input-elegant" />
                <select name="package" value={formData.package} onChange={handleChange} className="input-elegant">
                  <option value="">Select Package</option>
                  <option value="essential">Essential - ₹5L+</option>
                  <option value="premium">Premium - ₹15L+</option>
                  <option value="luxury">Luxury - ₹35L+</option>
                  <option value="royal">Royal - Custom</option>
                </select>
                <select name="guests" value={formData.guests} onChange={handleChange} className="input-elegant">
                  <option value="">Guest Count</option>
                  <option value="100">Up to 100</option>
                  <option value="300">100-300</option>
                  <option value="500">300-500</option>
                  <option value="500+">500+</option>
                </select>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="btn-outline flex-1">Back</button>
                  <button onClick={() => setStep(3)} className="btn-primary flex-1">Continue</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-center">
                <div className="w-20 h-20 bg-gold/10 mx-auto flex items-center justify-center">
                  <Check className="w-10 h-10 text-gold" />
                </div>
                <h2 className="font-heading text-2xl font-semibold">Thank You!</h2>
                <p className="font-body text-muted-foreground">We've received your booking request. Our team will contact you within 24 hours to schedule your consultation.</p>
                <Link to="/" className="btn-primary inline-block">Back to Home</Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookNow;
