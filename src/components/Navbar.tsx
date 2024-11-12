import {LogoImage, NavbarElement} from './Elements.tsx'
import Logo from  '../assets/code.svg'

const Navbar = () => {
    return (
        <NavbarElement>
            <LogoImage src={Logo}/>
        </NavbarElement>
    )
}

export default Navbar