import { LogoImage, NavbarElement, NavbarNavigation } from './Elements';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

interface NavbarLink {
    name: string;
    link: string;
}

const elements: NavbarLink[] = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
];

const Navbar = () => (
    <NavbarElement>
        <LogoImage src={Logo} />
        <NavbarNavigation>
            {elements.map((element, index) => {
                const number = `${Math.floor(index / 10)}${index + 1}`;
                return (
                    <Link key={element.name} to={element.link}>
                        {`${number}. ${element.name}`}
                    </Link>
                );
            })}
        </NavbarNavigation>
    </NavbarElement>
);

export default Navbar;
