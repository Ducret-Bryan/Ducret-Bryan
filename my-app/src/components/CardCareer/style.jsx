import styled from "styled-components"
import { rem } from "../../utils/_functions"
import { breakPoints } from "../../utils/_variables"
import colors from "../../utils/style/colors"

export const HeadCard = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: ${rem(6)};
font-size: ${rem(19)};

@media screen and (min-width: ${breakPoints.laptop}px) {
    flex-direction: row;
    justify-content: space-between;
}
`

export const Date = styled.div`
font-weight: bold;
`

export const Company = styled.div`
font-style: italic;
padding-right: ${rem(6)};
`

export const List = styled.ul`
padding-top: ${rem(6)};
color: ${colors.white_opacity70};
list-style-type: disc;
list-style: inside; 
`

export const TagBox = styled.div`
padding-top: ${rem(8)};
display: flex;
flex-wrap: wrap;
gap: ${rem(10)};
`

export const Tag = styled.p`
padding: ${rem(5)} ${rem(10)};
background-color: ${colors.primary_opacity50};
-webkit-border-radius: ${rem(20)};
-moz-border-radius: ${rem(20)};
-ms-border-radius: ${rem(20)};
-o-border-radius: ${rem(20)};
border-radius: ${rem(20)};
`