import {NavLink} from "react-router-dom";
import {usePageContext} from "../../hooks/PageContext.tsx";
import {useEffect} from "react";

export function NavigationLinks() {
    const {page, setPage} = usePageContext()

    useEffect(() => {
        const currentPath = location.pathname.slice(1) || "home";
        setPage(currentPath);
    }, [setPage])

    return (
        <>
            <NavLink to={"/"} onClick={() => setPage("home")}
                     className={`nav-link ${page === "home" ? "nav-link-active" : ""}`}>
                <span>Home</span>
            </NavLink>
            <NavLink to={"/projects"} onClick={() => setPage("projects")}
                     className={`nav-link ${page === "projects" ? "nav-link-active" : ""}`}>
                <span>Projects</span>
            </NavLink>
            <NavLink to={"/resume"} onClick={() => setPage("resume")}
                     className={`nav-link ${page === "resume" ? "nav-link-active" : ""}`}>
                <span>Resume</span>
            </NavLink>
            <NavLink to={"/contact"} onClick={() => setPage("contact")}
                     className={`nav-link ${page === "contact" ? "nav-link-active" : ""}`}>
                <span>Contact</span>
            </NavLink>
        </>
    );


}