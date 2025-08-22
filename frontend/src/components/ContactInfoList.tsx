import {IconType} from "react-icons";
import {FaEnvelope, FaPhone} from "react-icons/fa6";

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
            details: "+48530386532",
            url: "tel:+48530386532",
        }
    ]

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    }


    return (
        <>
            <div className="grid grid-cols-2 max-xl:flex max-xl:flex-col text-center items-center gap-5 max-xl:w-full w-[60%]">
                {contactInfoList.map(contactInfo => {
                    return (
                        <div key={contactInfo.name} className="relative flex p-5 w-full">
                            {contactInfo.url && (
                                <div
                                    className="absolute inset-0 cursor-pointer z-10 rounded-2xl"
                                    onClick={() => handleClick(contactInfo.url!)}
                                />
                            )}
                            <div className="absolute inset-0 rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6"></div>
                            <div className="flex flex-col gap-2 text-2xl">
                                <span
                                    className="flex flex-row items-center gap-2">{contactInfo.icon({})} {contactInfo.name} </span>
                                <span className="text-lg text-start opacity-60">{contactInfo.details}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}