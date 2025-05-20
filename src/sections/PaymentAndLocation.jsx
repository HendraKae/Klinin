import DANA from "../assets/images/dana.png";
import GOPAY from "../assets/images/gopay.png";
import OVO from "../assets/images/ovo.png";
import BRI from "../assets/images/bri.png";
import BCA from "../assets/images/bca.png";

export default function LocationMap() {
  return (
    <section className="py-16 lg:py-24">
      {/* MAP */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7529517051776!2d112.05989177481875!3d-7.815954492204644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78590013b2be75%3A0xf5af952fea3521cf!2sSimpang%20Lima%20Gumul!5e0!3m2!1sid!2sid!4v1747749292981!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px] border-0"
          title="Peta Lokasi"
        ></iframe>
      </div>

      {/* TEXT & LOGO */}
      <div className="text-center pt-20 md:pt-30">
        <p className="text-gray-700 text-[17px] lg:text-[25px] font-medium">
          Bebas Pilih Cara Bayar Favoritmu
        </p>
        <p className="text-gray-700 text-[17px] lg:text-[19px] font-light mb-6">
          Pembayaran tidak harus tunai
        </p>

        <div className="overflow-hidden w-full relative">
          <div
            className="flex gap-8 md:gap-12 items-center whitespace-nowrap animate-[scroll-left_13s_linear_infinite]"
            style={{ width: "max-content" }}
          >
            {[DANA, GOPAY, OVO, BRI, BCA, DANA, GOPAY, OVO, BRI, BCA].map(
              (logo, idx) => (
                <img
                  loading="lazy"
                  key={idx}
                  src={logo}
                  alt="Payment Method"
                  className="h-10 md:h-20 object-contain"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
