import {BasePage} from "../components/elements/BasePage.tsx";
import styled from "styled-components";
import {Tile} from "../components/tiles/Tile.tsx";
import {ProfileTile} from "../components/tiles/ProfileTile.tsx";
import {AboutMeTile} from "../components/tiles/AboutMeTile.tsx";
import {ProfileLinksTile} from "../components/tiles/ProfileLinksTile.tsx";

const maximum_width = "1500px"

const HomePage = () => {
    return (
        <BasePage maximum_width={maximum_width}>
            <LeftPanel maximumwidth={maximum_width}>
                {ProfileTile(maximum_width)}
                {AboutMeTile()}
                {ProfileLinksTile()}
            </LeftPanel>
            <RightPanel maximumwidth={maximum_width}>
                <Tile title="Wiktor Małyska">

                </Tile>
            </RightPanel>
        </BasePage>
    )
}
export default HomePage



interface PanelProps {
    maximumwidth?: string
}

const LeftPanel = styled.div<PanelProps>`
    display: flex;
    height: 100%;
    width: 256px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    @media (max-width: ${(props) => props.maximumwidth}) {
        width: 100%;
        height: auto;
    }
`

const RightPanel = styled.div<PanelProps>`
    display: flex;
    height: 100%;
    width: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${(props) => props.maximumwidth}) {
        width: 100%;
        height: auto;
    }
`


