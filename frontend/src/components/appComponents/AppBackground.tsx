import {useState, useEffect, useRef} from "react";
import {m} from "framer-motion";

const generatePolygon = () =>
    `polygon(${Array.from({length: 24}, () => `${Math.random() * 100}% ${Math.random() * 100}%`).join(", ")})`;

export const AppBackground: React.FC = () => {
    const initialClipPath = useRef(generatePolygon());
    const [clipPath, setClipPath] = useState(initialClipPath.current);

    useEffect(() => {
        const interval = setInterval(() => {
            setClipPath(generatePolygon());
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed flex justify-center items-center h-screen w-screen blur-3xl max-sm:blur-2xl pointer-events-none">
            <m.div
                initial={{clipPath: initialClipPath.current}}
                animate={{clipPath}}
                transition={{duration: 6, ease: "easeInOut"}}
                className="h-screen w-screen bg-gradient-to-r from-blue-500 to-white/10 opacity-60"
            />
        </div>
    );
};
