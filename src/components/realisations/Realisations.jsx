import Scroller from "../scroller/Scroller";
import image1 from "../../assets/metallerie_8.jpg";
import image2 from "../../assets/plomberie_1.jpeg";
import image3 from "../../assets/chauffage_1.jpg";
import image4 from "../../assets/metallerie_2.jpeg";
import image5 from "../../assets/plomberie_9.jpg";
import image6 from "../../assets/metallerie_5.jpeg";
import image7 from "../../assets/metallerie_4.jpeg";
import image8 from "../../assets/plomberie_7.jpg";
import image9 from "../../assets/metallerie_3.jpeg";
import image10 from "../../assets/plomberie_4.jpg";

export default function Realisations () {

    const images = [
        { url: image1, description: "Fabrication d'une table basse sur-mesure." },
        { url: image2, description: 'Pose de nourrices pour plancher chauffant.' },
        { url: image3, description: 'Pose de circuits pour chauffage au sol.' },
        { url: image4, description: "Fabrication et installation d'un portillon, avec peinture epoxy coloris 7016." },
        { url: image5, description: "Pose d'une baignoire îlot et d'un robinet." },
        { url: image6, description: "Fabrication et pose d'une échelle sur mesure." },
        { url: image7, description: "Fabrication et pose d'une verrière sur mesure." },
        { url: image8, description: "Pose et raccordement d’un meuble double vasque, robinetterie et miroir." },
        { url: image9, description: "fabrication  et pose d'un portail double battant motorisé." },
        { url: image10, description: "Pose de carrelage de douche sol et mur, installation de la robinetterie." },

      ];
    return (
        <div className="realisations__home">
            <div className="realisations__home-description">
                <h2 className="realisations__home-description-title">Découvrez nos dernières réalisations</h2>
                <p className="realisations__home-description-text">Nous réalisons un travail soigné et livré dans les délais. Après notre intervention, nous vous garantissons un chantier propre. Grâce à notre savoir-faire et notre professionnalisme, nous sommes en mesure de réaliser de petites et grosses installations de plomberie, chauffage et de métallerie.</p>
            </div>
            <div className="realisations__home-scroller">
                <Scroller images={images} />
            </div>
            <div className="realisations__home-description">
                <h2 className="realisations__home-description-title">Découvrez nos dernières réalisations</h2>
            </div>
        </div>
    );
}