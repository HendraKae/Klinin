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
  return (
    <div>
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
