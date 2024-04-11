import styled from 'styled-components'
import { rem } from '../../utils/_functions'
import colors from '../../utils/style/colors'
import { breakPoints } from '../../utils/_variables'

export const ProjectMain = styled.main`
    padding-top: ${rem(28)};
    padding-bottom: ${rem(14)};

    & > .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: ${rem(16)};
    }

@media only screen and (min-width: ${breakPoints.laptop}px) {
    & > .container {
    padding: ${rem(24)};
    display: flex;
    gap: ${rem(24)}
    }
} 
`
export const Left = styled.div`
h2, p, ul {
    padding-top: ${rem(10)}
}
ul {
    display: flex;
    gap: ${rem(16)};

    li {
    padding: ${rem(4)} ${rem(14)};
    background-color: ${colors.primary_opacity50};

    -webkit-border-radius: ${rem(24)};
    -moz-border-radius: ${rem(24)};
    -ms-border-radius: ${rem(24)};
    -o-border-radius: ${rem(24)};
    border-radius: ${rem(24)};
}
}

@media only screen and (min-width: ${breakPoints.laptop}px) {
    order: 1;    
} 
`
export const Right = styled.div`
@media only screen and (min-width: ${breakPoints.laptop}px) {
    order: 2;    
} 
`

export const MainImage = styled.img`
width: 100%;
-webkit-border-radius: ${rem(25)};
-moz-border-radius: ${rem(25)};
-ms-border-radius: ${rem(25)};
-o-border-radius: ${rem(25)};
border-radius: ${rem(25)};
`