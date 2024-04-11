import styled from "styled-components"
import colors from "../../utils/style/colors"
import { breakPoints } from "../../utils/_variables"
import { rem } from "../../utils/_functions"

export const LinkContainer = styled.div`
padding-top: ${rem(10)};
display: flex;
gap: ${rem(16)};

a {
    width: 100%;
    background-color: #333333;
    padding: ${rem(10)} ${rem(20)};
    text-decoration: none;
    text-align: center;
    color: white;
    border: solid ${rem(3)} ${colors.primary};
    -webkit-border-radius: ${rem(40)};
    -moz-border-radius: ${rem(40)};
    -ms-border-radius: ${rem(40)};
    -o-border-radius: ${rem(40)};
    border-radius: ${rem(40)};

    display: flex;
    justify-content: center;
    align-items:center;
    gap: ${rem(8)};
}

img {
    width: ${rem(14)};
}
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    a {
        width: auto;
    }
}
`