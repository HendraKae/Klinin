import {
  FaTshirt,
  FaTruck,
  FaClock,
  FaLeaf,
  FaBed,
  FaGem,
  FaWhatsapp,
} from "react-icons/fa";

export default function Keunggulan() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-4 sm:px-10 py-4  pt-20 lg:pt-30"
      id="kenapa-klintin"
    >
      <div className="flex flex-col lg:flex-row justify-between">
        <h2 className="text-blue-900 font-medium text-3xl lg:text-5xl pb-3">
          Kenapa Harus Klinin?
        </h2>
        <p className="text-gray-700 text-[17px] lg:text-[19px] max-w-[480px] mb-10 font-light">
          Kami bukan sekadar tempat laundry – Klintin hadir untuk memberikan
          pengalaman mencuci yang cepat, bersih, dan terpercaya.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-blue-50 rounded-xl shadow-sm flex items-start space-x-4">
          <FaTshirt className="text-blue-700 h-7 w-7 flex-shrink-0" />
          <div>
            <h3 className="text-blue-800 font-semibold text-xl mb-2">
              1 Mesin 1 Pelanggan
            </h3>
            <p className="text-gray-600">
              Cucian Anda diproses secara eksklusif — tidak tercampur dengan
              milik pelanggan lain. Lebih higienis dan aman.
            </p>
          </div>
        </div>
        <div className="p-6 bg-blue-50 rounded-xl shadow-sm flex items-start space-x-4">
          <FaGem className="text-blue-700 h-7 w-7 flex-shrink-0" />
          <div>
            <h3 className="text-blue-800 font-semibold text-xl mb-2">
              Karyawan Terlatih
            </h3>
            <p className="text-gray-600">
              Tim kami telah melalui pelatihan dan bekerja sesuai SOP terbaik,
              untuk menjamin hasil maksimal setiap saat.
            </p>
          </div>
        </div>
        <div className="p-6 bg-blue-50 rounded-xl shadow-sm flex items-start space-x-4">
          <FaTruck className="text-blue-700 h-7 w-7 flex-shrink-0" />
          <div>
            <h3 className="text-blue-800 font-semibold text-xl mb-2">
              Antar-Jemput
            </h3>
            <p className="text-gray-600">
              Tak punya waktu ke outlet? Tenang. Kami siap jemput dan antar
              cucian Anda langsung ke rumah atau kantor.
            </p>
          </div>
        </div>
        <div className="p-6 bg-blue-50 rounded-xl shadow-sm flex items-start space-x-4">
          <FaClock className="text-blue-700 h-7 w-7 flex-shrink-0" />
          <div>
            <h3 className="text-blue-800 font-semibold text-xl mb-2">
              Garansi Kepuasan
            </h3>
            <p className="text-gray-600">
              Tidak puas? Kami siap cuci ulang tanpa biaya tambahan. Kepuasan
              Anda adalah prioritas kami.
            </p>
          </div>
        </div>
        <div className="p-6 bg-blue-50 rounded-xl shadow-sm flex items-start space-x-4">
          <FaWhatsapp className="text-blue-700 h-7 w-7 flex-shrink-0" />
          <div>
            <h3 className="text-blue-800 font-semibold text-xl mb-2">
              Update via WhatsApp
            </h3>
            <p className="text-gray-600">
              Cek status cucian kapan pun lewat notifikasi WhatsApp dari kami.
              Praktis dan transparan.
            </p>
          </div>
        </div>
        <div className="p-6 bg-blue-50 rounded-xl shadow-sm flex items-start space-x-4">
          <FaLeaf className="text-blue-700 h-7 w-7 flex-shrink-0" />
          <div>
            <h3 className="text-blue-800 font-semibold text-xl mb-2">
              Bahan Ramah Lingkungan
            </h3>
            <p className="text-gray-600">
              Kami menggunakan detergen yang aman bagi kulit dan lingkungan —
              tanpa mengurangi performa pencucian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
