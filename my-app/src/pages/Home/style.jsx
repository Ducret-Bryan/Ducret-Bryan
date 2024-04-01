import styled from 'styled-components';
import { rem } from '../../utils/_functions';
import colors from '../../utils/style/colors';
import { breakPoints } from '../../utils/_variables';

export const MainContainer = styled.main`
display: flex;
align-items: center;
.container {
    height: 100%;
    padding: ${rem(10)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${rem(30)}
}
@media screen and (min-width: ${breakPoints.laptop}px) {
    .container{
        width: 90%;
        flex-direction: row;
        gap: ${rem(48)};
    }
}
@media screen and (min-width: ${breakPoints.desktop}px) {
    .container{
        width: 75%;
    }
}
`

export const Avatar = styled.div`
min-width: 260px;
min-height: 260px;
width: 260px;
height: 260px;
background-color: ${colors.background_secondary};
margin: 0 auto;
padding: ${rem(16)};
-webkit-border-radius: 50%;
-moz-border-radius: 50%;
-ms-border-radius: 50%;
-o-border-radius: 50%;
border-radius: 50%;
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

img {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
}

@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    margin:0;
}
@media screen and (min-width: ${breakPoints.laptop}px) {
min-width: 410px;
min-height: 410px;
width: 410px;
height: 410px;
}
`

export const TitleJob = styled.p`
color: ${colors.white_opacity50};
font-size: ${rem(18)};
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    font-size: ${rem(24)};
}
`
export const Name = styled.h1`
padding-top: ${rem(5)};
font-size: ${rem(45)};
font-weight: bold;
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    font-size: ${rem(62)};
}
`
export const About = styled.p`
padding-top: ${rem(5)};
font-size: ${rem(18)};
line-height: ${rem(28)};
@media screen and (min-width: ${breakPoints.laptop}px) {
    font-size: ${rem(22)};
    line-height: ${rem(32)};
}
@media screen and (min-width: ${breakPoints.desktop}px) {
    width: 75%;
}
`