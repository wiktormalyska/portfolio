import {SimpleIcon} from "simple-icons";
import {ReactNode} from "react";

interface LinkIconComponentProps {
    icon: SimpleIcon | ReactNode;
    text: string;
    fill?: string;
    href: string;
}


export function LinkIconComponent({icon, text, fill, href}: LinkIconComponentProps) {
    if (!icon) return null
    return (

        <div className="flex flex-row p-2 gap-2 text-center items-center">
            {typeof icon === "object" && "path" in icon ? (
                <a href={href} target="_blank">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={icon.path} fill={`#${fill ? fill : icon.hex}`}/>
                    </svg>
                </a>
            ) : (
                <a href={href} target="_blank">
                    <div className="w-8 h-8">{icon}</div>
                </a>
            )}
            <a href={href} target="_blank">
                <div className="text-xl max-sm:text-base max-md:text-lg font-bold tracking-wider">{text}</div>
            </a>
        </div>

    );
}