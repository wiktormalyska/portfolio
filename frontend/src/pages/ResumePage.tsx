import {CountryFlag} from "ts-react-emoji-flag"
import {ReactNode} from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ResumePreview } from '../components/ResumePreview';

interface languageOptions {
    code: string,
    element: ReactNode,
    iconCode:  string
}

const languages: languageOptions[] = [
    {
        code: 'PL',
        element: <ResumePreview file="/Wiktor_Malyska_PL.pdf" pageNumber={1} />,
        iconCode: 'PL'
    },
    {
        code: 'ENG',
        element: <ResumePreview file="/Wiktor_Malyska_ENG.pdf" pageNumber={1} />,
        iconCode: 'GB'

    }
]

export function ResumePage() {

    const [selectedLang, setSelectedLang] = useState(languages[0]);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-10 transition-opacity max-md:pt-2 max-lg:pt-10">
            <div
                className="flex flex-col justify-items-center items-center w-[70%] p-10 gap-10 max-lg:w-[90%] max-lg:gap-5 max-lg:p-0">
            <span
                className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold">
                RESUME
            </span>
                <div
                    className="flex flex-row w-full mt-5 justify-center gap-5 text-center items-center text-xl">
                    <div
                        className="absolute opacity-6 rounded-2xl backdrop-blur-4xl blur-xs bg-text w-[50%] h-15 pointer-events-none"/>
                    {languages.map(language => (
                        <div
                            key={language.code}
                            className="bg-neutral-900/30 p-2 pl-3 pr-3 rounded-2xl flex flex-row gap-2 cursor-pointer"
                            onClick={() => setSelectedLang(language)}
                        >
                            <CountryFlag countryCode={language.iconCode}/>
                            {language.code}
                        </div>
                    ))}
                </div>
                <div className="mt-5 w-[70%]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedLang.code}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full"
                        >
                            {selectedLang.element}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}