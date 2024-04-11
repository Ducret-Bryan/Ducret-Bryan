import styled from "styled-components";
import colors from "../../utils/style/colors";
import { rem } from "../../utils/_functions";
import { breakPoints } from "../../utils/_variables";

export const TitleContainer = styled.div`
background-color: ${colors.background_title};
.container {
    height: 120px;
    padding-left: ${rem(20)};
    display: flex;
    align-items: center;
}
hr {
    border: ${rem(1)} ${colors.hr_secondary} solid
}
h1{
    text-align: center;
    font-size: ${rem(32)};
    font-weight: bold;
}

p{
    padding: ${rem(6)};
    position : absolute;
}

@media screen and (min-width: ${breakPoints.laptop}px) {
    .container {
        padding-left: ${rem(10)};
        height: 170px;
    }
    h1{
    padding-left: ${rem(10)};
    font-size: ${rem(44)};
}
}
`


