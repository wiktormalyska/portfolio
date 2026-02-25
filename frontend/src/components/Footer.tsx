import {FaGithub, FaLinkedin} from "react-icons/fa6";

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="w-full mt-auto border-t border-[rgba(148,175,213,0.12)] bg-[rgba(8,12,18,0.6)] backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-5 gap-3 max-sm:px-4">
                <span className="text-sm text-text/40 font-medium">© {year} Wiktor Małyska</span>
                <div className="flex flex-row items-center gap-5">
                    <a href="https://github.com/wiktormalyska" target="_blank" rel="noopener noreferrer"
                       className="text-text/40 hover:text-text/80 transition-colors duration-200">
                        <FaGithub size={18}/>
                    </a>
                    <a href="https://www.linkedin.com/in/wiktor-ma%C5%82yska-a88b31244/" target="_blank" rel="noopener noreferrer"
                       className="text-text/40 hover:text-text/80 transition-colors duration-200">
                        <FaLinkedin size={18}/>
                    </a>
                    <a href="mailto:wiktormalyska03@gmail.com"
                       className="text-sm text-text/40 hover:text-accent transition-colors duration-200">
                        wiktormalyska03@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    )
}