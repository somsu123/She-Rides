import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Percent, Building2, CreditCard } from "lucide-react";

const models = [
  { icon: Percent, title: "Commission Per Ride", desc: "Sustainable revenue through a small commission on every completed ride, keeping fares affordable.", pct: "15%" },
  { icon: Building2, title: "Corporate Tie-Ups", desc: "Safe transport partnerships with corporates for women employees — late-night shifts and travel.", pct: "30%" },
  { icon: CreditCard, title: "Safety Membership", desc: "Premium subscription with priority booking, enhanced tracking, and family safety dashboard.", pct: "₹299/mo" },
];

const RevenueSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Business Model</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Revenue <span className="gradient-text">Streams</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 relative overflow-hidden group hover:shadow-elevated transition-shadow"
            >
              <div className="absolute top-4 right-4 font-display text-3xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {m.pct}
              </div>
              <div className="gradient-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <m.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
