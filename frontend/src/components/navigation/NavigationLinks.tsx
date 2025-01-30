import {NavLink} from "react-router-dom";

export function NavigationLinks () {
    return (
        <>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/projects"}>Projects</NavLink>
            <NavLink to={"/resume"}>Resume</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        </>
    )
}