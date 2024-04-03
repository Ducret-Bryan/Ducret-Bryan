import styled from "styled-components";
import { rem } from "../../utils/_functions";
import { breakPoints } from "../../utils/_variables";
import colors from "../../utils/style/colors";

export const SkillMain = styled.main`
    padding-top: ${rem(28)};
    padding-bottom: ${rem(14)};

& > .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: ${rem(10)}
}

h3 {
    font-size: ${rem(22)};
}
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    h2 {
        font-size: ${rem(30)};
    }
    h3 {
    font-size: ${rem(28)};
    }

    & > .container {
        display: grid;
        grid-template-columns: 200px 100px 1fr;
    }
}
`

export const SecondTitle = styled.div`
h2 {
    font-size: ${rem(24)};
    letter-spacing: ${rem(-0.5)};
    font-weight: lighter;
}
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    h2 {
        font-size: ${rem(30)};
    }
    padding: ${rem(10)} 0 ${rem(10)} ${rem(20)};
    grid-column: 3/4;
    grid-row: 1;
}
`
// Left - Button  \\
export const TabsList = styled.div`
display: none;
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    grid-column: 1/2;
    grid-row: 2;
}
`
export const Tab = styled.button`
display: block;
border: 0;
background-color: transparent;
color: white;
padding: ${rem(5)} ${rem(10)};
cursor: pointer;
h3 {
    font-weight: bold;
}
.active {
    color: ${colors.primary};
}
`

// Trait Separator  \\
export const TraitSeparator = styled.hr`
display: none;
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
display: block;
height: 250px;
border: 0;
grid-column: 2/3;
grid-row: 2;
margin: 0 auto;
border-right: solid 1px white;
}
`
// Right - Content Tabs  \\
export const TabsContent = styled.div`
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    max-height: 450px;
    overflow-y: auto;
    scrollbar-color: ${colors.primary} transparent;
    scrollbar-width: thin;
   
    h3 {
        display: none;
    }
    & > div {
        padding: 0;
    }
    grid-column: 3/4;
    grid-row: 2; 
}
`
// TabPannel \\
export const TabPannel = styled.div`
padding: ${rem(16)} 0;
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    ${props => (props.active) ? "" : "display:none"};
}
`