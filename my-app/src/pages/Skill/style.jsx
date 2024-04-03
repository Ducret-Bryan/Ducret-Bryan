import styled from "styled-components";
import { rem } from "../../utils/_functions";
import { breakPoints } from "../../utils/_variables";

export const SkillMain = styled.main`
    padding-top: ${rem(28)};
    padding-bottom: ${rem(14)};

& > .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: ${rem(10)}
}

h3 {
    font-size: ${rem(22)};
}
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    h2 {
        font-size: ${rem(30)};
    }
    h3 {
    font-size: ${rem(28)};
    }

    & > .container {
        display: grid;
        grid-template-columns: 200px 100px 1fr;
    }
}
`