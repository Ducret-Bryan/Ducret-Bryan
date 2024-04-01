import styled from "styled-components"
import { rem } from "../../utils/_functions"
import colors from "../../utils/style/colors"

export const SepratorContainer = styled.div`
padding: ${rem(5)} 0;
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