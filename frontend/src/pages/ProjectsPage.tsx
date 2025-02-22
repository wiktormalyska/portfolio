import {motion} from "motion/react";
import {GetListOfIconsFromTechnologyList} from "../components/TechnologyListDescryptor.tsx";

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
                "description": "Projekt SmartGarden – Inteligentny system nawadniania roślin oparty na ESP32. Monitoruje wilgotność gleby, temperaturę i nasłonecznienie, automatycznie dostosowując podlewanie. Aplikacja mobilna umożliwia podgląd danych i ręczne sterowanie. Urządzenie drukowane w 3D, zasilane energią słoneczną.",
                "imageUrl": "https://wallpaperswide.com/download/bored_cat-wallpaper-1600x900.jpg",
                "technologies": [
                    "React",
                    "TypeScript",
                    "Tailwind Css"
                ],
                "forked": false
            },
            {
                "gitHubRepositoryId": 8872556029,
                "repositoryUrl": "https://github.com/wiktormalyska/portfolio",
                "name": "Bomva",
                "description": "BomvaBomvaBomvaBomvaBomva Bomva",
                "imageUrl": "https://wallpaperswide.com/download/bored_cat-wallpaper-1600x900.jpg",
                "technologies": [
                    "React",
                    "TypeScript",
                    "Tailwind Css",
                    "Jwt"
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
            {/*TODO: Uncomment when finished*/ }
            {/*<span*/}
            {/*    className="bg-gradient-to-r from-primary  to-accent inline-block text-transparent bg-clip-text text-6xl font-extrabold">*/}
            {/*    PROJECTS*/}
            {/*</span>*/}
            {/*<div className="flex flex-row gap-10 pt-10">*/}
            {/*    {mockedProjects.map(project => {*/}
            {/*        return (*/}
            {/*            <a key={project.gitHubRepositoryId} href={project.repositoryUrl} target="_blank" className="max-w-[50%]">*/}
            {/*                <div className="relative flex flex-col w-full p-2 h-full">*/}
            {/*                    <div*/}
            {/*                        className="absolute inset-0  rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6 h-[100%]"/>*/}
            {/*                    <img className="w-full h-120 rounded-4xl object-cover" src={project.imageUrl}*/}
            {/*                         alt={project.name}/>*/}
            {/*                    <div*/}
            {/*                        className="text-lg w-full flex flex-col justify-start text-start pl-5 pr-5 h-full">*/}
            {/*                        <span className="pt-1  text-3xl font-bold tracking-wide">{project.name}</span>*/}
            {/*                        <div className="flex w-full flex-col justify-between">*/}
            {/*                            <div className="flex w-full flex-row justify-start gap-5">*/}
            {/*                                <GetListOfIconsFromTechnologyList technologiesString={project.technologies}/>*/}
            {/*                            </div>*/}
            {/*                            <span className="pt-1">{project.description}</span>*/}
            {/*                        </div>*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}

        </motion.div>
    )
}

//TODO: Deskryptor tagów