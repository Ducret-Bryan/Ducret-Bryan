import { Container } from './style'
import Separator from '../Separator'

function SecondTitle({ label }) {
    return (
        <Container>
            <h2>{label}</h2>
            <Separator />
        </Container>
    )
}

export default SecondTitle