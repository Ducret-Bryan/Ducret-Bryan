
import { breakPoints } from '../../utils/_variables'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { rem } from '../../utils/_functions'

export const MainContainer = styled.div`
background-color: ${colors.background};
.container {
    padding: 0 ${rem(10)};
}
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    position: sticky;
    top: 0;
.container {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
}
`

export const HeaderContainer = styled.header`
z-index: 10;
min-width: 50px;
position: fixed;
right: 0;
bottom: 0;
left: 0;

background-color: ${colors.background};
border-top: ${rem(1)} solid white;
height: 8vh;
display: flex;
justify-content: center;

@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
position: relative;
height: 10vh;
border: 0;
}
`

export const LogoContainer = styled.div`
position: absolute;
top: 1.5vh;
left: 1.5vh;
display: flex;
align-items: center;
gap: ${rem(8)};
img {
    width: 5vh;
    height: 5vh;
}
p {
    display: none;
}
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
position: relative;
top: 0;
left: 0;
p{
    display: block;
}
span {
    font-weight: bold;
}
}
`

export const NavContainer = styled.nav`
z-index: 10;
position: fixed;
right: 0;
bottom: 50px;
left: 0;
border-top: ${rem(1)} solid white;
background-color: ${colors.background};

a {
    display: block;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    padding: ${rem(13)} ${rem(20)};
    color: white;
    opacity: 50%;
}
.active {
    opacity: 100%;
    font-weight: bold;
}

@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
position: relative;
bottom: 0;
display: flex;
border: 0;
}
`

export const BurgerButton = styled.button`
text-decoration: none;
border: 0;
background-color: transparent;
cursor: pointer;
padding: 0 ${rem(20)};
img {
        width: 35px;
        height: 35px;
}
`
