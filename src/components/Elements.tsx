import styled from "styled-components";
import colorPalette from "../values/colorPalette.tsx";

export const NavbarElement = styled.div`
    font-size: 1.5rem;
    width: 100%;
    padding: 0.5rem 0.5rem 0 0.5rem; 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
`
export const Title = styled.span`
    font-size: 3rem;
    width: 100%;
    padding: 1rem;
    color: ${colorPalette.red.hex}
`

export const LogoImage = styled.img`
    height: 60px;
`

export const NavbarNavigation = styled.div`
    color: ${colorPalette.text.hex};
    display: flex;
    gap: 1rem;
`