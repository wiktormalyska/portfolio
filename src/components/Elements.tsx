import styled from "styled-components";
import colorPalette from "../values/colorPalette.tsx";

export const NavbarElement = styled.div`
    font-size: 1.5rem;
    margin: 0.5rem;
    padding: 0 0.25rem 0 0.25rem;
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background-color: ${colorPalette.highlight.hex};
    border-radius: 0.5rem;
`
export const Title = styled.span`
    font-size: 3rem;
    width: 100%;
    padding: 1rem;
    color: ${colorPalette.text.hex}
`

export const LogoImage = styled.img`
    height: 60px;
`

export const NavbarNavigation = styled.div`
    color: ${colorPalette.text.hex};
    display: flex;
    gap: 2rem;
    padding: 0.5rem;
`
