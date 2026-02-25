import {ReactNode, useEffect, useState} from 'react';
import {AppBackground} from "./AppBackground.tsx";

interface AppWrapperProps {
    children: ReactNode
}



export function AppWrapper({ children }: AppWrapperProps) {
    const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.pageX, y: event.pageY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => { window.removeEventListener('mousemove', handleMouseMove); };
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col bg-background overflow-hidden">
            <AppBackground />
            {/* Mouse glow */}
            <div
                className="pointer-events-none absolute w-64 h-64 rounded-full blur-3xl opacity-20 transition-[top,left] duration-75"
                style={{
                    top: `${mousePos.y - 128}px`,
                    left: `${mousePos.x - 128}px`,
                    background: 'radial-gradient(circle, rgba(96,141,204,0.6) 0%, transparent 70%)',
                }}
            />
            <div className="relative z-10 flex flex-col flex-1 sm:pr-5 sm:pl-5">
                {children}
            </div>
        </div>
    );
}