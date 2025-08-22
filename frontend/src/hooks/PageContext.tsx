import {createContext, useContext} from "react";

interface PageContextType {
    page: string;
    setPage: (newVal: string) => void
}

export const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePageContext = () => {
    const context = useContext(PageContext)
    if (!context) {
        throw new Error("usePageContext must be used within a PageProvider");
    }
    return context
}