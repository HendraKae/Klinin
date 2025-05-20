// Testimoni.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Avatar from "../assets/images/avatar.png";

const testimonials = [
  {
    name: "Alifah",
    title: "Ibu Rumah Tangga",
    message:
      "Cepat, bersih, dan ramah! Dulu saya repot urus laundry sendiri, sekarang tinggal klik lewat Klinin, semua beres. Pelayanannya juga on time terus.",
    image: Avatar,
  },
  {
    name: "Joko Arto",
    title: "Karyawan Swasta",
    message:
      "Saya butuh jasa laundry yang bisa diandalkan untuk jas dan kemeja kerja. Klinin gak pernah mengecewakan, selalu rapi dan wangi. Recomended banget!",
    image: Avatar,
  },
  {
    name: "Akbar Jis",
    title: "Mahasiswa",
    message:
      "Pertama kali coba karena promo, sekarang malah jadi langganan. Interface aplikasinya gampang banget, tinggal order, tunggu jemputan, selesai!",
    image: Avatar,
  },
];

export default function Testimoni() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-4 sm:px-10 py-0 mt-[-65px] lg:mt-0 z-22"
      id="testimoni"
    >
      <h2 className="text-blue-900 font-medium text-3xl lg:text-5xl pb-3">
        Apa kata Pelanggan Klinin?
      </h2>

      <p className="text-gray-700 text-[17px] lg:text-[19px] max-w-[580px] mb-10 font-light">
        Lihat apa kata mereka yang sudah merasakan laundry bareng Klinin.
      </p>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10" // <-- ini penting
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-[350px]">
              <div className="bg-white rounded-3xl  text-center p-3 md:p-6 min-h-[300px] flex flex-col justify-center items-center border-[0.5px] border-blue-800">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-15 md:w-20 h-15 md:h-20 object-cover rounded-full mb-4"
                />
                <h3 className="text-[18px] font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-[16px] text-gray-500 mb-2">{t.title}</p>
                <hr className="w-4/5 my-2 text-blue-800" />
                <p className="text-gray-700 text-[16px] font-light">
                  {t.message}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
