import { isMobile } from 'react-device-detect';
import { Card, Image, Infos, Title, Description, TagList, Tag } from './style'

function CardProject({ project }) {

    return (
        <Card>
            <a href={project.url}>
                <Image src={project.image} alt='photo project' />
                {!isMobile ? (
                    <Infos>
                        <Title>{project.name}</Title>
                        <Description>
                            {project.description}
                        </Description>
                        <TagList>
                            {project.tags.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </TagList>
                    </Infos>
                ) : null}
            </a>
        </Card>
    )
}

export default CardProject