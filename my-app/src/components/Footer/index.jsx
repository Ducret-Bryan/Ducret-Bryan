import { FooterContainer } from './style'

export function Footer() {

    return (
        <FooterContainer>
            <div className="container">
                <ul>
                    <li><a href='https://github.com/Ducret-Bryan' target='_blank' rel="noreferrer">GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/bryan-ducret-86014a221/' target='_blank' rel="noreferrer">Linkedin</a></li>
                </ul>
                <p>Template inspiré de DevRos</p>
            </div>
        </FooterContainer>
    )
}