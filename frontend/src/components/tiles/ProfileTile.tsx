import prof from "../../assets/prof.jpg";
import {Tile} from "./Tile.tsx";
import styled from "styled-components";

export const ProfileTile = (maxWidth?: string) => {
    return (
        <Tile title="Wiktor Małyska" header={<ProfileImage src={prof} alt="Profile" maximumwidth={maxWidth}/>} height="auto"/>
    )
}
interface ProfileImageProps {
    maximumwidth?: string
}


const ProfileImage = styled.img<ProfileImageProps>`
    width: 100%;
    height: auto;
    border-radius: 1rem;

    @media (max-width: ${(props) => props.maximumwidth}) {
        width: 200px;
    }
`