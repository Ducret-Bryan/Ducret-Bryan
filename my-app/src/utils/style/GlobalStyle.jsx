import { createGlobalStyle } from 'styled-components'
import colors from './colors'

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
        max-width: 1600px;
        margin-left: auto;
        margin-right: auto;
    }
`

function GlobalStyle() {

    return <StyledGlobalStyle />
}

export default GlobalStyle
