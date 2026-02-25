import {motion} from "motion/react";
import {GetListOfIconsFromTechnologyList} from "../components/TechnologyListDescryptor.tsx";
import {usePortfolioProjects} from "../hooks/PortfilioProjectsHook.tsx";

// Skeleton loader component
function ProjectSkeleton() {
    return (
        <div className="w-[50%] max-2xl:w-full">
            <div className="relative flex flex-col w-full p-2 h-full">
                <div className="absolute inset-0 rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6"/>
                {/* Image skeleton */}
                <div className="w-full rounded-2xl bg-text opacity-10 aspect-video animate-pulse"/>
                <div className="text-lg w-full flex flex-col justify-start text-start pl-5 pr-5 pb-5 pt-5 gap-5 max-lg:gap-2 max-lg:p-2">
                    {/* Title skeleton */}
                    <div className="h-8 bg-text opacity-10 rounded w-3/4 animate-pulse max-lg:h-6"/>
                    <div className="flex w-full flex-col justify-between gap-3">
                        {/* Icons skeleton */}
                        <div className="flex w-full flex-row justify-start gap-5 max-lg:gap-2">
                            <div className="h-8 w-8 bg-text opacity-10 rounded animate-pulse"/>
                            <div className="h-8 w-8 bg-text opacity-10 rounded animate-pulse"/>
                            <div className="h-8 w-8 bg-text opacity-10 rounded animate-pulse"/>
                        </div>
                        {/* Description skeleton */}
                        <div className="pt-2 space-y-2">
                            <div className="h-4 bg-text opacity-10 rounded w-full animate-pulse"/>
                            <div className="h-4 bg-text opacity-10 rounded w-5/6 animate-pulse"/>
                            <div className="h-4 bg-text opacity-10 rounded w-4/6 animate-pulse"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProjectsPage() {

    const {data: projects, isLoading, error} = usePortfolioProjects('wiktormalyska')

    if (isLoading) {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="w-full flex justify-center pt-10 max-lg:pt-2 transition-opacity flex-col text-center pl-20 pr-20 max-md:pl-5 max-md:pr-5">
                <span
                    className="bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text text-4xl font-extrabold max-lg:text-2xl">
                    PROJECTS
                </span>
                <div className="flex flex-row max-xl:flex-col gap-10 pt-10 max-lg:pt-3">
                    <ProjectSkeleton/>
                    <ProjectSkeleton/>
                </div>
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="w-full flex justify-center items-center pt-20">
                <div className="text-xl text-red-400">Error loading projects.</div>
            </motion.div>
        );
    }

    if (!projects || projects.length === 0) {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="w-full flex justify-center items-center pt-20">
                <div className="text-xl opacity-70">No projects found.</div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-10 max-lg:pt-2 transition-opacity flex-col text-center pl-20 pr-20 max-md:pl-5 max-md:pr-5">
            <span
                className="bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text text-4xl font-extrabold max-lg:text-2xl">
                PROJECTS
            </span>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                className="flex flex-row max-xl:flex-col gap-10 pt-10 max-lg:pt-3">
                {projects!.map((project, index) => {
                    return (
                        <motion.a
                            key={project.gitHubRepositoryId}
                            href={project.repositoryUrl}
                            target="_blank"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.3 + index * 0.1}}
                            className="w-[50%] max-2xl:w-full hover:scale-[1.02] transition-transform duration-300">
                            <div className="relative flex flex-col w-full p-2 h-full">
                                <div
                                    className="absolute inset-0 rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6"/>
                                {/* Fixed aspect ratio container to prevent jumping */}
                                <div className="w-full aspect-video rounded-2xl overflow-hidden">
                                    <img
                                        className="w-full h-full rounded-2xl object-cover object-top z-40"
                                        src={project.imageUrl}
                                        alt={project.name}
                                        onError={(e) => (e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png")}
                                    />
                                </div>
                                <div
                                    className="text-lg w-full flex flex-col justify-start text-start pl-5 pr-5 pb-5 pt-5 gap-5 max-lg:gap-2 max-lg:p-2">
                                    <span
                                        className="text-2xl font-bold tracking-wide max-lg:text-lg">{project.name}</span>
                                    <div className="flex w-full flex-col justify-between">
                                        <div
                                            className="flex w-full flex-row justify-start gap-5 max-lg:gap-2 max-lg:flex-col">
                                            <GetListOfIconsFromTechnologyList
                                                technologiesString={project.technologies}/>
                                        </div>
                                        <span
                                            className="pt-5 text-justify text-base font-medium max-lg:pt-2 max-lg:text-sm">
                                            {project.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}