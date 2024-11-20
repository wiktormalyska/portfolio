import {Tile} from "./Tile.tsx";
import {IconLinkToProfile} from "../elements/IconLinkToProfile.tsx";
import styled from "styled-components";

export const ProfileLinksTile = () => {
    return (
        <Tile>
            <Links>
                {IconLinkToProfile("bi-github", "https://github.com/wiktormalyska", "GitHub")}
                {IconLinkToProfile("bi-linkedin", "https://linkedin.com/in/wiktor-malyska", "LinkedIn")}
                {IconLinkToProfile("bi-book-half", "https://docusaurus.wiktormalyska.ovh/", "Project Docs")}
                {IconLinkToProfile("bi-file-earmark-fill", "https://rxresu.me/wiktormalyska/java-eng", "Resume")}

            </Links>
        </Tile>
    )
}

const Links = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: space-between;
    align-items: center;
`
