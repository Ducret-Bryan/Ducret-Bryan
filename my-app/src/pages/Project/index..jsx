import { useParams } from 'react-router-dom'
import dataProject from "./data"

import MainTitle from '../../components/MainTitle'
import SecondTitle from '../../components/SecondTitle'
import LinkBox from '../../components/LinkBox'
import { ProjectMain, Right, MainImage, Left } from './style'

function Project() {
    const { nameProject } = useParams()
    const project = dataProject[nameProject]
    const linkArray = [
        { link: '/realisation', label: 'Site Web', inner: false },
        { link: '/contact', label: 'GitHub', inner: false }
    ]
    return (
        <ProjectMain>
            <MainTitle label={project.name} />
            <div className='container'>
                <Right>
                    <MainImage src={project.mainImage} alt='photo projet' />
                    <LinkBox linkArray={linkArray} />
                </Right>
                <Left>
                    <SecondTitle label={'Contexte'} />
                    <p>
                        {project.context}
                    </p>
                    <SecondTitle label={'Objectif'} />
                    <p>
                        {project.objectif}
                    </p>
                    <SecondTitle label={'Technologie'} />
                    <ul>
                        {
                            project.technology.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))
                        }
                    </ul>
                </Left>
            </div>
        </ProjectMain>
    )
}

export default Project