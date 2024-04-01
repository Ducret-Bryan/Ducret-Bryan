import { LinkContainer } from "./style"

function LinkBox({ linkArray }) {

    return (
        <LinkContainer>
            {linkArray.map((link) => (
                <a key={link.label} href={link.link}>{link.label}</a>
            ))
            }
        </LinkContainer>
    )
}

export default LinkBox