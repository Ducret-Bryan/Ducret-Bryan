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
`

function GlobalStyle() {

    return <StyledGlobalStyle />
}

export default GlobalStyle
