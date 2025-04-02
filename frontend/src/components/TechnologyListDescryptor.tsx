import {SimpleIcon, siReact, siTailwindcss, siTypescript} from "simple-icons";
import {ReactNode} from "react";
import {JwtIcon} from "./icons/JwtIcon.tsx";

export interface TechnologyType {
    name: string,
    icon: SimpleIcon | ReactNode;
    color?: string,
}

const TechnologiesRecord: Record<string, TechnologyType> = {
    React: {
        name: "React",
        icon: siReact,
    },
    TypeScript: {
        name: "TypeScript",
        icon: siTypescript,
    },
    Jwt: {
        name: "Jwt",
        icon: <JwtIcon size={32}/>,
    },
    "Tailwind Css": {
        name: "Tailwind Css",
        icon: siTailwindcss,
    }
}

interface GetListOfIconsFromTechnologyListProps {
    technologiesString: string[]
}

export const GetListOfIconsFromTechnologyList = ({technologiesString}: GetListOfIconsFromTechnologyListProps): ReactNode[] => {
    return technologiesString.map(technologyString => {
        const technology = TechnologiesRecord[technologyString];

        if (!technology || !technology.icon) {
            return (
                <div
                    className="flex flex-row gap-3 justify-center items-center p-2 pl-4 pr-4 bg-neutral-900 rounded-full">
                    <div key={technologyString}
                         className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-md">
                        ❓
                    </div>
                    {technologyString}
                </div>
            );
        }

        if (typeof technology.icon === "object" && "path" in technology.icon) {
            return (
                <div
                    className="flex flex-row gap-3 justify-center items-center p-2 pl-4 pr-4 bg-neutral-900/30 rounded-full">
                    <svg key={technologyString} className="w-8 h-8" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d={technology.icon.path} fill={"#" + technology.icon.hex}/>
                    </svg>
                    {technology.name}
                </div>
            );
        }

        return (
            <div className="flex flex-row gap-3 justify-center items-center p-2 pl-4 pr-4 bg-neutral-900/30 rounded-full">
                <div key={technologyString} className="w-8 h-8">
                    {technology.icon}
                </div>
                {technology.name}
            </div>
        );
    });
};


