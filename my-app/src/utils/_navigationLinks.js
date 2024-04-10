import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Skill from "../pages/Skill"
import Career from "../pages/Career"
import Realisation from "../pages/Realisation"

const navigationLinks = [
    { path: '/', label: 'Accueil', component: <Home /> },
    { path: '/parcours', label: 'Parcours', component: <Career /> },
    { path: '/competences', label: 'Compétences', component: <Skill /> },
    { path: '/realisation', label: 'Réalisations', component: <Realisation /> },
    { path: '/contact', label: 'Contact', component: <Contact /> },
]

export default navigationLinks