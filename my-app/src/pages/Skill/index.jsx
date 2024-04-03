import MainTitle from '../../components/MainTitle/'
import Separator from '../../components/Separator'
import CardSkill from '../../components/CardSkill'
import { SkillMain, SecondTitle, TabsList, Tab, TraitSeparator, TabsContent, TabPannel } from './style'
import { useState } from 'react'
import dataSkill from './data';

function Skill() {
    const [active, setActive] = useState("frontEnd");

    return (
        <SkillMain>
            <MainTitle label={"Mes Compétences"} />
            <div className="container">
                <SecondTitle>
                    <h2>Qu'est-ce que je connais ?</h2>
                    <Separator />
                </SecondTitle>
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