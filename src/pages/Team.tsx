import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Linkedin, Mail, Instagram } from "lucide-react";

const team = [
  { name: "Meera Rajawat", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961", bio: "15+ years crafting dream weddings across India." },
  { name: "Arjun Kapoor", role: "Head of Operations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974", bio: "Logistics expert ensuring flawless execution." },
  { name: "Priya Sharma", role: "Lead Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974", bio: "Creating stunning visual experiences." },
  { name: "Vikram Singh", role: "Vendor Relations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070", bio: "Curating the best vendor partnerships." },
  { name: "Ananya Reddy", role: "Client Experience", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070", bio: "Ensuring every couple feels special." },
  { name: "Rahul Mehta", role: "Photography Director", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974", bio: "Capturing moments that last forever." },
];

const Team = () => (
  <>
    <section className="relative pt-32 pb-24 bg-foreground">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-body">The People</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-ivory mb-6">Our Team</h1>
          <div className="w-24 h-0.5 bg-gold" />
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
              <div className="card-sharp bg-ivory overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                    <a href="#" className="w-10 h-10 bg-ivory/20 hover:bg-gold flex items-center justify-center transition-colors"><Instagram className="w-5 h-5 text-ivory" /></a>
                    <a href="#" className="w-10 h-10 bg-ivory/20 hover:bg-gold flex items-center justify-center transition-colors"><Mail className="w-5 h-5 text-ivory" /></a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-gold text-sm font-body mb-2">{member.role}</p>
                  <p className="text-muted-foreground font-body text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Team;
