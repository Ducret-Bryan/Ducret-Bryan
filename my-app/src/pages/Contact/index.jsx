import MainTitle from "../../components/MainTitle";
import { MainContact, ContactCard, Card, Icon, Title, Infos, ContactMe, ContactForm, InputContainer, Left, Right, ButtonForm, Submit, Reset } from './style';

//Image 
import iphone from '../../assets/images/icons/iphone.png';
import placeHolder from '../../assets/images/icons/placeholder.png';
import email from '../../assets/images/icons/email.png';
import Separator from "../../components/Separator/";


function Contact() {

    return (
        <MainContact>
            <MainTitle label="Mes Contacts" />
            <div className="container">
                <ContactCard>
                    <Card>
                        <Icon src={iphone} alt="iphone icons" />
                        <div>
                            <Title>07 xx xx xx xx</Title>
                            <Infos>N'hésitez pas à me laisser un message si besoin.</Infos>
                        </div>
                    </Card>
                    <Card>
                        <Icon src={placeHolder} alt="placeholder icons" />
                        <div>
                            <Title>Paris, 75016</Title>
                            <Infos>Je suis situé dans le ...</Infos>
                        </div>
                    </Card>
                    <Card>
                        <Icon src={email} alt="email icons" />
                        <div>
                            <Title>Jean.Dupont@exemple.com</Title>
                            <Infos>Vous pouvez aussi m'envoyer un message via le formulaire.</Infos>
                        </div>
                    </Card>
                </ContactCard>
                <ContactMe>
                    <h2>Contactez-moi</h2>
                    <Separator />
                    <ContactForm action="" autoComplete="off">
                        <InputContainer>
                            <Left>
                                <div>
                                    <label htmlFor="name">NOM Prénom</label>
                                    <input type="text" name="name" placeholder="Dupont Jean" />
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="text" name="email" placeholder="dupont.jean@gmail.com" />
                                </div>
                                <div>
                                    <label htmlFor="objet">Objet</label>
                                    <select name="objet">
                                        <option value="question_divers" defaultChecked>Question divers</option>
                                        <option value="question_project">Question sur un projet</option>
                                        <option value="proposition">Proposition de projet</option>
                                        <option value="collab">Collaboration</option>
                                    </select>
                                </div>
                            </Left>
                            <Right>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" cols="30" rows="10" placeholder="Un jeune homme se réveil dans son lit, plein d'énergie et de projets pour la journée. Il se prépare un café et s'installe à son bureau pour commencer à travailler. Il est déterminé à réussir et à réaliser ses rêves.
                                "></textarea>
                            </Right>
                        </InputContainer>
                        <ButtonForm>
                            <Submit type="submit">Envoyer</Submit>
                            <Reset type="reset">Reset</Reset>
                        </ButtonForm>
                    </ContactForm>
                </ContactMe>
            </div>
        </MainContact>
    )
}

export default Contact