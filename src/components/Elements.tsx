import styled from "styled-components";
import colorPalette from "../values/colorPalette.tsx";

export const NavbarElement = styled.div`
    font-size: 1.5rem;
    width: 100%;
    padding: 1rem;
`
export const Title = styled.span`
    font-size: 3rem;
    width: 100%;
    padding: 1rem;
    color: ${colorPalette.red.hex}
`

export const LogoImage = styled.img`
    width: 30px;
    height: 30px;
`