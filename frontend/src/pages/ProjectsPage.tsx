import {motion} from "motion/react";
import {GetListOfIconsFromTechnologyList} from "../components/TechnologyListDescryptor.tsx";
import {usePortfolioProjects} from "../hooks/PortfilioProjectsHook.tsx";

export function ProjectsPage() {

    const {data: projects, isLoading, error} = usePortfolioProjects('wiktormalyska')

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading projects.</div>;
    }

    if (!projects || projects.length === 0) {
        return <div>No projects found.</div>;
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-10 transition-opacity flex-col text-center pl-20 pr-20">
            <span
                className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold">
                PROJECTS
            </span>
            <div className="flex flex-row max-2xl:flex-col gap-10 pt-10">
                {projects!.map(project => {
                    return (
                        <a key={project.gitHubRepositoryId} href={project.repositoryUrl} target="_blank" className="w-[50%] max-2xl:w-full ">
                            <div className="relative flex flex-col w-full p-2 h-full">
                                <div
                                    className="absolute inset-0  rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6"/>
                                <img className="w-full rounded-2xl object-cover min-h-50 max-h-100 z-40" src={project.imageUrl}
                                     alt={project.name}
                                     onError={(e) => (e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png")}
                                />
                                <div
                                    className="text-lg w-full flex flex-col justify-start text-start pl-5 pr-5 pb-5 pt-5 gap-5">
                                    <span className="text-3xl font-bold tracking-wide">{project.name}</span>
                                    <div className="flex w-full flex-col justify-between">
                                        <div className="flex w-full flex-row justify-start gap-5">
                                            <GetListOfIconsFromTechnologyList technologiesString={project.technologies}/>
                                        </div>
                                        <span className="pt-5 text-justify text-xl font-medium">
                                            {project.description}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </motion.div>
    )
}