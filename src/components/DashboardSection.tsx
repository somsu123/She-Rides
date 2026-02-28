import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, Users, MapPin, TrendingUp } from "lucide-react";

const stats = [
  { icon: Car, label: "Rides Completed", target: 52400, suffix: "+" },
  { icon: Users, label: "Women Employed", target: 12800, suffix: "+" },
  { icon: MapPin, label: "Cities Active", target: 28, suffix: "" },
  { icon: TrendingUp, label: "5-Star Ratings", target: 98, suffix: "%" },
];

function useCounter(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

const StatCard = ({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) => {
  const count = useCounter(stat.target, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 text-center"
    >
      <div className="gradient-bg w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
        <stat.icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
    </motion.div>
  );
};

const DashboardSection = () => {
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
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Impact</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Our <span className="gradient-text">Numbers</span> Speak
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
