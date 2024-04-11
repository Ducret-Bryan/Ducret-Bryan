import { useLocation } from 'react-router-dom'
import { TitleContainer } from './style'

function MainTitle({ label }) {
    const { pathname } = useLocation()
    const pathname_split = pathname.split('/')
    pathname_split.shift()
    pathname_split.pop()

    console.log(pathname_split)

    return (
        <TitleContainer>
            <hr />
            <p>{(pathname_split.length >= 1) ? pathname_split.map((page) => page.charAt(0).toUpperCase() + page.slice(1) + ' > ') : null}</p>
            <div className='container'>
                <h1>{label}</h1>
            </div>
            <hr />
        </TitleContainer>
    )
}

export default MainTitle