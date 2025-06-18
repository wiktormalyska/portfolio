import {motion} from "motion/react";
import {ContactInfoList} from "../components/ContactInfoList.tsx";

export function ContactPage() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-20 transition-opacity">
            <div className="flex flex-col gap-5 text-center w-80">
                <span className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold">
                CONTACT ME
                </span>
                <ContactInfoList/>
            </div>

        </motion.div>
    )
}