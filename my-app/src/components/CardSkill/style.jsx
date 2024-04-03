import styled from "styled-components"
import { rem } from "../../utils/_functions"
import { breakPoints } from "../../utils/_variables"
import colors from "../../utils/style/colors"

export const Card = styled.div`
padding: ${rem(10)};
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
display: flex;
gap: ${rem(16)};
}
`

export const Icon = styled.img`
display: none;
width: ${rem(48)};
height: ${rem(48)};
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
display: block;
}
`
export const Title = styled.h4`
font-size: ${rem(18)};
letter-spacing: ${rem(0.1)};
font-weight: bold;
`

export const Description = styled.p`
padding: ${rem(10)} 0;
letter-spacing: ${rem(0.5)};
color: ${colors.white_opacity70};
`