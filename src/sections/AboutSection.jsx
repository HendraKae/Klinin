import ImgAbout from "../assets/images/about.webp";

export default function About() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-4 py-4 pt-20 md:pt-30  flex justify-center flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center pb-20"
      id="tentang"
    >
      <h1 className="text-blue-900  font-medium text-3xl md:text-5xl pb-2 block md:hidden">
        Tentang Kami
      </h1>
      <img src={ImgAbout} alt="" className="w-150 rounded-2xl" />

      <div className="">
        <h1 className="text-blue-900 font-medium text-3xl md:text-5xl pb-6 hidden md:block">
          Tentang Kami
        </h1>
        <p className="text-black font-light text-[18px]">
          Kami percaya bahwa waktu Anda sangat berharga. Oleh karena itu, Klinin
          hadir sebagai solusi cerdas untuk kebutuhan laundry Anda. Didirikan
          dengan semangat memberikan pelayanan terbaik, kami menggabungkan
          teknologi, profesionalisme, dan perhatian pada setiap detail cucian
          Anda. Mulai dari pakaian harian, bed cover, hingga pakaian
          eksklusif—semua kami tangani dengan proses yang higienis dan ramah
          lingkungan. Kami juga menyediakan layanan antar-jemput agar Anda bisa
          tetap fokus pada hal-hal penting dalam hidup, tanpa harus repot
          mengurus cucian. Kepuasan pelanggan adalah prioritas kami. Coba Klinin
          hari ini, dan rasakan sendiri kemudahannya.
        </p>
      </div>
    </section>
  );
}
