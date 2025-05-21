import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import WaterSplash from "./components/WaterSplash";

import Header from "./components/Header";
import Hero from "./sections/HeroSection";
import About from "./sections/AboutSection";
import Keunggulan from "./sections/KeunggulanSection";
import Layanan from "./sections/LayananSection";
import Highlight from "./sections/HighlightSection";
import Testimoni from "./sections/TestimoniSection";
import LocationMap from "./sections/PaymentAndLocation";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      {/* <WaterSplash /> */}
      <Header />
      <Hero />
      <About />
      <Keunggulan />
      <Layanan />
      <Highlight />
      <Testimoni />
      <LocationMap />
      <Footer />
    </div>
  );
}
