import {SimpleIcon} from "simple-icons";
import {ReactNode} from "react";

interface SimpleIconComponentProps {
    icon: SimpleIcon | ReactNode;
    text: string;
    fill?: string;
}


export const SimpleIconComponent = ({icon, text, fill,}:SimpleIconComponentProps) => {
    if (!icon) return null
    return (
        <div className="flex flex-col p-2 justify-center items-center gap-1 max-md:text-center group cursor-default hover:scale-110 transition-transform duration-200">
            {typeof icon === "object" && "path" in icon ? (
                <svg className="w-10 h-10 max-sm:w-8 max-sm:h-8 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={icon.path} fill={`#${fill ? fill : icon.hex}`}/>
                </svg>
            ) : (
                <div className="w-10 h-10 max-sm:w-8 max-sm:h-8 opacity-80 group-hover:opacity-100 transition-opacity">{icon}</div>
            )}
            <div className="text-sm max-sm:text-xs text-center text-text/70 group-hover:text-text/100 transition-colors">{text}</div>
        </div>
    );
};
