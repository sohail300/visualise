import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CropDemo from "@/components/CropDemo";
import VideoPreviewDemo from "@/components/VideoPreviewDemo";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
      <Hero />
      <Features />
      <CropDemo />
      <VideoPreviewDemo />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
