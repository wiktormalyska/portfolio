import {IconType} from "react-icons";
import {FaEnvelope, FaPhone, FaLinkedin, FaGithub} from "react-icons/fa6";
import {m} from "framer-motion";

export const ContactInfoList = () => {
    interface contactInfo {
        name: string
        icon: IconType
        details: string
        url?: string
    }

    const contactInfoList: contactInfo[] = [
        {
            name: "Email",
            icon: FaEnvelope,
            details: "wiktormalyska03@gmail.com",
            url: "mailto:wiktormalyska03@gmail.com"
        },
        {
            name: "Phone",
            icon: FaPhone,
            details: "+48 530 386 532",
            url: "tel:+48530386532"
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            details: "Wiktor Małyska",
            url: "https://www.linkedin.com/in/wiktor-ma%C5%82yska-a88b31244/"
        },
        {
            name: "GitHub",
            icon: FaGithub,
            details: "wiktormalyska",
            url: "https://github.com/wiktormalyska"
        }
    ]

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    }

    const handleKeyPress = (event: React.KeyboardEvent, url: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick(url);
        }
    }


    return (
        <div className="grid grid-cols-2 max-xl:flex max-xl:flex-col text-center items-center gap-4 max-xl:w-full w-[70%]">
            {contactInfoList.map((contactInfo, index) => (
                <m.div
                    key={contactInfo.name}
                    className="glass-card flex p-6 w-full group cursor-pointer"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: index * 0.1}}
                    onClick={() => contactInfo.url && handleClick(contactInfo.url)}
                    onKeyDown={(e) => contactInfo.url && handleKeyPress(e, contactInfo.url)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open ${contactInfo.name}: ${contactInfo.details}`}
                >
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 border border-accent/25 text-accent group-hover:bg-accent/25 group-hover:border-accent/50 transition-all duration-300 shrink-0">
                                {contactInfo.icon({size: 22})}
                            </div>
                            <span className="font-display font-semibold text-xl text-text group-hover:text-primary transition-colors">{contactInfo.name}</span>
                            <span className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity text-lg">→</span>
                        </div>
                        <span className="text-sm text-text/60 text-start group-hover:text-text/80 transition-colors break-all leading-relaxed">{contactInfo.details}</span>
                    </div>
                </m.div>
            ))}
        </div>
    )
}