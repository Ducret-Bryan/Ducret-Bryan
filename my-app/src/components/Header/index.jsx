import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';

import navigationLinks from '../../utils/_navigationLinks';
import { breakPoints } from '../../utils/_variables';

import { MainContainer, HeaderContainer, LogoContainer, BurgerButton, NavContainer } from './styles';
import logo from '../../assets/images/logo.png';
import burgerIcons from '../../assets/images/icons/burger.svg';


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const isMobile = window.innerWidth < breakPoints.tablet_landscape;
    const { pathname } = useLocation();

    const pathname_split = pathname.split('/')
    pathname_split.shift()
    console.log(pathname_split[0])
    return (
        <MainContainer>
            <div className='container'>
                <HeaderContainer>
                    <LogoContainer>
                        <img src={logo} alt='logo' />
                        <p><span>Dev</span>Lauvel</p>
                    </LogoContainer>
                    {isMobile &&
                        (<BurgerButton onClick={() => { setIsOpen(!isOpen) }}>
                            <img src={burgerIcons} alt='burger icons' />
                        </BurgerButton>)
                    }
                </HeaderContainer>

                {(isMobile && isOpen) || !isMobile ? (
                    <NavContainer>
                        {navigationLinks.map((link) => (
                            <Link key={link.path} to={link.path} className={(link.path === pathname || link.path === '/' + pathname_split[0]) ? "active" : ""}>
                                {link.label}
                            </Link>
                        ))}
                    </NavContainer>
                ) : null
                }
            </div>
        </MainContainer>
    )
}

export default Header