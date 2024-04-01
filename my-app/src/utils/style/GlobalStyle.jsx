import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import { breakPoints } from '../_variables'
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
        @media screen and (min-width: ${breakPoints.tablet_landscape}px) {
            min-height: calc(100vh - 100px - 40px);
        }
    }

`

function GlobalStyle() {

    return <StyledGlobalStyle />
}

export default GlobalStyle
