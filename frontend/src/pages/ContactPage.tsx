import {m} from "framer-motion";
import {ContactInfoList} from "../components/ContactInfoList.tsx";

export function ContactPage() {
    return (
        <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="w-full flex justify-center pt-12 max-lg:pt-4 flex-col items-center pb-16 px-20 max-md:px-5">
            <span className="font-display bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold max-lg:text-3xl tracking-tight">
                CONTACT
            </span>

            <m.p
                initial={{opacity: 0, y: 16}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7, delay: 0.2}}
                className="mt-4 text-base text-text/60 max-w-xl text-center leading-relaxed max-lg:text-sm"
            >
                Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </m.p>

            <m.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7, delay: 0.35}}
                className="mt-10 w-full flex justify-center max-lg:mt-6">
                <ContactInfoList/>
            </m.div>
        </m.div>
    )
}