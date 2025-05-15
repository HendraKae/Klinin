import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Beranda", "Tentang", "Layanan", "Harga", "Kontak"];

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:px-4 md:py-6 px-4 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          Klinin
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-lg font-light text-white hover:text-blue-500 transition"
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

      {/* Menu mobile fullscreen */}
      <nav
        className={`fixed inset-0 bg-blue-500 flex flex-col items-end pr-6 pt-20 space-y-8
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
            href="#"
            className="text-2xl font-light text-white hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}

        {/* Tombol close fixed di pojok kanan atas */}
        <a
          href="#"
          className="text-2xl font-bold fixed top-4 left-4 text-white"
        >
          Klinin
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
