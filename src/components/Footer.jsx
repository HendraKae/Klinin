import { FaWhatsapp, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <section data-aos="fade-up" className="bg-blue-950" id="kontak">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 py-10 lg:py-20 ">
        <div className="flex justify-between items-start flex-col md:flex-row">
          <a href="#" className="text-3xl lg:text-[35px] font-bold text-white">
            Klinin Laundry
          </a>
          <div className="flex justify-end items-start gap-10 md:gap-20 flex-col md:flex-row pt-8 md:pt-0">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="text-[20px] font-medium text-white hover:text-gray-300 transition duration-300">
                Landing Page
              </h1>
              <a
                href="#beranda"
                className="text-[20px] font-light text-white hover:text-gray-300 transition duration-300"
              >
                Beranda
              </a>
              <a
                href="#tentang"
                className="text-[20px] font-light text-white hover:text-gray-300 transition duration-300"
              >
                Tentang
              </a>
              <a
                href="#layanan"
                className="text-[20px] font-light text-white hover:text-gray-300 transition duration-300"
              >
                Layanan
              </a>
              <a
                href="#testimoni"
                className="text-[20px] font-light text-white hover:text-gray-300 transition duration-300"
              >
                Testimoni
              </a>
              {/* <a
                href="#kontak"
                className="text-[20px]  font-light text-white hover:text-gray-300 transition duration-300"
              >
                Kontak
              </a> */}
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="text-[20px] font-medium text-white hover:text-gray-300 transition duration-300">
                Kontak
              </h1>
              <p className="text-[18px] font-light text-white hover:text-gray-300 transition duration-300 flex items-start gap-2">
                <FaMapMarkerAlt className="pt-1 text-white h-7 w-7 flex-shrink-0" />
                Jl. Indonesia, Asia, Jawa Timur,
                <br /> Indonesia
              </p>
              <a
                href="#"
                className="text-[18px] font-light text-white hover:text-gray-300 transition duration-300 flex items-center gap-2"
              >
                <FaWhatsapp className="text-white h-7 w-7 flex-shrink-0" />{" "}
                +1519 901222
              </a>
              <a
                href="#"
                className="text-[18px] font-light text-white hover:text-gray-300 transition duration-300 flex items-center gap-4"
              >
                <FaRegEnvelope className="text-white h-6 w-6 flex-shrink-0" />{" "}
                halo@gmail.com
              </a>
            </div>
          </div>
        </div>
        <p className="pt-10 md:pt-0 text-lg lg:text-[22px]  text-white hover:text-gray-300">
          Copyright © Klinin Laundry All rights reserved.
        </p>
      </div>
    </section>
  );
}
