import * as React from "react";
import {Navigation} from "./navigation/Navigation.tsx";
import {createContext, ReactNode, useContext, useState} from "react";
import {Footer} from "./Footer.tsx";

interface LayoutProps {
    children: React.ReactNode
}

interface PageContextType {
    page: string;
    setPage: (newVal: string) => void
}

const PageContext = createContext<PageContextType | undefined>(undefined)

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
            <div className={"w-full h-max flex flex-col text-text"}>
                <Navigation/>
                {children}
                <Footer/>
            </div>

        </>
    )
}
export const usePageContext = () => {
    const context = useContext(PageContext)
    if (!context) {
        throw new Error("usePageContext must be used within a PageProvider");
    }
    return context
}