import MainTitle from '../../components/MainTitle/'
import SecondTitle from '../../components/SecondTitle'
import CardSkill from '../../components/CardSkill'
import { SkillMain } from './style'
import { TabsList, Tab, TraitSeparator, TabsContent, TabPannel } from '../../utils/style/tabs'
import { useState } from 'react'
import dataSkill from './data';

function Skill() {
    const [active, setActive] = useState("frontEnd");

    return (
        <SkillMain>
            <MainTitle label={"Mes Compétences"} />
            <div className="container">
                <SecondTitle label={"Qu'est-ce que je connais ?"} />
                <TabsList>
                    <Tab onClick={() => setActive('frontEnd')}><h3 className={(active === 'frontEnd') ? "active" : ""}>Front End</h3></Tab>
                    <Tab onClick={() => setActive('backEnd')}><h3 className={(active === 'backEnd') ? "active" : ""}>Back End</h3></Tab>
                    <Tab onClick={() => setActive('devOps')}><h3 className={(active === 'devOps') ? "active" : ""}>DevOps</h3></Tab>
                </TabsList>
                <TraitSeparator />
                <TabsContent>
                    <TabPannel active={(active === 'frontEnd') ? 1 : 0}>
                        <h3>Front End</h3>
                        {dataSkill.frontEnd.map((skill) => (
                            <CardSkill key={skill.key} data={skill} />
                        ))}
                    </TabPannel>
                    <TabPannel active={(active === 'backEnd') ? 1 : 0}>
                        <h3>Back End</h3>
                        {dataSkill.backEnd.map((skill) => (
                            <CardSkill key={skill.key} data={skill} />
                        ))}
                    </TabPannel>
                    <TabPannel active={(active === 'devOps') ? 1 : 0}>
                        <h3>DevOps</h3>
                        {dataSkill.devOps.map((skill) => (
                            <CardSkill key={skill.key} data={skill} />
                        ))}
                    </TabPannel>
                </TabsContent>
            </div>
        </SkillMain>
    )
}

export default Skill