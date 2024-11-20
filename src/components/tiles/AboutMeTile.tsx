import {Tile} from "./Tile.tsx";
import {CodeBlockComponent} from "../elements/CodeBlockComponent.tsx";
import styled from "styled-components";
import {AboutMeCode} from "../../tools/AboutMeCode.ts";

const aboutMe = await AboutMeCode("aboutMeCode.js")

export const AboutMeTile = () => {
    return (
        <Tile >
            <Wrapper id="aboutMeWrapper">
                <CodeBlockComponent code={aboutMe} language={"javascript"}/>
            </Wrapper>
        </Tile>
    )
}

const Wrapper = styled.div`
    width: 100%;
`