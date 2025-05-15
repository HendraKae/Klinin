import Header from "./components/Header";
import Hero from "./sections/HoroSection";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <Header />
      <Hero />
    </div>
  );
}
