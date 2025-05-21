import { motion } from "framer-motion";
import Wave from "../assets/images/svg/wave.svg";

const WaterSplash = () => {
  return (
    <motion.div
      initial={{ y: "-100%" }} // Mulai dari luar layar atas
      animate={{ y: "100%" }} // Turun sampai keluar dari bawah layar
      transition={{ duration: 1.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-[1000px] lg:h-[1600px] z-[9999] bg-blue-500 overflow-hidden rounded-b-[70%] lg:rounded-b-[30%] rounded-t-[80%] lg:rounded-t-[1000px]"
    >
      <div className="w-full h-full animate-waterDrop bg-blue-400 opacity-90" />
    </motion.div>
  );
};

export default WaterSplash;
