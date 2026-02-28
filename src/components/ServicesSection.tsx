import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Moon, Package, UserCheck } from "lucide-react";

const services = [
  { icon: Car, title: "Women-Only Ride Sharing", desc: "Safe, verified rides with women drivers exclusively for women passengers.", color: "from-primary to-accent" },
  { icon: Moon, title: "Safe Night Travel", desc: "Guaranteed safe travel after dark with enhanced monitoring and verification.", color: "from-accent to-primary" },
  { icon: Package, title: "Women Delivery Executives", desc: "Trusted delivery services by women, for women — parcels and essentials.", color: "from-primary to-accent" },
  { icon: UserCheck, title: "Female Driver-Only System", desc: "All drivers are verified women, trained in safety protocols and customer care.", color: "from-accent to-primary" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-foreground">
            Services Designed for <span className="gradient-text">Her Safety</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${s.color} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
