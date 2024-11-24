import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import colorPalette from "../../values/colorPalette.tsx";

interface NavbarLink {
    name: string;
    link: string;
}

const elements: NavbarLink[] = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
];

interface NavbarProps {
    maximum_width?: string
    children?: React.ReactNode
}

const Navbar = ({maximum_width}:NavbarProps) => {
    return (
    <NavbarElement>
        <NavbarLeft>
            <LogoImage src={Logo}/>
            <PageName maximum_width={maximum_width}>
                Wiktor Małyska Portfolio
            </PageName>
        </NavbarLeft>


        <NavbarNavigation>
            {elements.map((element, index) => {
                const number = `${Math.floor(index / 10)}${index + 1}`;
                return (
                    <Link className={"navbarButton"} key={element.name} to={element.link}>
                        {`${number}. ${element.name}`}
                    </Link>
                );
            })}
        </NavbarNavigation>
    </NavbarElement>
    )
}

export default Navbar;

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

interface PageNameProps{
    maximum_width?: string
}

export const PageName = styled.span<PageNameProps>`
    font-size: 100%;
    font-weight: bold;
    color: ${colorPalette.text.hex};
    
    @media (max-width: ${(props) => props.maximum_width || "0px"}) {
        display: none;
    }
`