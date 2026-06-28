import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UrgencyBanner from "@/components/UrgencyBanner";
import TrustBadges from "@/components/TrustBadges";
import SocialProofCounter from "@/components/SocialProofCounter";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import ProductSpecs from "@/components/ProductSpecs";
import WhyCocoon from "@/components/WhyCocoon";
import Testimonials from "@/components/Testimonials";
import RiskFreeGuarantee from "@/components/RiskFreeGuarantee";
import FAQ from "@/components/FAQ";
import ShippingGuarantee from "@/components/ShippingGuarantee";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <UrgencyBanner />
        <TrustBadges />
        <SocialProofCounter />
        <Benefits />
        <HowItWorks />
        <ProductSpecs />
        <WhyCocoon />
        <Testimonials />
        <RiskFreeGuarantee />
        <FAQ />
        <ShippingGuarantee />
        <FinalCTA />
      </main>
      <Footer />
      <OrderModal />
    </>
  );
}
