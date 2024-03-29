import { LinkContainer } from "./style"

function LinkBox({ linkArray }) {

    return (
        <LinkContainer>
            {linkArray.map((link) => (
                <a href={link.link}>{link.label}</a>
            ))
            }
        </LinkContainer>
    )
}

export default LinkBox