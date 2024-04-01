import { TitleContainer } from './style'

function MainTitle({ label }) {
    return (
        <TitleContainer>
            <hr />
            <div className='container'>
                <h1>{label}</h1>
            </div>
            <hr />
        </TitleContainer>
    )
}

export default MainTitle