import styled from "styled-components";
import { rem } from "../../utils/_functions";
import { breakPoints } from "../../utils/_variables";
import colors from "../../utils/style/colors";

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
height: 150px;
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
    max-height: 50vh;
    overflow-y: auto;
    scrollbar-color: ${colors.primary} transparent;
    scrollbar-width: thin;
   
    h3 {
        display: none;
    }
    grid-column: 3/4;
    grid-row: 2; 
}
`
// TabPannel \\
export const TabPannel = styled.div`
display: flex;
flex-direction: column;
gap: ${rem(24)};

@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    ${props => (props.active) ? "" : "display:none"};
}
`