import {m} from "framer-motion";
import {ActivityContainer} from "../components/ActivityContainer.tsx";
import {CommandLineIcon} from "../components/icons/CommandLineIcon.tsx";
import {WebsiteIcon} from "../components/icons/WebsiteIcon.tsx";
import {CpuChipIcon} from "../components/icons/CpuChipIcon.tsx";
import {ServerStackIcon} from "../components/icons/ServerStackIcon.tsx";
import {TechnologyContainer, TechnologyType} from "../components/TechnologyContainer.tsx";
import {LinkedInIcon} from "../components/icons/LinkedInIcon.tsx";
import {siGithub} from "simple-icons";
import {LinkIconComponent} from "../components/LinkIconComponent.tsx";
import {EnvelopeIcon} from "../components/icons/EnvelopeIcon.tsx";
import {useNavigate} from "react-router-dom";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: {opacity: 0, y: 24},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

export function HomePage() {
    const navigate = useNavigate();

    return (
        <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="w-full flex justify-center pt-10 transition-opacity max-md:pt-4 max-lg:pt-8">
            <div
                className="flex flex-col justify-items-center items-center w-[70%] pb-16 gap-14 max-lg:w-[92%] max-lg:gap-8">

                {/* Hero */}
                <m.div
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.1}}
                    className="flex flex-row max-lg:flex-col w-full gap-10 max-lg:gap-5">
                    <div
                        className="w-full lg:max-w-52 max-lg:justify-center max-lg:flex max-lg:flex-col max-lg:w-full max-lg:items-center">
                        <div className="relative">
                            <img
                                src="/img/prof.jpeg"
                                alt="Profile"
                                className="rounded-2xl object-cover w-full max-sm:max-w-32 max-md:max-w-52 max-lg:max-w-72 ring-2 ring-accent/20"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent pointer-events-none"/>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 justify-center">
                        <div className="inline-flex max-lg:justify-center">
                            <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent">
                                Currently Employed
                            </span>
                        </div>
                        <div className="font-display text-5xl font-extrabold tracking-tight max-lg:text-center max-md:text-3xl text-text">
                            Wiktor Małyska
                        </div>
                        <div className="font-display text-3xl font-extrabold tracking-tight max-lg:justify-center flex flex-row gap-2 max-md:text-xl">
                            <span className="text-text/50">SOFTWARE</span>
                            <span className="bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text">
                                DEVELOPER
                            </span>
                        </div>
                        <p className="text-text/60 text-base leading-relaxed max-w-lg max-lg:text-center max-md:text-sm">
                            I build robust backend systems, modern web frontends, and tinker with electronics & 3D printing. Passionate about clean code and automation.
                        </p>
                        <div className="flex flex-row gap-3 pt-2 max-lg:justify-center flex-wrap">
                            <LinkIconComponent icon={<LinkedInIcon size={18}/>} text={"LinkedIn"}
                                               href="https://www.linkedin.com/in/wiktor-ma%C5%82yska-a88b31244/"/>
                            <LinkIconComponent icon={siGithub} text={"GitHub"} fill={"ebeff6"}
                                               href="https://github.com/wiktormalyska"/>
                            <LinkIconComponent icon={<EnvelopeIcon size={18}/>} text={"Email"}
                                               href={"mailto:wiktormalyska03@gmail.com"}/>
                            <button
                                onClick={() => navigate("/projects")}
                                className="flex items-center px-5 py-2 rounded-xl bg-accent/20 border border-accent/40 text-accent font-semibold text-base hover:bg-accent/30 hover:border-accent/60 transition-all duration-300 cursor-pointer max-sm:text-sm"
                            >
                                View Projects →
                            </button>
                        </div>
                    </div>
                </m.div>

                {/* What I'm Doing */}
                <m.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    className="w-full flex flex-col gap-5">
                    <m.div variants={itemVariants} className="section-heading">What I'm Doing</m.div>
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4">
                        <m.div variants={itemVariants}>
                            <ActivityContainer Icon={CommandLineIcon()} Text={"Backend Development"}
                                               Description={"I build backend systems using Spring, focusing on RESTful APIs, database integration, and application performance."}/>
                        </m.div>
                        <m.div variants={itemVariants}>
                            <ActivityContainer Icon={WebsiteIcon()} Text={"Frontend Development"}
                                               Description={"I create dynamic web applications with React, Tailwind CSS, and Vite, focusing on smooth user experiences and fast performance."}/>
                        </m.div>
                        <m.div variants={itemVariants}>
                            <ActivityContainer Icon={ServerStackIcon()} Text={"DevOps"}
                                               Description={"I manage infrastructure and deployment using Docker, and CI/CD pipelines to ensure scalability, reliability, and automation."}/>
                        </m.div>
                        <m.div variants={itemVariants}>
                            <ActivityContainer Icon={CpuChipIcon()} Text={"Electronics & 3D Printing"}
                                               Description={"I work with ESP32 and DIY electronics, designing and printing custom 3D components for automation and embedded systems projects."}/>
                        </m.div>
                    </div>
                </m.div>

                {/* Technologies */}
                <m.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1}}
                    className="w-full flex flex-col gap-5">
                    <m.div variants={itemVariants} className="section-heading">Technologies I Use</m.div>
                    <m.div variants={itemVariants}><TechnologyContainer type={TechnologyType.FRONTEND}/></m.div>
                    <m.div variants={itemVariants}><TechnologyContainer type={TechnologyType.BACKEND}/></m.div>
                    <m.div variants={itemVariants}><TechnologyContainer type={TechnologyType.DEVOPS}/></m.div>
                    <m.div variants={itemVariants}><TechnologyContainer type={TechnologyType.HOMELAB}/></m.div>
                    <m.div variants={itemVariants}><TechnologyContainer type={TechnologyType.ELECTRONICS}/></m.div>
                </m.div>
            </div>
        </m.div>

    );
}
