import {motion} from "motion/react";
import CountryFlag from "ts-react-emoji-flag"

export function ResumePage () {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-10 transition-opacity flex-col text-center pl-20 pr-20">
            <span
                className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold">
                RESUME
            </span>
            <div
                className="flex flex-row w-full mt-5 justify-center gap-5 text-center items-center text-xl">
                <div
                    className="absolute opacity-6 rounded-2xl backdrop-blur-4xl blur-xs bg-text w-[50%] h-15" />
                <div
                    className="bg-neutral-900/30 p-2 rounded-2xl" >
                    <CountryFlag countryCode={"PL"} />
                </div>
                <div>
                    PL
                </div>
            </div>

        </motion.div>
    )
}