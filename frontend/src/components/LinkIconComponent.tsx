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
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row px-4 py-2 gap-2 text-center items-center rounded-xl border border-[rgba(148,175,213,0.15)] bg-[rgba(255,255,255,0.04)] hover:border-accent/40 hover:bg-[rgba(96,141,204,0.1)] transition-all duration-300 group"
        >
            {typeof icon === "object" && "path" in icon ? (
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={icon.path} fill={`#${fill ? fill : icon.hex}`}/>
                </svg>
            ) : (
                <div className="w-5 h-5 group-hover:scale-110 transition-transform duration-200">{icon}</div>
            )}
            <div className="text-base max-sm:text-sm font-semibold tracking-wide text-text/80 group-hover:text-text transition-colors">{text}</div>
        </a>
    );
}

