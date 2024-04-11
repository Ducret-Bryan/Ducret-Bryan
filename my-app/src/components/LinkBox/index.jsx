import { LinkContainer } from "./style"
import icons from '../../assets/images/icons/lien.png'

function LinkBox({ linkArray }) {

    return (
        <LinkContainer>
            {linkArray.map((link) => (
                (link.inner) ?
                    (
                        <a key={link.label} href={link.link} >
                            <p>{link.label}</p>
                        </a>
                    )
                    :
                    (
                        <a key={link.label} href={link.link} target="_blank" rel="noreferrer">
                            <p>{link.label}</p>
                            <img src={icons} alt="Link Icons" />
                        </a>
                    )
            ))
            }
        </LinkContainer>
    )
}

// Link Icons from Th Studio (Flaticon)
export default LinkBox