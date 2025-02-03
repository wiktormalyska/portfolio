import {ReactNode, useEffect, useState} from 'react';
import AppBackground from "./AppBackground.tsx";

interface AppWrapperProps {
    children: ReactNode
}


export function AppWrapper({children}: AppWrapperProps) {
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({x: event.clientX, y: event.clientY});
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <>
            <div
                className="relative min-h-screen bg-background  overflow-hidden">
                <AppBackground/>
                <div
                    className="absolute w-20 h-20 bg-accent bg-opacity-50 rounded-full blur-3xl"
                    style={{
                        top: `${mousePos.y - 40}px`,
                        left: `${mousePos.x - 40}px`
                    }}
                ></div>
                <div className="relative z-10 pr-5 pl-5">
                    {children}
                </div>
            </div>
        </>
    )
}
