import {BasePage} from "../components/elements/BasePage.tsx";
import styled from "styled-components";
import {Tile} from "../components/tiles/Tile.tsx";
import {ProfileTile} from "../components/tiles/ProfileTile.tsx";
import {AboutMeTile} from "../components/tiles/AboutMeTile.tsx";
import {ProfileLinksTile} from "../components/tiles/ProfileLinksTile.tsx";


//Mobile view turn on when:
const maximum_width = "800px"
const maximum_height = "850px"

const HomePage = () => {
    return (
        <BasePage maximum_width={maximum_width} maximum_height={maximum_height} side_spacing="0 5rem">
            <ColumnPanel maximumwidth={maximum_width} width="256px">
                {ProfileTile(maximum_width)}
                {AboutMeTile()}
            </ColumnPanel>
            <ColumnPanel maximumwidth={maximum_width}>
                <Tile title="Projects">

                </Tile>

            </ColumnPanel>
            <ColumnPanel maximumwidth={maximum_width} width="512px">
                <Tile title="Tools i use">
                    {}
                </Tile>
                <Tile title="Social Links">
                    {ProfileLinksTile()}
                </Tile>

            </ColumnPanel>
        </BasePage>
    )
}
export default HomePage



interface PanelProps {
    maximumwidth?: string
    width? : string
}

const ColumnPanel = styled.div<PanelProps>`
    display: flex;
    height: 100%;
    width: ${(props) => props.width || "100%"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    @media (max-width: ${(props) => props.maximumwidth}) {
        width: 100%;
        height: auto;
    }
`
//
// const RightPanel = styled.div<PanelProps>`
//     display: flex;
//     height: 100%;
//     width: 1500px;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//
//     @media (max-width: ${(props) => props.maximumwidth}) {
//         width: 100%;
//         height: auto;
//     }
//`


