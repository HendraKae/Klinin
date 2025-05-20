import bgWord from "../assets/images/wordbg.jpg";

export default function Highlight() {
  return (
    <section
      className="relative h-screen  w-full bg-center bg-cover lg:bg-fixed flex justify-center items-center"
      style={{ backgroundImage: `url(${bgWord})` }}
    >
      <div className="absolute inset-0 bg-gray-950/30 z-1"></div>
      <div className="absolute z-20 top-0 left-0 right-0 bottom-[80%] bg-white  shadow-[0_50px_50px_-0px_rgba(0,0,0,0.5)]"></div>
      <h1 className="leading-tight text-white font-medium text-3xl lg:text-5xl pb-3 text-center relative z-2 line">
        Layanan Laundry <br /> Premium & Terpercaya
      </h1>
      <div className="absolute z-20 bottom-0 left-0 right-0 top-[80%] bg-white shadow-[0_-50px_50px_-0px_rgba(0,0,0,0.5)]"></div>
    </section>
  );
}
