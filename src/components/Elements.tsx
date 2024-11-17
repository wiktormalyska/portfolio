import styled from "styled-components";
import colorPalette from "../values/colorPalette.tsx";

export const NavbarElement = styled.div`
    font-size: 1rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background-color: ${colorPalette.header.hex};
    padding: 8px 16px 8px 16px;
    height: 60px;
    position: sticky;
`
export const Title = styled.span`
    font-size: 3rem;
    width: 100%;
    padding: 1rem;
    color: ${colorPalette.text.hex}
`

export const LogoImage = styled.img`
    height: 32px;
    margin-right: 8px;
`

export const NavbarNavigation = styled.div`
    color: ${colorPalette.text.hex};
    display: flex;
    gap: 2rem;
    padding: 0.5rem;
`

export const NavbarLeft = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

export const PageName = styled.span`
    font-size: 100%;
    font-weight: bold;
    color: ${colorPalette.text.hex}
    
`