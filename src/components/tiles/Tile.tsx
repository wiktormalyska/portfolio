import styled from "styled-components";
import colorPalette from "../../values/colorPalette.tsx";

interface TileProps {
    header?: React.ReactNode
    title?: string
    children?: React.ReactNode
    height? : string
}

export const Tile = ({title, children, header, height}:TileProps) => {
    const TitleHandler = () => {
        if(!title) {
            return (<></>)
        } else {
            return <Title>{title}</Title>
        }
    }
    return (
        <TileBody height={height}>
            <Header>{header}</Header>
            {TitleHandler()}
            {children}
        </TileBody>
    )
}

const Header = styled.div`

`

interface TileBodyProps {
    height? : string
}

const TileBody = styled.div<TileBodyProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: ${(props) => props.height || "100%"};
    background-color: ${colorPalette.header.hex} ;
    border-radius: 1rem;
    padding: 1rem;
`

const Title = styled.span`
    font-size: 1.5rem;
    padding: 0 0 1rem 0;
`
