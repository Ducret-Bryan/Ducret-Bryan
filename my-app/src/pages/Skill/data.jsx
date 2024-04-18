import html from '../../assets/images/icons/skill/html.png'
import react from '../../assets/images/icons/skill/react.png'
import javaScript from '../../assets/images/icons/skill/javascript.png'
import php from '../../assets/images/icons/skill/php.png'
import database from '../../assets/images/icons/skill/database.png'
import framework from '../../assets/images/icons/skill/framework.png'
import docker from '../../assets/images/icons/skill/docker.png'
import gitlab from '../../assets/images/icons/skill/gitlab.png'

const data = {
  "frontEnd": [
    {
      "key": "front_1",
      "icon": [html, "icons"],
      "title": "HTML & CSS",
      "description": "Ensemble, HTML et CSS forment une équipe puissante qui vous permet de créer des sites web attrayants et fonctionnels."
    },
    {
      "key": "front_2",
      "icon": [javaScript, "icons"],
      "title": "JavaScript",
      "description": "JavaScript apporte une dimension interactive aux pages web. Il permet de gérer des formulaires, de récupérer des données et bien plus encore."
    },
    {
      "key": "front_3",
      "icon": [react, "icons"],
      "title": "React",
      "description": "React est une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur. Elle offre une approche basée sur les composants, facilitant la construction et la maintenance d'applications web complexes et évolutives."
    }
  ],
  "backEnd": [
    {
      "key": "PHP",
      "icon": [php, "icons"],
      "title": "PHP",
      "description": "PHP est un langage de programmation puissant pour créer des sites web dynamiques. Il vous permet de traiter des données, d'interagir avec des bases de données et de générer du contenu HTML personnalisé."
    },
    {
      "key": "MySQL",
      "icon": [database, "icons"],
      "title": "Database",
      "description": "MySQL est un système de gestion de bases de données (SGBD) populaire. Il vous permet de stocker, d'organiser et de récupérer des données de manière efficace pour votre site web."
    },
    {
      "key": "Symfony",
      "icon": [framework, "icons"],
      "title": "Database",
      "description": "Symfony est un framework PHP open source qui facilite le développement d'applications web modernes et sécurisées. Il offre des outils puissants pour la gestion des requêtes HTTP, le routage, l'ORM (Object Relational Mapping) et bien plus encore."
    }
  ],
  "devOps": [
    {
      "key": "dev_1",
      "icon": [docker, "icons"],
      "title": "Docker",
      "description": "Docker est une plateforme de conteneurisation qui permet de packager des applications et leurs dépendances dans des unités isolées appelées conteneurs. Cela facilite le déploiement et l'exécution des applications dans différents environnements, sans conflit de configuration."
    },
    {
      "key": "dev_2",
      "icon": [gitlab, "icons"],
      "title": "GitLab",
      "description": "GitLab est un outil de gestion de versions et de développement DevOps qui facilite la collaboration entre les développeurs. Il permet de stocker le code source, suivre les modifications, gérer les tâches et automatiser les processus de déploiement."
    }
  ]
}

export default data