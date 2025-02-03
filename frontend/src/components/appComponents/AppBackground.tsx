import {useState, useEffect} from "react";
import {motion} from "framer-motion";

export const AppBackground: React.FC = () => {
    const generatePolygon = () =>
        `polygon(${Array.from({length: 24}, () => `${Math.random() * 100}% ${Math.random() * 100}%`).join(", ")})`;

    const [polygon, setPolygon] = useState(generatePolygon());
    const [isInitial, setIsInitial] = useState(true)

    useEffect(() => {
        if (isInitial){
            setPolygon(generatePolygon());
            setIsInitial(false)
        }
        const interval = setInterval(() => {
            setPolygon(generatePolygon());
        }, 6000);

        return () => clearInterval(interval);
    }, [isInitial]);

    return (
        <div className="absolute flex justify-center items-center h-screen w-screen blur-3xl">
            <motion.div
                initial={{clipPath: polygon}}
                animate={{clipPath: polygon}}
                transition={{duration: 6, ease: "easeInOut"}}
                className="aspect-[1.7] h-screen w-screen bg-gradient-to-r from-blue-500 to-white/10 opacity-60"
            ></motion.div>
        </div>
    );
};
