import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import { breakPoints } from '../_variables'
import { rem } from '../_functions'
// import { rem } from '../_functions'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Roboto';
    }

    html{
        height: 100%;
    }

    body {
        height: 100%;
        background-color: ${colors.background};
        color: #ffffff;
        margin: 0;
    }

    .container {
        height: 100%;
        max-width: 1600px;
        margin-left: auto;
        margin-right: auto;
    }

    main {
        min-height: calc(100vh - 50px - 70px);

        & > .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: ${rem(16)}
        }
        @media screen and (min-width: ${breakPoints.tablet_landscape}px) {
            min-height: calc(100vh - 70px - 40px);
        }

        @media only screen and (min-width: ${breakPoints.laptop}px) {
            & > .container {
            padding: ${rem(24)};
            }
        } 
    }

    h3 {
    font-size: ${rem(22)};
    }
    
    @media screen and (min-width: ${breakPoints.tablet_landscape}px) {
        h3 {
        font-size: ${rem(24)};
        }
    }

`

function GlobalStyle() {

    return <StyledGlobalStyle />
}

export default GlobalStyle
