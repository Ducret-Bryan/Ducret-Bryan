import { HeadCard, Date, Company, List, TagBox, Tag } from './style'
import { Card, Icon, Infos, Description } from '../CardSkill/style'

function CardCareer({ data }) {

    return (
        <Card>
            <Icon src={data.icon[0]} alt={data.icon[1]} />
            <Infos>
                <HeadCard>
                    <Date>{data.date}</Date>
                    <Company>{data.job_company}</Company>
                </HeadCard>
                <Description>
                    {data.description}
                </Description>
                {data.list.length !== 0 ? (
                    <List>
                        {data.list.map((text, index) => (
                            <li key={data.key + "_list_" + index}>{text}</li>
                        ))
                        }
                    </List>
                ) : null}

                {data.tags.length !== 0 ? (
                    <TagBox>
                        {data.tags.map((tag, index) => (
                            <Tag key={data.key + "_tag_" + index}>{tag}</Tag>
                        ))}
                    </TagBox>
                ) : null}
            </Infos>
        </Card>
    )
}

export default CardCareer