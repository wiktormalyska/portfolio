import {IconType} from "react-icons";
import {FaEnvelope} from "react-icons/fa6";

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
            url: "mail"
        }
    ]

    return (
        <>
            <div className="flex flex-col text-center items-center gap-5">
                {contactInfoList.map(contactInfo => {
                    return (
                        <div className="relative flex p-5 w-full">
                            {/*TODO: Add if where if url add absolute clickable for tile*/}
                            {contactInfo.url != undefined }
                            <div className="absolute inset-0  rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6"></div>
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