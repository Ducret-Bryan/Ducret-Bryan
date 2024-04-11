import styled from "styled-components";
import { breakPoints } from "../../utils/_variables";

export const CareerMain = styled.main`
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    & > .container {
        display: grid;
        grid-template-columns: 200px 50px 1fr;
    }
}
`