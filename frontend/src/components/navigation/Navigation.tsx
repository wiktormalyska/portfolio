import logo from "/img/logo.png";
import {NavigationLinks} from "./NavigationLinks.tsx";

export function Navigation() {
    return (
        <div className="h-15  rounded-2xl">
            <div className="flex flex-row w-full justify-between h-full sm:p-2 max-sm:justify-center">
                <div className="flex flex-row items-center gap-5 max-sm:hidden">
                    <img src={logo} alt="Logo" className="h-10"/>
                    <div className="nav-text max-sm:hidden">Wiktor Małyska</div>
                </div>
                <div className="flex flex-row items-center gap-5 text-text tracking-widest max-sm:text-xs">
                    <NavigationLinks/>
                </div>
            </div>
        </div>
    );
}

//     font-style: italic;
//     -webkit-text-stroke-width: 1px;
//     -webkit-text-stroke-color: var(--text);
//     color: transparent;
