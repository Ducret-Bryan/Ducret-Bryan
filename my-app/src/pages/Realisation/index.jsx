import { RealisationMain, ClientList, Filter, ButtonFilter, SelectFilter, ProjectGalery } from './style'
import MainTitle from '../../components/MainTitle'
import SecondTitle from '../../components/SecondTitle'
import CardProject from '../../components/CardProject'
import { dataFilter, dataProject } from './data'
import { useState } from 'react'
import { breakPoints } from '../../utils/_variables'

function Realisation() {
    const [filter, setFilter] = useState('')
    const isMobile = window.innerWidth < breakPoints.tablet_landscape;

    return (
        <RealisationMain>
            <MainTitle label="Mes Réalisations" />
            <div className="container">
                <div>
                    <SecondTitle label={'Client'} />
                    <ClientList>
                        <li>Épicerie Thouvenot</li>
                        <li>Épicerie Thouvenot</li>
                        <li>Épicerie Thouvenot</li>
                        <li>Épicerie Thouvenot</li>
                        <li>Épicerie Thouvenot</li>
                    </ClientList>
                </div>
                <div>
                    <SecondTitle label={'Galerie'} />
                    <Filter>
                        {!isMobile ? dataFilter.map((data, index) => (
                            <ButtonFilter key={index} onClick={() => setFilter(data)}>{data.slice(0, 1).toUpperCase() + data.slice(1)}</ButtonFilter>
                        )) :
                            <SelectFilter onChange={(e) => setFilter(e.target.value)}>
                                {dataFilter.map((data, index) => (
                                    <option key={index} value={data}>{data.slice(0, 1).toUpperCase() + data.slice(1)}</option>
                                ))}
                            </SelectFilter>
                        }
                    </Filter>
                    <ProjectGalery>
                        {dataProject.map((project, index) => (
                            !filter || project.filter_tag.includes(filter)) ? (<CardProject key={index} project={project} />) : null
                        )}
                    </ProjectGalery>
                </div>
            </div>
        </RealisationMain>
    )
}

export default Realisation