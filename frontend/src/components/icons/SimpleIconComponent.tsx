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
        <div className="flex flex-col p-2 justify-center items-center gap-1 max-md:text-center">
            {typeof icon === "object" && "path" in icon ? (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={icon.path} fill={`#${fill ? fill : icon.hex}`}/>
                </svg>
            ) : (
                <div className="w-12 h-12">{icon}</div>
            )}
            <div className="text-xl max-sm:text-base max-md:text-lg">{text}</div>
        </div>
    );
};
