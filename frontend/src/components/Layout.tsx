import * as React from "react";
import {Navigation} from "./navigation/Navigation.tsx";
import {ReactNode, useState} from "react";
import {Footer} from "./Footer.tsx";
import {PageContext} from "../hooks/PageContext.tsx";

interface LayoutProps {
    children: React.ReactNode
}

export const PageProvider = ({children}: { children: ReactNode }) => {
    const [page, setPage] = useState("home");
    return (
        <PageContext.Provider value={{page, setPage}}>
            {children}
        </PageContext.Provider>
    )
}

export function Layout({children}: LayoutProps) {
    return (
        <>
            <div className={"w-full min-h-screen flex flex-col text-text"}>
                <Navigation/>
                <main className="flex-1">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}
