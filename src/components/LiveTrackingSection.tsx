import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, MapPin } from "lucide-react";

const LiveTrackingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/50" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Real-Time</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Live <span className="gradient-text">Ride Tracking</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto glass-card p-6 sm:p-8"
        >
          {/* Fake map */}
          <div className="relative w-full h-64 sm:h-80 rounded-xl bg-gradient-to-br from-primary/5 via-muted to-accent/5 border border-border overflow-hidden">
            {/* Grid lines */}
            {[...Array(8)].map((_, i) => (
              <div key={`h-${i}`} className="absolute left-0 right-0 border-t border-border/50" style={{ top: `${(i + 1) * 11}%` }} />
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`v-${i}`} className="absolute top-0 bottom-0 border-l border-border/50" style={{ left: `${(i + 1) * 11}%` }} />
            ))}

            {/* Route line */}
            <svg className="absolute inset-0 w-full h-full">
              <path
                d="M 50 200 Q 150 100 250 150 Q 350 200 500 80"
                fill="none"
                stroke="hsl(270, 60%, 50%)"
                strokeWidth="3"
                strokeDasharray="8 4"
                opacity="0.6"
              />
            </svg>

            {/* Start point */}
            <div className="absolute left-[8%] bottom-[20%]">
              <MapPin className="w-6 h-6 text-primary" />
            </div>

            {/* End point */}
            <div className="absolute right-[10%] top-[20%]">
              <MapPin className="w-6 h-6 text-accent" />
            </div>

            {/* Moving car */}
            <div className="absolute top-1/2 -translate-y-1/2 animate-car-move">
              <div className="gradient-bg p-2 rounded-full shadow-glow">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm">
            <div>
              <span className="text-muted-foreground">Driver: </span>
              <span className="font-semibold text-foreground">Anita K.</span>
            </div>
            <div className="gradient-bg text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold">
              En Route — 3 min away
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveTrackingSection;
