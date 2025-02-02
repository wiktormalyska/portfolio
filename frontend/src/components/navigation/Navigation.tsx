import logo from "/logo.png";
import {NavigationLinks} from "./NavigationLinks.tsx";

export function Navigation() {
    return (
        <div className="h-15  rounded-2xl">
            <div className="flex flex-row w-full justify-between h-full p-2">
                <div className="flex flex-row items-center gap-5">
                    <img src={logo} alt="Logo" className="h-10"/>
                    <div className="font-extrabold stroke-1 stroke-neutral-100 ">Wiktor Małyska</div>
                </div>
                <div className="flex flex-row items-center gap-5">
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
