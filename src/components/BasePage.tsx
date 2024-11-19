import styled from "styled-components";
import colorPalette from "../values/colorPalette.tsx";

interface BasePageProps {
    children?: React.ReactNode;
    title?: string
    description?: string
}

export const BasePage = ({children, title, description}:BasePageProps) => {
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
        <>
            {header()}
            <Body>
                {children}
            </Body>
        </>
    );
}

const Title = styled.span`
    font-size: 3rem;
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
`

const Body = styled.div`
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    height: 100%;
    color: ${colorPalette.text.hex};
    display: flex;
    gap: 1rem;
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
    width: 100%;
    background-color: ${colorPalette.primary.hex};
    color: ${colorPalette.darkText.hex};
`