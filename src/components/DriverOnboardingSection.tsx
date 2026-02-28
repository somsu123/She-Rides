import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, X } from "lucide-react";

const DriverOnboardingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", city: "", vehicle: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.city && form.vehicle) setShowSuccess(true);
  };

  return (
    <section id="driver" className="section-padding bg-background" ref={ref}>
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Join Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-foreground">
              Drive with <span className="gradient-text">SheRide</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Earn on your own terms. Flexible hours, fair pay, and a supportive community of women drivers. Join thousands who are already riding towards independence.
            </p>
            <div className="space-y-4">
              {["Flexible working hours", "Weekly payouts", "Free safety training", "Insurance coverage"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Quick Registration</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                placeholder="City"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <select
                value={form.vehicle}
                onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto Rickshaw</option>
                <option value="bike">Two Wheeler</option>
                <option value="ev">Electric Vehicle</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={!form.name || !form.city || !form.vehicle}
              className="w-full gradient-bg text-primary-foreground py-4 rounded-xl font-semibold text-base mt-6 disabled:opacity-50 hover:opacity-90 transition-opacity"
            >
              Register as Driver
            </button>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-sm w-full text-center relative"
            >
              <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Welcome, {form.name}!</h3>
              <p className="text-muted-foreground text-sm">Your registration is received. Our team will contact you within 24 hours. (Demo only)</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DriverOnboardingSection;
