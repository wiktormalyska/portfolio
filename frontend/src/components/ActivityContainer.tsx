import {ReactNode} from "react";

interface ActivityContainerProps {
    Icon: ReactNode
    Text: ReactNode
    Description: ReactNode
}

export function ActivityContainer({Icon, Text, Description}: ActivityContainerProps) {
    return (
        <div className="glass-card flex flex-col w-full p-6">
            <div className="flex flex-row gap-5">
                <div className="flex items-center w-16 h-full justify-center shrink-0 text-accent">
                    {Icon}
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div className="font-display text-xl font-semibold max-sm:text-base max-md:text-lg text-text">
                        {Text}
                    </div>
                    <div className="text-text/70 text-sm leading-relaxed max-sm:text-xs">
                        {Description}
                    </div>
                </div>
            </div>
        </div>
    );
}
