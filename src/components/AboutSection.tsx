import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, MapPin } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Shield, title: "Safety First", desc: "Every ride is monitored with real-time tracking and SOS alerts for complete peace of mind." },
    { icon: Heart, title: "Women Empowerment", desc: "Creating livelihood opportunities for thousands of women across India as drivers and delivery executives." },
    { icon: MapPin, title: "Tier 2 & 3 Cities", desc: "Expanding safe mobility beyond metros into underserved cities where women need it most." },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Mission</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-foreground">
            Building a <span className="gradient-text">Safer India</span> for Women
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SheRide is more than a transport service — it's a movement to make every journey safe and empowering for women, while creating meaningful employment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 text-center group hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="gradient-bg w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
