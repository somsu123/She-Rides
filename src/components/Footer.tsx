import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-bg text-primary-foreground">
      <div className="container-tight section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-bg p-2 rounded-xl">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">SheRide</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              India's first women-only mobility and delivery network. Safe rides, empowered drivers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Book a Ride", "Safety", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-4">Company</h4>
            <div className="space-y-2">
              {["Careers", "Blog", "Press", "Partners", "Privacy Policy"].map((link) => (
                <a key={link} href="#" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4" /> hello@sheride.in
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4" /> +91 800-SHE-RIDE
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4" /> Bangalore, India
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-xs font-bold text-primary-foreground/60 hover:bg-primary-foreground/20 transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © 2026 SheRide. All rights reserved. Made with 💜 for women's safety.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
