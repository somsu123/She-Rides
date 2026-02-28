import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BookRideSection from "@/components/BookRideSection";
import LiveTrackingSection from "@/components/LiveTrackingSection";
import SafetySection from "@/components/SafetySection";
import DriverOnboardingSection from "@/components/DriverOnboardingSection";
import DashboardSection from "@/components/DashboardSection";
import RevenueSection from "@/components/RevenueSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BookRideSection />
      <LiveTrackingSection />
      <SafetySection />
      <DriverOnboardingSection />
      <DashboardSection />
      <RevenueSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
