import {motion} from "motion/react";
import {ContactInfoList} from "../components/ContactInfoList.tsx";

export function ContactPage() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-10 transition-opacity max-md:pt-2 max-lg:pt-10">
            <div className="flex flex-col justify-items-center items-center w-[70%] p-10 gap-10 max-lg:w-[90%] max-lg:gap-5 max-lg:p-0">
                <span className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold">
                CONTACT ME
                </span>
                <ContactInfoList/>
            </div>

        </motion.div>
    )
}