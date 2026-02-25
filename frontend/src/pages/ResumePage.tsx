import {CountryFlag} from "ts-react-emoji-flag"
import {ReactNode} from "react";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ResumePreview} from '../components/ResumePreview';

interface languageOptions {
    code: string,
    element: ReactNode,
    iconCode: string,
    pdfFile: string
}

const languages: languageOptions[] = [
    {
        code: 'PL',
        element: <ResumePreview file="/Wiktor_Malyska_PL.pdf" pageNumber={1}/>,
        iconCode: 'PL',
        pdfFile: '/Wiktor_Malyska_PL.pdf'
    },
    {
        code: 'ENG',
        element: <ResumePreview file="/Wiktor_Malyska_ENG.pdf" pageNumber={1}/>,
        iconCode: 'GB',
        pdfFile: '/Wiktor_Malyska_ENG.pdf'
    }
]

export function ResumePage() {

    const [selectedLang, setSelectedLang] = useState(languages[0]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = selectedLang.pdfFile;
        link.download = `Wiktor_Malyska_${selectedLang.code}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-10 max-lg:pt-2 transition-opacity flex-col text-center pl-20 pr-20 max-md:pl-5 max-md:pr-5">
            <span
                className="bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text text-4xl font-extrabold max-lg:text-2xl">
                RESUME
            </span>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                className="flex flex-row w-full mt-5 justify-center gap-5 max-md:gap-3 text-center items-center text-xl max-md:text-base">
                <div
                    className="absolute opacity-6 rounded-2xl backdrop-blur-4xl blur-xs bg-text w-[28%] max-md:w-[50%] h-15 pointer-events-none"/>
                {languages.map(language => (
                    <motion.div
                        key={language.code}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className={`bg-neutral-900/30 p-2 pl-3 pr-3 max-md:pl-2 max-md:pr-2 rounded-2xl flex flex-row gap-2 cursor-pointer transition-all ${
                            selectedLang.code === language.code ? 'ring-2 ring-primary' : ''
                        }`}
                        onClick={() => setSelectedLang(language)}
                    >
                        <CountryFlag countryCode={language.iconCode}/>
                        <span className="max-sm:hidden">{language.code}</span>
                    </motion.div>
                ))}
                <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    onClick={handleDownload}
                    className="bg-neutral-900/30 p-2 pl-3 pr-3 max-md:pl-2 max-md:pr-2 rounded-2xl flex flex-row gap-2 cursor-pointer hover:bg-neutral-900/50 transition-all ml-5 max-md:ml-2"
                    title="Download Resume"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span className="max-sm:hidden">Download</span>
                </motion.button>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.4}}
                className="flex flex-col items-center">
                <div className="mt-5 w-[70%] max-md:w-[95%] flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedLang.code}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -10}}
                            transition={{duration: 0.3}}
                            className="w-full"
                        >
                            {selectedLang.element}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    )
}