import {motion} from "motion/react";
import {ActivityContainer} from "../components/ActivityContainer.tsx";
import {CommandLineIcon} from "../components/icons/CommandLineIcon.tsx";
import {WebsiteIcon} from "../components/icons/WebsiteIcon.tsx";
import {CpuChipIcon} from "../components/icons/CpuChipIcon.tsx";
import {ServerStackIcon} from "../components/icons/ServerStackIcon.tsx";
import {TechnologyContainer, TechnologyType} from "../components/TechnologyContainer.tsx";

export function HomePage() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-20 transition-opacity max-sm:pt-2">
            <div className="flex flex-col justify-items-center items-center w-[70%] p-10 gap-10 max-sm:w-[90%] max-sm:gap-5 max-sm:p-0">
                <div className="flex flex-row max-sm:flex-col container gap-10 max-sm:gap-2">
                    <div className="container sm:max-w-70 max-sm:justify-center max-sm:flex">
                        <img
                            src="/img/prof.jpeg"
                            alt="Profile"
                            className="rounded-2xl object-cover container max-sm:max-w-30"
                        />
                    </div>
                    <div className="container flex flex-col justify-between gap-5">
                        <div className="text-4xl flex flex-row container font-extrabold gap-2 max-sm:justify-center max-sm:text-xl">
                            <span>SOFTWARE</span>
                            <span
                                className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text">
                                DEVELOPER
                            </span>
                        </div>
                        <div className="h-full flex flex-column">
                            <p className="mt-4 max-sm:mt-0 text-text max-sm:text-sm">
                                I'm a software developer with a passion for
                                building innovative solutions across various
                                domains. My journey spans from software
                                development to hands-on work with
                                3D printing, DIY electronics,
                                and DevOps practices.
                                I thrive on creating integrated
                                systems that blend hardware and software,
                                whether it's building responsive web
                                applications, developing embedded systems,
                                or setting up efficient server environments.
                                I'm continuously exploring new technologies,
                                striving to improve workflows,
                                and creating impactful projects that
                                merge the physical and digital worlds.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container flex flex-col gap-5">
                    <div className="text-3xl font-bold max-sm:text-xl">What I'm Doing</div>
                    <div className="flex flex-row container justify-evenly gap-5 max-sm:flex-col">
                        <ActivityContainer Icon={CommandLineIcon()} Text={"Backend Development"}
                                           Description={"I build backend systems using Spring, focusing on RESTful APIs, database integration, and application performance."}/>
                        <ActivityContainer Icon={WebsiteIcon()} Text={"Frontend Development"}
                                           Description={"I create dynamic web applications with React, Tailwind CSS, and Vite, focusing on smooth user experiences and fast performance."}/>
                    </div>
                    <div className="flex flex-row container justify-evenly gap-5 max-sm:flex-col">
                        <ActivityContainer Icon={ServerStackIcon()} Text={"DevOps"}
                                           Description={"I manage infrastructure and deployment using Docker, and CI/CD pipelines to ensure scalability, reliability, and automation."}/>
                        <ActivityContainer Icon={CpuChipIcon()} Text={"Electronics & 3D Printing"}
                                           Description={"I work with ESP32 and DIY electronics, designing and printing custom 3D components for automation and embedded systems projects."}/>
                    </div>
                </div>

                <div className="container flex flex-col gap-5">
                    <div className="text-3xl font-bold max-sm:text-xl">Technologies I Use</div>
                    <div className="flex flex-row container justify-evenly gap-5">
                        <TechnologyContainer type={TechnologyType.FRONTEND}/>
                    </div>
                    <div className="flex flex-row container justify-evenly gap-5">
                        <TechnologyContainer type={TechnologyType.BACKEND}/>
                    </div>
                    <div className="flex flex-row container justify-evenly gap-5">
                        <TechnologyContainer type={TechnologyType.DEVOPS}/>
                    </div>
                    <div className="flex flex-row container justify-evenly gap-5">
                        <TechnologyContainer type={TechnologyType.HOMELAB}/>
                    </div>
                    <div className="flex flex-row container justify-evenly gap-5">
                        <TechnologyContainer type={TechnologyType.ELECTRONICS}/>
                    </div>
                </div>
            </div>

        </motion.div>


    );
}
