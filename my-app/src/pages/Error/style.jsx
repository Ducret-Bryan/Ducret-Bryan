import styled from 'styled-components'
import { rem } from '../../utils/_functions'

export const ErrorMain = styled.main`
& > .container {
    display: flex;
    justify-content: center;

    img {
        max-height: 380px;
    }
}
`

export const History = styled.div`
margin-top: ${rem(10)};
margin-left: ${rem(10)};
padding: ${rem(6)};
background-color: rgba(255, 255, 255, 0.1);

-webkit-border-radius: ${rem(10)};
-moz-border-radius: ${rem(10)};
-ms-border-radius: ${rem(10)};
-o-border-radius: ${rem(10)};
border-radius: ${rem(10)};
p {
    padding-top: ${rem(10)};
}
p:first-child {
    padding-top: 0;
}
`