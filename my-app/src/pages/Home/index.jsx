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
                    <TitleJob>Nom du poste</TitleJob>
                    <Name>Nom Prénom</Name>
                    <About>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, nobis libero! Voluptates dolorum placeat atque ratione eveniet ut perspiciatis facilis maiores quisquam sint quos repellendus voluptas commodi, nisi ipsum temporibus!
                    </About>
                    <LinkBox linkArray={linkArray} />
                </div>
            </div>
        </MainContainer>
    )
}

export default Home