// Wrapper.tsx
import {ReactNode} from 'react';

interface AppWrapperProps {
    children: ReactNode
}


export function AppWrapper({children}: AppWrapperProps) {
    return (
        <>
            <div className="relative min-h-screen bg-gradient-to-br  from-neutral-900 to-neutral-800 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none">
                    <div
                        className="absolute w-50 h-50 bg-neutral-700 rounded-full blur-3xl -top-25 -left-25"></div>
                    <div
                        className="absolute w-50 h-50 bg-neutral-700 rounded-full blur-3xl -top-25 -right-25"></div>
                    <div
                        className="absolute w-50 h-50 bg-neutral-700 rounded-full blur-3xl -bottom-25 -left-25"></div>
                    <div
                        className="absolute w-50 h-50 bg-neutral-700 rounded-full blur-3xl -bottom-25 -right-25"></div>
                </div>
                <div className="relative z-10 pr-5 pl-5">
                    {children}
                </div>
            </div>
        </>
    );
};
