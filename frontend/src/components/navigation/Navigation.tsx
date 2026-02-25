import logo from "/img/logo.png";
import {NavigationLinks} from "./NavigationLinks.tsx";

export function Navigation() {
    return (
        <div className="sticky top-0 z-50 w-full border-b border-[rgba(148,175,213,0.12)] bg-[rgba(8,12,18,0.75)] backdrop-blur-md">
            <div className="flex flex-row w-full justify-between h-14 items-center sm:px-6 px-3">
                <div className="flex flex-row items-center gap-3 max-sm:hidden">
                    <img src={logo} alt="Logo" className="h-8"/>
                    <span className="font-display font-bold text-lg tracking-widest text-text/90">Wiktor Małyska</span>
                </div>
                <div className="flex flex-row items-center gap-7 text-text tracking-widest max-sm:gap-4 max-sm:text-sm w-full max-sm:justify-center sm:w-auto">
                    <NavigationLinks/>
                </div>
            </div>
        </div>
    );
}
