import {motion} from "motion/react";
import {ActivityContainer} from "../components/ActivityContainer.tsx";
import {CommandLineIcon} from "../components/icons/CommandLineIcon.tsx";
import {WebsiteIcon} from "../components/icons/WebsiteIcon.tsx";

export function HomePage() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-20 transition-opacity">
            <div className="flex flex-col justify-items-center items-center w-[70%] p-10 gap-10">
                <div className="flex flex-row container gap-10">
                    <div className="container max-w-70">
                        <img
                            src="/prof.jpeg"
                            alt="Profile"
                            className="rounded-2xl object-cover container"
                        />
                    </div>
                    <div className="container flex flex-col justify-between gap-5">
                        <div className="text-4xl flex flex-row container font-extrabold gap-4 ">
                            <span>SOFTWARE</span>
                            <span
                                className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text">
                                DEVELOPER
                            </span>
                        </div>
                        <div className="h-full flex flex-column">
                            <p className="mt-4 text-text">
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
                    <div className="text-3xl font-bold">What I'm Doing</div>
                    <div className="flex flex-row container justify-evenly gap-5">
                        <ActivityContainer Icon={CommandLineIcon()} Text={"Backend Development"} Description={"I build backend systems using Spring, focusing on RESTful APIs, database integration, and application performance."}/>
                        <ActivityContainer Icon={WebsiteIcon()} Text={"Frontend Development"} Description={"I create dynamic web applications with React, Tailwind CSS, and Vite, focusing on smooth user experiences and fast performance."}/>
                    </div>

                </div>
            </div>

        </motion.div>


    );
}
