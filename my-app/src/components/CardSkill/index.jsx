import { Card, Icon, Infos, Title, Description } from './style'

function CardSkill({ data }) {

    return (
        <Card>
            <Icon src={data.icon[0]} alt={data.icon[1]} />
            <Infos>
                <Title>{data.title}</Title>
                <Description>
                    {data.description}
                </Description>
            </Infos>
        </Card>
    )
}

export default CardSkill