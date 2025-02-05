import {ReactNode, useEffect, useState} from 'react';
import {AppBackground} from "./AppBackground.tsx";

interface AppWrapperProps {
    children: ReactNode
}



export function AppWrapper({ children }: AppWrapperProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Obliczanie pozycji myszy względem całej strony
            const x = event.pageX;
            const y = event.pageY;

            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-background overflow-hidden">
            <AppBackground />
            <div
                className="absolute w-20 h-20 bg-secondary bg-opacity-50 rounded-full blur-3xl"
                style={{
                    top: `${mousePos.y - 40}px`,
                    left: `${mousePos.x - 40}px`
                }}
            ></div>
            <div className="relative z-10 sm:pr-5 sm:pl-5">
                {children}
            </div>
        </div>
    );
}