import styled from "styled-components";
import colorPalette from "../../values/colorPalette.tsx";

interface BasePageProps {
    children?: React.ReactNode;
    title?: string
    description?: string
    maximum_width?: string
    maximum_height?: string
    side_spacing?: string
}

export const BasePage = ({children, title, description, maximum_width, maximum_height, side_spacing}:BasePageProps) => {
    const header = () => {
        if (!title) {
            return (<></>)
        }else if (!description) {
            return (
                <Header>
                    <Title>{title}</Title>
                </Header>
            )
        } else {
            return (
                <Header>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Header>
            )
        }
    }

    return (
        <PageBody maximum_width={maximum_width} maximum_height={maximum_height} side_spacing={side_spacing} >
            {header()}
            <Body maximumwidth={maximum_width}>
                {children}
            </Body>
        </PageBody>
    );
}
interface PageBodyProps {
    maximum_width?: string
    maximum_height?: string
    side_spacing?: string
}


const PageBody = styled.div<PageBodyProps>`
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.side_spacing || "0"};

    @media (max-width: ${(props) => props.maximum_width}) {
        justify-content: flex-start;
    }

    @media (max-height: ${(props) => props.maximum_height}) {
        justify-content: flex-start;
    }
    
`

const Title = styled.span`
    font-size: 3rem;
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
`
interface BodyProps {
    maximumwidth?: string
}

const Body = styled.div<BodyProps>`
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    color: ${colorPalette.text.hex};
    display: flex;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    
    @media (max-width: ${(props) => props.maximumwidth}) {
        flex-direction: column;
        width: 300px;
        height: auto;

    }
`
const Description = styled.span`
    font-size: 1.5rem;
    width: 100%;
    padding: 0.5rem;
    text-align: center;
    font-weight: bold;
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: calc(100% - 2rem);
    background-color: ${colorPalette.primary.hex};
    color: ${colorPalette.darkText.hex};
    margin: 1rem;
    border-radius: 1rem;
`