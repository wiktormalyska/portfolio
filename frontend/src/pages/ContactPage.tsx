import {motion} from "motion/react";
import {ContactInfoList} from "../components/ContactInfoList.tsx";

export function ContactPage() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-10 max-lg:pt-2 transition-opacity flex-col items-center text-center pl-20 pr-20 max-md:pl-5 max-md:pr-5">
            <span
                className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold max-lg:text-3xl ">
                CONTACT
            </span>

            <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                className="mt-5 text-lg opacity-70 max-w-2xl max-lg:text-base"
            >
                Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>

            <div className="mt-10 w-full flex justify-center">
                <ContactInfoList/>
            </div>

        </motion.div>
    )
}