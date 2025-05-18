import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Beranda", "Tentang", "Layanan", "Harga", "Kontak"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center md:px-4 md:py-6 px-4 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl md:text-[27px] font-bold text-white">
          Klinin Laundry
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-light text-white hover:text-gray-300 transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Tombol hamburger mobile */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl text-white"
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        )}
      </div>

      {/* Menu mobile */}
      <nav
        className={`fixed inset-0 bg-blue-900 flex flex-col items-end pr-6 pt-20 space-y-8
          transition-opacity duration-300 ease-in-out 
          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-2xl font-light text-white hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}

        {/* Tombol close fixed */}
        <a
          href="#"
          className="text-2xl font-bold fixed top-4 left-4 text-white"
        >
          Klinin Laundry
        </a>
        <button
          onClick={() => setMenuOpen(false)}
          className="fixed top-4 right-4 text-4xl text-white z-50"
          aria-label="Close menu"
        >
          <FiX />
        </button>
      </nav>
    </header>
  );
}
