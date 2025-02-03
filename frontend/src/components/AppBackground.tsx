import { motion } from "motion/react";
import {useEffect, useState} from "react";


const AppBackground: React.FC = () => {
    const [polygon, setPolygon] = useState(
    `polygon(${Array.from({ length: 24 }, () => `${Math.random() * 100}% ${Math.random() * 100}%`).join(", ")})`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPolygon(
        `polygon(${Array.from({ length: 24 }, () => `${Math.random() * 100}% ${Math.random() * 100}%`).join(", ")})`
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute flex justify-center items-center h-screen w-screen blur-3xl">
      <motion.div
        animate={{ clipPath: polygon }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
        className="aspect-[1.7] h-[90vh] w-[90vw] bg-gradient-to-r from-blue-500 to-white/10 opacity-70"
      ></motion.div>
    </div>
  );
};

export default AppBackground;
