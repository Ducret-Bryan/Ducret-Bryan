import styled from "styled-components"
import { rem } from "../../utils/_functions"
import colors from "../../utils/style/colors"

export const SepratorContainer = styled.div`
padding-top: ${rem(5)};
padding-bottom: ${rem(10)};
display: flex;
`
export const BlueTrait = styled.hr`
width: ${rem(30)};
border-color: ${colors.primary};
`

export const WhiteTrait = styled.hr`
width: ${rem(75)};
border-color: ${colors.white_opacity50};
`