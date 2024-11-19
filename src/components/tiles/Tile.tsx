import styled from "styled-components";
import colorPalette from "../../values/colorPalette.tsx";

interface TileProps {
    header?: React.ReactNode;
    title?: string;
    children?: React.ReactNode;
}

export const Tile = ({title, children, header}:TileProps) => {
    return (
        <TileBody>
            <Header>{header}</Header>
            <Title>{title}</Title>
            <div>
                {children}
            </div>
        </TileBody>
    )
}

const Header = styled.div`
    
`

const TileBody = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${colorPalette.header.hex} ;
    border-radius: 1rem;
    padding: 1rem;
`

const Title = styled.span`
    font-size: 1.5rem;
`
