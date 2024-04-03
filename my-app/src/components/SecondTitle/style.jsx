import styled from "styled-components";
import { rem } from "../../utils/_functions";
import { breakPoints } from "../../utils/_variables";

export const Container = styled.div`
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