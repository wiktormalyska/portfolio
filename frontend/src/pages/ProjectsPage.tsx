import {m, type Variants} from "framer-motion";
import {GetListOfIconsFromTechnologyList} from "../components/TechnologyListDescryptor.tsx";
import {usePortfolioProjects} from "../hooks/PortfilioProjectsHook.tsx";

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
    hidden: {opacity: 0, y: 28},
    visible: {opacity: 1, y: 0, transition: {duration: 0.55, ease: "easeOut" as const}},
};

const FALLBACK_IMAGE_URL = "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png";

function normalizeExternalUrl(url: string | undefined) {
    if (!url) {
        return null;
    }

    const trimmed = url.trim();
    if (!trimmed) {
        return null;
    }

    try {
        const parsed = new URL(trimmed);
        return parsed.href;
    } catch {
        return null;
    }
}

function resolveProjectImageUrl(imageUrl: string) {
    if (!imageUrl) {
        return FALLBACK_IMAGE_URL;
    }

    try {
        const url = new URL(imageUrl);
        const trimmedPath = url.pathname.replace(/^\/+|\/+$/g, "");

        // Convert GitHub blob/raw page URLs to direct raw file links for stable image loading.
        const blobMatch = trimmedPath.match(/^([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/);
        if (url.hostname === "github.com" && blobMatch) {
            const [, owner, repo, branch, filePath] = blobMatch;
            return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
        }

        const rawRefsMatch = trimmedPath.match(/^([^/]+)\/([^/]+)\/raw\/refs\/heads\/([^/]+)\/(.+)$/);
        if (url.hostname === "github.com" && rawRefsMatch) {
            const [, owner, repo, branch, filePath] = rawRefsMatch;
            return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
        }

        return imageUrl;
    } catch {
        return imageUrl;
    }
}

function ProjectSkeleton() {
    return (
        <div className="glass-card w-[50%] max-2xl:w-full p-2 animate-pulse">
            <div className="w-full rounded-xl bg-text/10 aspect-video"/>
            <div className="p-5 flex flex-col gap-4">
                <div className="h-7 bg-text/10 rounded w-3/4"/>
                <div className="flex gap-3">
                    <div className="h-8 w-8 bg-text/10 rounded"/>
                    <div className="h-8 w-8 bg-text/10 rounded"/>
                    <div className="h-8 w-8 bg-text/10 rounded"/>
                </div>
                <div className="space-y-2">
                    <div className="h-4 bg-text/10 rounded w-full"/>
                    <div className="h-4 bg-text/10 rounded w-5/6"/>
                    <div className="h-4 bg-text/10 rounded w-4/6"/>
                </div>
            </div>
        </div>
    );
}

export function ProjectsPage() {
    const {data: projects, isLoading, error} = usePortfolioProjects('wiktormalyska')

    if (isLoading) {
        return (
            <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}
                className="w-full flex justify-center pt-12 max-lg:pt-4 flex-col items-center px-20 max-md:px-5 gap-10">
                <span className="font-display bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold max-lg:text-3xl tracking-tight">
                    PROJECTS
                </span>
                <div className="flex flex-row max-xl:flex-col gap-6 w-full">
                    <ProjectSkeleton/><ProjectSkeleton/>
                </div>
            </m.div>
        );
    }

    if (error) {
        return (
            <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}
                className="w-full flex justify-center items-center pt-20">
                <div className="text-xl text-red-400">Error loading projects.</div>
            </m.div>
        );
    }

    if (!projects || projects.length === 0) {
        return (
            <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}
                className="w-full flex justify-center items-center pt-20">
                <div className="text-xl opacity-70">No projects found.</div>
            </m.div>
        );
    }

    return (
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}
            className="w-full flex justify-center pt-12 max-lg:pt-4 flex-col items-center px-20 max-md:px-5 pb-16">
            <span className="font-display bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text text-5xl font-extrabold max-lg:text-3xl tracking-tight mb-10 max-lg:mb-5">
                PROJECTS
            </span>
            <m.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-row max-xl:flex-col gap-6 w-full">
                {projects!.map((project) => {
                    const githubUrl = normalizeExternalUrl(project.repositoryUrl);
                    const websiteUrl = normalizeExternalUrl(project.websiteUrl ?? project.homepageUrl ?? project.liveUrl);
                    const hasAnyAction = Boolean(githubUrl || websiteUrl);

                    return (
                    <m.div
                        key={project.gitHubRepositoryId}
                        variants={itemVariants}
                        whileHover={{y: -4}}
                        className="glass-card w-[50%] max-2xl:w-full overflow-hidden group">
                        <div className="w-full aspect-video overflow-hidden">
                            <img
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                src={resolveProjectImageUrl(project.imageUrl)}
                                alt={project.name}
                                onError={(e) => {
                                    if (e.currentTarget.dataset.fallbackApplied === "1") {
                                        return;
                                    }
                                    e.currentTarget.dataset.fallbackApplied = "1";
                                    e.currentTarget.src = FALLBACK_IMAGE_URL;
                                }}
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-4 max-lg:p-4 max-lg:gap-3">
                            <span className="font-display text-2xl font-bold tracking-wide max-lg:text-lg text-text group-hover:text-primary transition-colors">
                                {project.name}
                            </span>
                            <div className="flex w-full flex-row justify-start gap-3 max-lg:gap-2 flex-wrap">
                                <GetListOfIconsFromTechnologyList technologiesString={project.technologies}/>
                            </div>
                            <span className="text-text/70 text-sm leading-relaxed text-justify max-lg:text-xs">
                                {project.description}
                            </span>
                            {hasAnyAction && (
                                <div className="flex flex-wrap items-center gap-3 pt-2 mt-auto">
                                    {githubUrl && (
                                        <a
                                            href={githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-lg text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {websiteUrl && (
                                        <a
                                            href={websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-lg text-sm font-semibold border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
                                        >
                                            Website
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </m.div>
                )})}
            </m.div>
        </m.div>
    )
}