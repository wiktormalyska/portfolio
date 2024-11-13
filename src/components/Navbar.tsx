import {LogoImage, NavbarElement, NavbarNavigation} from './Elements.tsx'
import Logo from  '../assets/logo.png'

interface NavbarLink {
    name: string,
    link: string,
}

const elements:NavbarLink[] = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    }
]

const Navbar = () => {
    return (
        <NavbarElement>
            <LogoImage src={Logo}/>
            <NavbarNavigation>
                {elements.map((element, index) => {
                    const number:string= Math.floor(index/10) + "" + (index+1)
                    return (
                        <a key={index} href={element.link}>{number +". "+element.name}</a>
                    )
                }, [])
                }
            </NavbarNavigation>
        </NavbarElement>
    )
}

export default Navbar