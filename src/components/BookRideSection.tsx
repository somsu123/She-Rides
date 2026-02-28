import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Car, CheckCircle, X } from "lucide-react";

const rideTypes = [
  { id: "economy", label: "Economy", price: "₹89", time: "4 min" },
  { id: "comfort", label: "Comfort", price: "₹149", time: "6 min" },
  { id: "premium", label: "Premium", price: "₹249", time: "8 min" },
];

const BookRideSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [selectedRide, setSelectedRide] = useState("economy");
  const [showModal, setShowModal] = useState(false);

  const handleBook = () => {
    if (pickup && drop) setShowModal(true);
  };

  return (
    <section id="book" className="section-padding bg-background" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Ride Now</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Book Your <span className="gradient-text">Safe Ride</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto glass-card p-8"
        >
          <div className="space-y-4 mb-6">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              <input
                type="text"
                placeholder="Pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
            </div>
            <div className="relative">
              <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
              <input
                type="text"
                placeholder="Drop location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {rideTypes.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRide(r.id)}
                className={`p-3 rounded-xl border-2 text-center transition-all ${
                  selectedRide === r.id
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <Car className="w-5 h-5 mx-auto mb-1 text-primary" />
                <div className="text-xs font-semibold text-foreground">{r.label}</div>
                <div className="text-sm font-bold gradient-text">{r.price}</div>
                <div className="text-xs text-muted-foreground">{r.time}</div>
              </button>
            ))}
          </div>

          <button
            onClick={handleBook}
            disabled={!pickup || !drop}
            className="w-full gradient-bg text-primary-foreground py-4 rounded-xl font-semibold text-base disabled:opacity-50 hover:opacity-90 transition-opacity"
          >
            Book Now
          </button>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-sm w-full text-center relative"
            >
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Ride Confirmed!</h3>
              <p className="text-muted-foreground mb-1">Your driver <strong className="text-foreground">Priya S.</strong> is on her way</p>
              <p className="text-sm text-muted-foreground mb-4">{pickup} → {drop}</p>
              <div className="glass-card p-3 text-sm">
                <span className="text-muted-foreground">ETA: </span>
                <span className="font-semibold text-primary">4 minutes</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BookRideSection;
