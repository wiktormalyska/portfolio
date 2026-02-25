import {CountryFlag} from "ts-react-emoji-flag"
import {ReactNode} from "react";
import {useState} from "react";
import {AnimatePresence, m} from "framer-motion";
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
        <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="w-full flex justify-center pt-12 max-lg:pt-4 flex-col items-center pb-16 px-20 max-md:px-5">
            <span className="font-display bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold max-lg:text-3xl tracking-tight">
                RESUME
            </span>
            <m.div
                initial={{opacity: 0, y: 16}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7, delay: 0.2}}
                className="flex flex-row w-full mt-6 justify-center gap-3 max-md:gap-2 text-center items-center">
                {languages.map(language => (
                    <m.div
                        key={language.code}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className={`glass-card px-4 py-2 max-md:px-3 flex flex-row gap-2 cursor-pointer transition-all ${
                            selectedLang.code === language.code
                                ? 'border-accent/60 bg-accent/10 text-accent'
                                : 'text-text/70 hover:text-text'
                        }`}
                        onClick={() => setSelectedLang(language)}
                    >
                        <CountryFlag countryCode={language.iconCode}/>
                        <span className="font-semibold text-sm max-sm:hidden">{language.code}</span>
                    </m.div>
                ))}
                <m.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    onClick={handleDownload}
                    className="glass-card px-4 py-2 max-md:px-3 flex flex-row gap-2 cursor-pointer text-text/70 hover:text-accent transition-all ml-3"
                    title="Download Resume"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span className="text-sm font-semibold max-sm:hidden">Download</span>
                </m.button>
            </m.div>
            <m.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7, delay: 0.35}}
                className="flex flex-col items-center w-full">
                <div className="mt-6 w-[70%] max-md:w-[95%] flex justify-center">
                    <AnimatePresence mode="wait">
                        <m.div
                            key={selectedLang.code}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -10}}
                            transition={{duration: 0.3}}
                            className="w-full"
                        >
                            {selectedLang.element}
                        </m.div>
                    </AnimatePresence>
                </div>
            </m.div>
        </m.div>
    )
}