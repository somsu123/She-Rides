import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is SheRide available in my city?", a: "We're currently live in 28+ cities across India including Bangalore, Delhi, Mumbai, Pune, Jaipur, and expanding fast into tier 2 & 3 cities." },
  { q: "How are drivers verified?", a: "Every driver undergoes thorough background checks, driving skill assessments, and mandatory safety training before onboarding." },
  { q: "What safety features are included?", a: "Real-time tracking, SOS button, ride sharing with contacts, driver verification, and 24/7 safety support are all built-in." },
  { q: "Can men use SheRide?", a: "SheRide is exclusively for women passengers and women drivers to ensure a completely safe mobility experience." },
  { q: "How do I become a driver partner?", a: "Simply fill out the driver registration form on our website. Our team will reach out within 24 hours for verification and onboarding." },
  { q: "What are the fare rates?", a: "Fares start at ₹89 for economy rides. We keep prices competitive while ensuring fair pay for our driver partners." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background" ref={ref}>
      <div className="container-tight max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
