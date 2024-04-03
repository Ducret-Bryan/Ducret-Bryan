import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Skill from "../pages/Skill"

const navigationLinks = [
    { path: '/', label: 'Accueil', component: <Home /> },
    { path: '/parcours', label: 'Parcours', component: '' },
    { path: '/competences', label: 'Compétences', component: <Skill /> },
    { path: '/realisation', label: 'Réalisations', component: '' },
    { path: '/contact', label: 'Contact', component: <Contact /> },
]

export default navigationLinks