import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Phone, Share2, Shield, X } from "lucide-react";

const SafetySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sosActive, setSosActive] = useState(false);

  const features = [
    {
      icon: AlertTriangle,
      title: "SOS Button",
      desc: "Instant emergency alert to contacts and authorities.",
      action: () => setSosActive(true),
      btnLabel: "Test SOS",
    },
    {
      icon: Phone,
      title: "Emergency Alert",
      desc: "One-tap call to emergency services with live location.",
      action: () => setSosActive(true),
      btnLabel: "Demo Alert",
    },
    {
      icon: Share2,
      title: "Share Ride",
      desc: "Share real-time ride details with trusted contacts.",
      action: () => setSosActive(true),
      btnLabel: "Try Sharing",
    },
  ];

  return (
    <section id="safety" className="section-padding hero-bg relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Your Safety</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-primary-foreground">
            Safety <span className="gradient-text">Features</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Multiple layers of protection for every journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-dark p-8 text-center"
            >
              <div className="gradient-bg w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">{f.title}</h3>
              <p className="text-primary-foreground/60 mb-6">{f.desc}</p>
              <button
                onClick={f.action}
                className="border border-primary-foreground/20 text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                {f.btnLabel}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SOS Modal */}
      <AnimatePresence>
        {sosActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setSosActive(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-sm w-full text-center relative"
            >
              <button onClick={() => setSosActive(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Shield className="w-10 h-10 text-destructive" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">SOS Activated!</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Emergency contacts notified. Live location being shared. This is a demo — no real alert was sent.
              </p>
              <button
                onClick={() => setSosActive(false)}
                className="gradient-bg text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm"
              >
                Dismiss Demo
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SafetySection;
