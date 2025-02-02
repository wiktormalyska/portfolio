import * as React from "react";
import {Navigation} from "./navigation/Navigation.tsx";

interface LayoutProps {
    children: React.ReactNode
}

export function Layout ({children}:LayoutProps) {
    return (
        <div className={"w-full h-max flex flex-col text-gray-50 pb-20"}>
            <Navigation />

            {children}
        </div>
    )
}