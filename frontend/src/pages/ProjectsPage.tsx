import {motion} from "motion/react";

export function ProjectsPage() {

    interface Project {
        gitHubRepositoryId: number,
        repositoryUrl: string,
        name: string,
        description: string,
        imageUrl: string,
        technologies: string[],
        forked: boolean
    }

    const mockedProjects: Project[] =
        [
            {
                "gitHubRepositoryId": 887255609,
                "repositoryUrl": "https://github.com/wiktormalyska/portfolio",
                "name": "Portfolio",
                "description": "Portfolio project",
                "imageUrl": "https://wallpaperswide.com/download/bored_cat-wallpaper-1600x900.jpg",
                "technologies": [
                    "React",
                    "TypeScript",
                    "Tailwind Css"
                ],
                "forked": false
            },
            {
                "gitHubRepositoryId": 887255609,
                "repositoryUrl": "https://github.com/wiktormalyska/portfolio",
                "name": "Bomva",
                "description": "BomvaBomvaBomvaBomvaBomva Bomva",
                "imageUrl": "https://wallpaperswide.com/download/bored_cat-wallpaper-1600x900.jpg",
                "technologies": [
                    "React",
                    "TypeScript",
                    "Tailwind Css"
                ],
                "forked": false
            }
        ]


    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-10 transition-opacity flex-col text-center">
            <span
                className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text text-6xl font-extrabold">
                PROJECTS
            </span>
            <div className="flex flex-row gap-10 pt-10">
                {mockedProjects.map(project => {
                    return (
                        <a href={project.repositoryUrl} target="_blank">
                            <div className="relative flex flex-col w-full p-2">
                                <div
                                    className="absolute inset-0  rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6 z-0"/>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-7 pl-7 pr-7 text-2xl w-full flex flex-column justify-center">
                                    <div
                                        className="bg-neutral-800 h-10 w-full rounded-xl rounded-b-none opacity-50"/>
                                    <span className="absolute h-10 pt-1">{project.name}</span>
                                </div>
                                <img className="w-full h-full p-5 rounded-4xl object-cover" src={project.imageUrl}
                                     alt={project.name}/>
                                <div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-7 pl-7 pr-7 text-lg w-full flex flex-column justify-center">
                                    <div
                                        className="bg-neutral-800 h-20 w-full rounded-xl rounded-t-none opacity-50"/>
                                    <div className="absolute flex w-full flex-col h-20 mb-7 pl-7 pr-7 justify-between">
                                        <span className="h-10 pt-1">{project.description}</span>
                                        <div className="flex w-full flex-row justify-start gap-5 pl-5">
                                            {project.technologies.map(technology => {
                                                return (<span className="h-10 pt-1">{technology}</span>)
                                            })}
                                        </div>
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

//TODO: Deskryptor tagów