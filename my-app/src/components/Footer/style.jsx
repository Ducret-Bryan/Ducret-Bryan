import styled from "styled-components"
import colors from "../../utils/style/colors"
import { breakPoints } from "../../utils/_variables"
import { rem } from "../../utils/_functions"

export const FooterContainer = styled.footer`
padding: ${rem(10)};
color: ${colors.white_opacity50};
border-top: solid 1px ${colors.white_opacity50};

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${rem(10)};
}
ul {
    display: flex;
    gap: ${rem(26)};
}
a {
    text-decoration: none;
    color: ${colors.white_opacity50};
}

@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
.container {
flex-direction: row;
justify-content: space-between;
}
}
`