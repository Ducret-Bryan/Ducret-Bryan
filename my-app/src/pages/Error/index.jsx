import MainTitle from "../../components/MainTitle"
import { ErrorMain, History } from "./style"
import image_404 from '../../assets/images/Error.png'
import SecondTitle from "../../components/SecondTitle"

function Error() {
    return (
        <ErrorMain>
            <MainTitle label={'Error 404'} />
            <div className="container">
                <img src={image_404} alt="" />
                <div>
                    <SecondTitle label={'La page que vous recherchez n\'existe pas ou est insdiponible.'} />
                    <p>Désolé pour ce problème, pour me pardonner, je vous offre une petite histoire.</p>
                    <History>
                        <p>
                            <strong>Fantomoustache et le livre poussiéreux</strong>
                        </p>
                        <p>
                            Fantomoustache, fantôme distrait, heurte un livre poussiéreux. Grimoire le Grand, fantôme bibliothécaire, en sort et le prend comme apprenti. Fantomoustache apprend à être un fantôme accompli, mais reste tête en l'air. Grimoire l'apprécie et voit en lui un grand potentiel.
                        </p>
                        <p>
                            <strong>Moralité:</strong> Même les fantômes distraits peuvent accomplir de grandes choses... avec un bon mentor et de l'humour !
                        </p>
                    </History>
                </div>
            </div>
        </ErrorMain>
    )
}

export default Error