import {ReactNode} from "react";

interface ActivityContainerProps {
    Icon: ReactNode
    Text: ReactNode
    Description: ReactNode
}

export function ActivityContainer({Icon, Text, Description}: ActivityContainerProps) {
    return (
        <div className="relative flex flex-col w-full p-5 rounded-2xl">
            <div className="absolute inset-0  rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6 z-0"></div>
            <div className="relative flex flex-row z-10 gap-5">
                <div className="flex items-center w-20 h-full justify-center">
                    {Icon}
                </div>
                <div className="flex flex-col w-full gap-1">
                    <div className="text-2xl font-medium max-sm:text-base max-md:text-xl">
                        {Text}
                    </div>
                    <div className="max-sm:text-xs max-md:text-sm">
                        {Description}
                    </div>
                </div>
            </div>
        </div>
    );
}
