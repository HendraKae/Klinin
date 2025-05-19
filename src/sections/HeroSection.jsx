import HeroImg from "../assets/images/heroimg.webp";
import { FiArrowRight } from "react-icons/fi";
import WhatsappIcon from "../assets/icons/whatsapp.svg";

export default function Hero() {
  return (
    <section
      className="relative h-screen md:h-[750px] w-full bg-left  bg-cover"
      style={{ backgroundImage: `url(${HeroImg})` }}
      id="beranda"
    >
      {/* Overlay bg */}
      <div className="absolute inset-0 bg-gray-950/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-4 sm:px-10 sm:py-4 pt-0 md:pt-20 flex flex-col gap-6 md:gap-7 justify-center items-start h-full">
        <h1 className="text-white font-medium text-4xl md:text-6xl">
          Bersih Maksimal, Tanpa Ribet
        </h1>
        <p className="text-white font-light text-[18px] md:text-[25px] max-w-200">
          Kami hadir untuk membantu Anda mencuci pakaian dengan mudah, cepat,
          dan terpercaya. Layanan antar-jemput, harga terjangkau, dan hasil
          memuaskan.
        </p>
        <a
          href="#"
          className="flex justify-center items-center gap-2 md:px-7 px-4 py-3 md:py-5 text-white font-normal text-[16px] md:text-[19px] bg-blue-500 rounded-[8px] md:rounded-2xl hover:bg-blue-600 transition duration-200"
        >
          <img src={WhatsappIcon} alt="" className="w-6 md:w-auto" />
          Hubungi Sekarang
        </a>
        <span className="absolute right-0 bottom-24 md:bottom-16 rotate-90 text-white flex justify-center gap-2 items-center text-[17px] md:text-2xl animate-vertical-bounce">
          Scroll <FiArrowRight />
        </span>
      </div>
    </section>
  );
}
