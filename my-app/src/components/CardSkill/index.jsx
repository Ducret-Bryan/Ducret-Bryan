import { Card, Icon, Title, Description } from './style'

function CardSkill({ data }) {
    console.log(data.icon[0].image)
    return (
        <Card>
            <Icon src={data.icon[0].image} alt={data.icon[1]} />
            <div>
                <Title>{data.title}</Title>
                <Description>
                    {data.description}
                </Description>
            </div>
        </Card>
    )
}

export default CardSkill