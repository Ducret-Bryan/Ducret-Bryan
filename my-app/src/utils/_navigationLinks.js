import Home from "../pages/Home"
import Contact from "../pages/Contact"

const navigationLinks = [
    { path: '/', label: 'Accueil', component: <Home /> },
    { path: '/parcours', label: 'Parcours', component: '' },
    { path: '/competences', label: 'Compétences', component: '' },
    { path: '/realisation', label: 'Réalisations', component: '' },
    { path: '/contact', label: 'Contact', component: <Contact /> },
]

export default navigationLinks