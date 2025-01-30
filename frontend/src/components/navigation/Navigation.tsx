import logo from "../../../public/logo.png";
import {NavigationLinks} from "./NavigationLinks.tsx";

export function Navigation () {
    return (
        <div className={"w-full flex flex-row justify-between gap-1 h-15 p-5 pr-10 pl-10"}>
            <div className={"flex flex-row align-items-center items-center gap-5"}>
                <img src={logo} alt="Logo" className="h-10" />
                <div className={"font-extrabold f"}>Wiktor Małyska</div>
            </div>
            <div className={"flex flex-row items-center gap-5"}>
                <NavigationLinks />
            </div>
        </div>
    )
}

