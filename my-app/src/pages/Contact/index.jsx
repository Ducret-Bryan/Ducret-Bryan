import MainTitle from "../../components/MainTitle";
import { MainContact, ContactCard, Card, Icon, Title, Infos, ContactMe, ContactForm, InputContainer, Left, Right, ButtonForm, ErrorMessage, Submit, Reset } from './style';
import SendMail from '../../utils/service/sendEmail.service'

//Image 
import iphone from '../../assets/images/icons/contact/iphone.png';
import placeHolder from '../../assets/images/icons/contact/placeholder.png';
import email from '../../assets/images/icons/contact/email.png';
import Separator from "../../components/Separator/";
import { useState } from "react";

function Contact() {
    const [isEmpty, setIsEmpty] = useState(false);

    // Méthode
    const SubmitFom = async (e) => {
        e.preventDefault();
        const form = e.target;
        let inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            if (!input.value) setIsEmpty(true);
        });
        if (!form.querySelector('textarea').value) setIsEmpty(true);

        if (!isEmpty) SendMail(form);
    }

    return (
        <MainContact>
            <MainTitle label="Mes Contacts" />
            <div className="container">
                <ContactCard>
                    <Card>
                        <Icon src={iphone} alt="iphone icons" />
                        <div>
                            <Title>07 68 14 27 35</Title>
                            <Infos>N'hésitez pas à me laisser un message si besoin.</Infos>
                        </div>
                    </Card>
                    <Card>
                        <Icon src={placeHolder} alt="placeholder icons" />
                        <div>
                            <Title>Saint-Dizier, 52100</Title>
                            <Infos>Je suis situé dans le Grand-Est, plus précisément en Haute-Marne.</Infos>
                        </div>
                    </Card>
                    <Card>
                        <Icon src={email} alt="email icons" />
                        <div>
                            <Title>ducret.bryan@gmail.com</Title>
                            <Infos>Vous pouvez aussi m'envoyer un message via le formulaire.</Infos>
                        </div>
                    </Card>
                </ContactCard>
                <ContactMe>
                    <h2>Contactez-moi</h2>
                    <Separator />
                    <ContactForm autoComplete="off" onSubmit={SubmitFom}>
                        <InputContainer>
                            <Left>
                                <div>
                                    <label htmlFor="from_name">NOM Prénom</label>
                                    <input type="text" name="from_name" placeholder="Dupont Jean" required />
                                </div>
                                <div>
                                    <label htmlFor="from_email">E-mail</label>
                                    <input type="email" name="from_email" placeholder="dupont.jean@gmail.com" />
                                </div>
                                <div>
                                    <label htmlFor="from_subject">Subject</label>
                                    <select name="from_subject" >
                                        <option value="Question Divers" defaultChecked>Question divers</option>
                                        <option value="Question Projet">Question sur un projet</option>
                                        <option value="Proposition">Proposition de projet</option>
                                        <option value="Collaboration">Collaboration</option>
                                    </select>
                                </div>
                            </Left>
                            <Right>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" cols="30" rows="10" placeholder="Un jeune homme se réveil dans son lit, plein d'énergie et de projets pour la journée. Il se prépare un café et s'installe à son bureau pour commencer à travailler. Il est déterminé à réussir et à réaliser ses rêves.
                                " required></textarea>
                            </Right>
                        </InputContainer>
                        {isEmpty ? (<ErrorMessage>Les champs du formulaire ne peux pas être vide.</ErrorMessage>) : null}
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