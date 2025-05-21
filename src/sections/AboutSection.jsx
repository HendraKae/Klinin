import ImgAbout from "../assets/images/about.webp";
import AnimatedNumber from "../components/AnimatedNumber";

export default function About() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-4 sm:px-10 py-4  pt-20  lg:pt-30"
      id="tentang"
    >
      <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-10 items-start lg:items-center">
        <h1
          data-aos="fade-up"
          className="text-blue-900 font-medium text-3xl lg:text-5xl pb-2 block lg:hidden"
        >
          Tentang Kami
        </h1>
        {/* dekstop */}
        <img
          data-aos="fade-right"
          src={ImgAbout}
          alt="Tentang Kami"
          className="w-full max-w-lg lg:max-w-lg rounded-2xl object-cover hidden lg:block"
        />
        {/* mobile */}
        <img
          data-aos="fade-up"
          src={ImgAbout}
          alt="Tentang Kami"
          className="w-full max-w-lg lg:max-w-lg rounded-2xl object-cover block lg:hidden"
        />

        <div>
          <h1
            data-aos="fade-left"
            className="text-blue-900 font-medium text-3xl lg:text-5xl pb-6 hidden lg:block"
          >
            Tentang Kami
          </h1>
          {/* Mobile: fade-up */}
          <p
            data-aos="fade-up"
            className="text-black font-light text-[17px] block lg:hidden"
          >
            Kami percaya bahwa waktu Anda sangat berharga. Oleh karena itu,
            Klinin hadir sebagai solusi cerdas untuk kebutuhan laundry Anda.{" "}
            <br />
            <br />
            Didirikan dengan semangat memberikan pelayanan terbaik, kami
            menggabungkan teknologi, profesionalisme, dan perhatian pada setiap
            detail cucian Anda. Mulai dari pakaian harian, bed cover, hingga
            pakaian eksklusif—semua kami tangani dengan proses yang higienis dan
            ramah lingkungan.
            <br />
            <br />
            Kami juga menyediakan layanan antar-jemput agar Anda bisa tetap
            fokus pada hal-hal penting dalam hidup, tanpa harus repot mengurus
            cucian. Kepuasan pelanggan adalah prioritas kami. Coba Klinin hari
            ini, dan rasakan sendiri kemudahannya.
          </p>

          {/* Desktop: fade-right */}
          <p
            data-aos="fade-left"
            className="text-black font-light text-[19px] hidden lg:block"
          >
            Kami percaya bahwa waktu Anda sangat berharga. Oleh karena itu,
            Klinin hadir sebagai solusi cerdas untuk kebutuhan laundry Anda.{" "}
            <br />
            <br />
            Didirikan dengan semangat memberikan pelayanan terbaik, kami
            menggabungkan teknologi, profesionalisme, dan perhatian pada setiap
            detail cucian Anda. Mulai dari pakaian harian, bed cover, hingga
            pakaian eksklusif—semua kami tangani dengan proses yang higienis dan
            ramah lingkungan.
            <br />
            <br />
            Kami juga menyediakan layanan antar-jemput agar Anda bisa tetap
            fokus pada hal-hal penting dalam hidup, tanpa harus repot mengurus
            cucian. Kepuasan pelanggan adalah prioritas kami. Coba Klinin hari
            ini, dan rasakan sendiri kemudahannya.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center lg:pt-20 "
      >
        <div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-blue-900">
            <AnimatedNumber target={6} /> +
          </h2>
          <p className="text-sm lg:text-[22px] text-gray-700">
            Tahun Pengalaman
          </p>
        </div>
        <div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-blue-900">
            <AnimatedNumber target={1000} /> +
          </h2>
          <p className="text-sm lg:text-[22px] text-gray-700">Pelanggan Puas</p>
        </div>
        <div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-blue-900">
            <AnimatedNumber target={25000} /> +
          </h2>
          <p className="text-sm lg:text-[22px] text-gray-700">
            Kg Cucian Diproses
          </p>
        </div>
        <div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-blue-900">
            <AnimatedNumber target={99} /> %
          </h2>
          <p className="text-sm lg:text-[22px] text-gray-700">
            Tingkat Kepuasan
          </p>
        </div>
      </div>
    </section>
  );
}
