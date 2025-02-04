import {motion} from "motion/react";

export function ProjectsPage () {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="w-full flex justify-center pt-20 transition-opacity">
            <div className="text-6xl">This sub-page is still in progress...</div>

        </motion.div>
    )
}