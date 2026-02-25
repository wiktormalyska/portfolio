import {IconType} from "react-icons";
import {FaEnvelope, FaPhone, FaLinkedin, FaGithub} from "react-icons/fa6";
import {LazyMotion, domAnimation, m} from "framer-motion";

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
        <LazyMotion features={domAnimation}>
            <div className="grid grid-cols-2 max-xl:flex max-xl:flex-col text-center items-center gap-5 max-xl:w-full w-[70%]">
                {contactInfoList.map((contactInfo, index) => {
                    return (
                        <m.div
                            key={contactInfo.name}
                            className="relative flex p-6 w-full group"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            {contactInfo.url && (
                                <div
                                    role="button"
                                    tabIndex={0}
                                    className="absolute inset-0 cursor-pointer z-10 rounded-2xl"
                                    onClick={() => handleClick(contactInfo.url!)}
                                    onKeyDown={(e) => handleKeyPress(e, contactInfo.url!)}
                                    aria-label={`Open ${contactInfo.name}: ${contactInfo.details}`}
                                />
                            )}
                            <div className="absolute inset-0 rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6 group-hover:opacity-10 transition-opacity"></div>
                            <div className="flex flex-col gap-3 text-2xl w-full z-0">
                                <span className="flex flex-row items-center gap-3 group-hover:scale-105 transition-transform">
                                    {contactInfo.icon({size: 28})}
                                    <span className="font-semibold">{contactInfo.name}</span>
                                </span>
                                <span className="text-base text-start opacity-70 group-hover:opacity-90 transition-opacity break-all">{contactInfo.details}</span>
                            </div>
                        </m.div>
                    )
                })}
            </div>
        </LazyMotion>
    )
}