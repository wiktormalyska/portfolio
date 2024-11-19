import {BasePage} from "../components/BasePage.tsx";
import styled from "styled-components";
import {Tile} from "../components/tiles/Tile.tsx";
import prof from "../assets/prof.jpg"
import {CodeBlockComponent} from "../components/CodeBlockComponent.tsx";

const AboutMeCode =
    "{\n " +
    "\"title\": \"fullstack developer\"" +
    "\n}"

const HomePage = () => {
    return (
        <BasePage>
            <LeftPanel>
                <Tile title={"Wiktor Małyska"} header={<ProfileImage src={prof} alt="Profile"/>}>
                    <CodeBlockComponent code={AboutMeCode} language={"json"}/>
                </Tile>
            <Tile title={"Wiktor Małyska"}>

            </Tile>
        </LeftPanel><RightPanel>
            <Tile title={"Wiktor Małyska"}>

            </Tile>
        </RightPanel>
        </BasePage>
    )
}
export default HomePage

const LeftPanel = styled.div`
    display: flex;
    height: 100%;
    width: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const RightPanel = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`

const ProfileImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
`