import styled from 'styled-components';
import { rem } from '../../utils/_functions';
import colors from '../../utils/style/colors';
import { breakPoints } from '../../utils/_variables';

export const MainContact = styled.main`
padding-top: ${rem(28)};
padding-bottom: ${rem(14)};

& > .container {
    padding: ${rem(10)}
}

@media screen and (min-width: ${breakPoints.laptop}px) {
    & > .container {
        display: flex;
        gap: ${rem(50)}
    }
}
@media screen and (min-width: ${breakPoints.desktop}px) {
    & > .container {
        gap: ${rem(100)}
    }
}
`
// Contact Card \\
export const ContactCard = styled.div`
padding-top: ${rem(10)};
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    width: 450px;
}
`

export const Card = styled.div`
padding: ${rem(10)};
display: flex;
gap: ${rem(16)}
`
export const Icon = styled.img`
width: 40px;
height: 40px;
`

export const Title = styled.p`
font-size: ${rem(18)};
font-weight: bold;
`

export const Infos = styled.p`
padding-top: ${rem(5)};
color: ${colors.white_opacity50};
`

// Contact Me \\
export const ContactMe = styled.div`
padding-top: ${rem(10)};

h2 {
    font-size: ${rem(20)};
    font-weight: bold;
}

@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    h2 {
        font-size: ${rem(28)};
    }
}
@media screen and (min-width: ${breakPoints.laptop}px) {
flex-grow: 1;
}
`

export const ContactForm = styled.form`
padding: 0 ${rem(10)};
label {
    display: block;
    font-weight: bold;
}

input, select, textarea {
    width: 100%;
    padding: ${rem(2)} ${rem(15)};
    background-color: transparent;
    border: none;
    border: ${rem(2)} solid ${colors.white_opacity50};
    color: ${colors.white_opacity50};
    outline: none;
    -webkit-border-radius: ${rem(5)};
    -moz-border-radius: ${rem(5)};
    -ms-border-radius: ${rem(5)};
    -o-border-radius: ${rem(5)};
    border-radius: ${rem(5)};
}

input, select {
    height: ${rem(44)};

    & > option {
    background-color: ${colors.background};
    height: ${rem(25)};
    }
}



textarea {
width: 100%;
height: 88%;
resize: none;
padding: ${rem(15)};
}
`
export const InputContainer = styled.div`
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    display: flex;
    gap: ${rem(16)};
    }
`

export const Left = styled.div`
div {
    padding-top: ${rem(10)};
}

@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    width: 40%;
}
`

export const Right = styled.div`
    padding-top: ${rem(10)};
    @media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    width: 60%;
}`
export const ButtonForm = styled.div`
display: flex;
justify-content: space-between;
gap: ${rem(20)};
padding-top: ${rem(20)};

button {
    background-color: #333333;
    padding: ${rem(10)} ${rem(20)};
    text-decoration: none;
    text-align: center;
    color: white;
    border: solid ${rem(3)} ${colors.primary};
    -webkit-border-radius: ${rem(40)};
    -moz-border-radius: ${rem(40)};
    -ms-border-radius: ${rem(40)};
    -o-border-radius: ${rem(40)};
    border-radius: ${rem(40)};
    cursor: pointer;
    }
`
export const Submit = styled.button`
width: 50%;
@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    width: 200px;
}
`

export const Reset = styled.button`
width: 25%;
border: 0;

@media screen and (min-width: ${breakPoints.tablet_landscape}px) {
    width: 100px;
}
`