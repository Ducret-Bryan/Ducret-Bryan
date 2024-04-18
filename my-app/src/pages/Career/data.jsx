// Icons from Flaticons
import grocery from '../../assets/images/icons/career/grocery.png' // surang
import productionLine from '../../assets/images/icons/career/productionLine.png' // Iconic Panda
import school from '../../assets/images/icons/career/school.png'// Freepik
import formation from '../../assets/images/icons/career/formation.png' // SBTS2018

const data = {
    "experience": [
        {
            "key": "experience_1",
            "icon": [grocery, "icons"],
            "date": " Juin - Juillet 2023",
            "job_company": "Stage - Épicerie Thouvenot",
            "description": "Stage de 4 semaines faites lors de la formation de developpeur web & mobile dans une épicerie à Dammarie-Sur-Saulx (55).",
            "list": ['Conception d\'un site web avec Symfony'],
            "tags": ['Symfony', 'JavaScript', 'HTML & CSS', 'PHP', 'MySQL']
        },
        {
            "key": "experience_2",
            "icon": [productionLine, "icons"],
            "date": "Jan 2019 - Jan 2023",
            "job_company": "CDI - Celtex France",
            "description": "Conducteur de ligne dans une entreprise de production d’essuis-main, drap d’examen,... Ancien poste: Mandrineur, Fin de ligne",
            "list": [
                'Gestion de machine en automomie',
                'Contrôle de qualité des produits',
                'Aide à la maintenance des machines'
            ],
            "tags": []
        }
    ],
    "education": [
        {
            "key": "education_1",
            "icon": [school, "icons"],
            "date": "Jan 2019 - Jan 2023",
            "job_company": "License Pro - Maintenance des Systèmes Pluritechniques",
            "description": "Spécialité Techniques Avancées de Maintenances. Licence professionnelle réalisé à l'IUT de Chalons-en-Champagne correspondant à un niveau de bac+3. ",
            "list": [],
            "tags": []
        },
        {
            "key": "education_2",
            "icon": [school, "icons"],
            "date": "Janvier 2019 - Janvier 2023",
            "job_company": "BTS -Maintenance des Systèmes",
            "description": "Option production. Brevet de Technicien Supérieur réalisé au lycée Blaise Pascal à Saint-Dizier.",
            "list": [],
            "tags": []
        },
        {
            "key": "education_3",
            "icon": [school, "icons"],
            "date": "Janvier 2019 - Janvier 2023",
            "job_company": "Bac Pro - Maintenance des Equipement Industriel",
            "description": "Baccalauréat Professionnel réalisé au lycée Blaise Pascal à Saint-Dizier.",
            "list": [],
            "tags": []
        }
    ],
    "formation": [
        {
            "key": "formation_1",
            "icon": [formation, "icons"],
            "date": "Oct - Dec 2023",
            "job_company": "DevOps - Alternance/SFP",
            "description": "J'ai suivi une formation pour devenir concepteur développeur d'applications en alternance au Pôle formation UIMM de Charleville-Mézières, mais je n'ai pas réussi à trouver une entreprise d'accueil, ce qui m'a contraint à abandonner l'aventure en décembre. J'ai pu apprendre des connaissances sur les docker et GitLab.",

            "list": [],
            "tags": []
        },
        {
            "key": "formation_2",
            "icon": [formation, "icons"],
            "date": "Janv - Sept 2023",
            "job_company": "Développeur Web & Mobile - Présentiel",
            "description": "J'ai suivi une formation au Pôle Formation UIMM de Charleville-Mézières, où j'ai acquis des compétences en conception de sites web, que ce soit avec HTML, CSS, JS, en MVC ou l'utilisation du framework Symfony.",
            "list": [],
            "tags": []
        },
    ]
}

export default data