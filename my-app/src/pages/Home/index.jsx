import avatar from '../../assets/images/avatar.jpg';
import { MainContainer, Avatar, TitleJob, Name, About } from './style';
import LinkBox from '../../components/LinkBox';

function Home() {
    const linkArray = [
        { link: '/realisation', label: 'Réalisation', inner: true },
        { link: '/contact', label: 'Contact', inner: true }
    ]
    return (
        <MainContainer>
            <div className="container">
                <Avatar>
                    <img src={avatar} alt="avatar" />
                </Avatar>
                <div>
                    <TitleJob>Développeur Full-Stack Junior</TitleJob>
                    <Name>Ducret Bryan</Name>
                    <About>
                        <p>
                            <strong>De la maintenance industrielle au développement web,</strong> ma transition professionnelle témoigne de ma passion pour la technologie.
                        </p>
                        <br />
                        <p>
                            Fort d'une formation en Développement Web et mobile, je suis désormais à la recherche d'opportunités stimulantes pour mettre en pratique mes compétences dans le domaine du développement.
                        </p>
                    </About>
                    <LinkBox linkArray={linkArray} />
                </div>
            </div>
        </MainContainer>
    )
}

export default Home