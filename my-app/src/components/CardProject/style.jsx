import styled from "styled-components";
import { rem } from "../../utils/_functions";
import { breakPoints } from "../../utils/_variables";
import colors from "../../utils/style/colors";

export const Card = styled.div`
position: relative;
min-width: ${rem(225)};
max-width: ${rem(270)};

a {
    color: white;
}

&:hover {
    img {
        opacity: 0.5;
    }
    div {
    display: flex;
    }
}

@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    ${'' /* width: ${rem(250)}; */}
}
`

export const Image = styled.img`
z-index: 0;
display: block;
-webkit-border-radius: ${rem(24)};
-moz-border-radius: ${rem(24)};
-ms-border-radius: ${rem(24)};
-o-border-radius: ${rem(24)};
border-radius: ${rem(24)};
`

export const Infos = styled.div`
display: none;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;

flex-direction: column;
align-items: center;
justify-content: center;
`

export const Title = styled.h3`
font-size: ${rem(18)};
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    h3 {
    font-size: ${rem(20)};
    }
}
`

export const Description = styled.p`
padding: ${rem(6)};
text-align: center;
font-size: ${rem(10)};
`

export const TagList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: ${rem(10)};
`

export const Tag = styled.li`
padding: ${rem(4)} ${rem(14)};
background-color: ${colors.primary};

-webkit-border-radius: ${rem(24)};
-moz-border-radius: ${rem(24)};
-ms-border-radius: ${rem(24)};
-o-border-radius: ${rem(24)};
border-radius: ${rem(24)};

font-size: ${rem(8)};
`