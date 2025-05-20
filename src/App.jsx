import Header from "./components/Header";
import Hero from "./sections/HeroSection";
import About from "./sections/AboutSection";
import Keunggulan from "./sections/KeunggulanSection";
import Layanan from "./sections/LayananSection";
import Highlight from "./sections/HighlightSection";
import Testimoni from "./sections/TestimoniSection";

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
    </div>
  );
}
