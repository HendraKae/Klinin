import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import LayananImage from "../assets/images/layanankiloan.webp";
import LayananSatuan from "../assets/images/layanansatuan.webp";
import LayananSprei from "../assets/images/layanansprei.webp";
import layananTasSepatu from "../assets/images/layanantas&sepatu.webp";
import LayananKarpet from "../assets/images/layanankarpet.webp";
import LayananBoneka from "../assets/images/layananboneka.webp";

const layananList = [
  {
    img: LayananImage,
    title: "Laundry Kiloan",
    desc: "Cocok untuk kebutuhan sehari-hari, cepat dan ekonomis.",
  },
  {
    img: LayananSatuan,
    title: "Laundry Satuan",
    desc: "Untuk pakaian spesial seperti jas, kebaya, gaun, dan lainnya.",
  },
  {
    img: LayananSprei,
    title: "Bed Cover & Sprei",
    desc: "Cuci bersih dan higienis untuk kenyamanan tidur Anda.",
  },
  {
    img: layananTasSepatu,
    title: "Tas / Sepatu",
    desc: "membuatnya tampak seperti baru, bersih, dan harum tanpa merusak bahan.",
  },
  {
    img: LayananKarpet,
    title: "Karpet",
    desc: "Karpet bersih dan wangi kembali tanpa perlu lama menunggu.",
  },
  {
    img: LayananBoneka,
    title: "Boneka",
    desc: "bersihkan dengan lembut dan cepat, siap dipeluk kembali di hari yang sama.",
  },
];

export default function LayananKami() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-4 sm:px-10 py-0  pt-20 lg:pt-30 mb-[-40px] lg:mb-0 z-22"
      id="layanan"
    >
      <div className="flex flex-col lg:flex-row justify-between">
        <h2 className="text-blue-900 font-medium text-3xl lg:text-5xl pb-3">
          Layanan Kami
        </h2>
        <p className="text-gray-700 text-[17px] lg:text-[19px] max-w-[580px] mb-10 font-light">
          Kami hadir untuk memenuhi semua kebutuhan laundry Anda, dengan
          berbagai pilihan layanan yang fleksibel dan berkualitas tinggi.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {layananList.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden transition duration-300 hover:brightness-80"
            style={{ willChange: "transform, opacity" }}
          >
            <img
              loading="lazy"
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover transition duration-300"
            />

            {/* Gradient Gelap dari Bawah */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 p-6 z-10">
              <h3 className="text-white font-medium text-[19px] md:text-[21px]">
                {item.title}
              </h3>
              <p className="text-gray-200 font-light text-[17px] md:text-[19px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
