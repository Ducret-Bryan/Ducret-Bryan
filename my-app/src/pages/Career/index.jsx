import MainTitle from '../../components/MainTitle/'
import SecondTitle from '../../components/SecondTitle'
import CardCareer from '../../components/CardCareer'
import { CareerMain } from './style'
import { TabsList, Tab, TraitSeparator, TabsContent, TabPannel } from '../../utils/style/tabs'
import { useState } from 'react'
import dataCareer from './data';

function Career() {
    const [active, setActive] = useState("experience");

    return (
        <CareerMain>
            <MainTitle label={"Mes Compétences"} />
            <div className="container">
                <SecondTitle label={"Qu'est-ce que j'ai fais ?"} />
                <TabsList>
                    <Tab onClick={() => setActive('experience')}><h3 className={(active === 'experience') ? "active" : ""}>Expérience</h3></Tab>
                    <Tab onClick={() => setActive('education')}><h3 className={(active === 'education') ? "active" : ""}>Éducation</h3></Tab>
                    <Tab onClick={() => setActive('formation')}><h3 className={(active === 'formation') ? "active" : ""}>Formation</h3></Tab>
                </TabsList>
                <TraitSeparator />
                <TabsContent>
                    <TabPannel active={(active === 'experience') ? 1 : 0}>
                        <h3>Front End</h3>
                        {dataCareer.experience.map((Career) => (
                            <CardCareer key={Career.key} data={Career} />
                        ))}
                    </TabPannel>
                    <TabPannel active={(active === 'education') ? 1 : 0}>
                        <h3>Back End</h3>
                        {dataCareer.education.map((Career) => (
                            <CardCareer key={Career.key} data={Career} />
                        ))}
                    </TabPannel>
                    <TabPannel active={(active === 'formation') ? 1 : 0}>
                        <h3>DevOps</h3>
                        {dataCareer.formation.map((Career) => (
                            <CardCareer key={Career.key} data={Career} />
                        ))}
                    </TabPannel>
                </TabsContent>
            </div>
        </CareerMain>
    )
}

export default Career