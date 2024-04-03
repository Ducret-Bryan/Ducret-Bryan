import { HeadCard, Date, Company, List, TagBox, Tag } from './style'
import { Card, Icon, Description } from '../CardSkill/style'

function CardCareer({ data }) {

    return (
        <Card>
            <Icon src={data.icon[0].image} alt={data.icon[1]} />
            <div>
                <HeadCard>
                    <Date>{data.date}</Date>
                    <Company>{data.job_company}</Company>
                </HeadCard>
                <Description>
                    {data.description}
                </Description>
                <List>
                    {data.list.map((text, index) => (
                        <li key={data.key + "_list_" + index}>{text}</li>
                    ))
                    }
                </List>
                <TagBox>
                    {data.tags.map((tag, index) => (
                        <Tag key={data.key + "_tag_" + index}>{tag}</Tag>
                    ))}
                </TagBox>
            </div>
        </Card>
    )
}

export default CardCareer