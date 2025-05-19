import {
  FaTshirt,
  FaTruck,
  FaClock,
  FaLeaf,
  FaBed,
  FaGem,
} from "react-icons/fa";

const layananList = [
  {
    title: "Laundry Kiloan",
    desc: "Cocok untuk kebutuhan sehari-hari, cepat dan ekonomis.",
    icon: <FaTshirt size={36} className="text-blue-600 mb-4" />,
  },
  {
    title: "Laundry Satuan",
    desc: "Untuk pakaian spesial seperti jas, kebaya, gaun, dan lainnya.",
    icon: <FaGem size={36} className="text-blue-600 mb-4" />,
  },
  {
    title: "Bed Cover & Sprei",
    desc: "Cuci bersih dan higienis untuk kenyamanan tidur Anda.",
    icon: <FaBed size={36} className="text-blue-600 mb-4" />,
  },
  {
    title: "Antar-Jemput",
    desc: "Jemput dan antar cucian langsung ke lokasi Anda.",
    icon: <FaTruck size={36} className="text-blue-600 mb-4" />,
  },
  {
    title: "Express 24 Jam",
    desc: "Butuh cepat? Kami bisa bantu selesaikan dalam sehari.",
    icon: <FaClock size={36} className="text-blue-600 mb-4" />,
  },
  {
    title: "Ramah Lingkungan",
    desc: "Kami menggunakan bahan yang aman dan ramah lingkungan.",
    icon: <FaLeaf size={36} className="text-blue-600 mb-4" />,
  },
];

export default function Layanan() {
  return (
    <section
      id="layanan"
      className="relative max-w-7xl mx-auto px-4 sm:px-10 py-4 sm:py-10 pt-10 lg:pt-20 gap-4 lg:gap-10 pb-20 lg:pb-25"
    >
      <h2 className="text-blue-900 font-medium text-3xl lg:text-5xl pb-5">
        Layanan Kami
      </h2>
      <p className=" text-gray-700 text-[18px] max-w-[550px] mb-10 ">
        Kami hadir untuk memenuhi semua kebutuhan laundry Anda, dengan berbagai
        pilihan layanan yang fleksibel dan berkualitas tinggi.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {layananList.map((layanan, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="flex justify-center">{layanan.icon}</div>
            <h3 className="text-[18px] font-semibold text-blue-800 mb-2 mt-2">
              {layanan.title}
            </h3>
            <p className="text-gray-600 text-[16px]">{layanan.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
