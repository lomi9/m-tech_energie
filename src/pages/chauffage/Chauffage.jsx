import Navbar from "../../components/navbar/Navbar";
import Prestations from "../../components/prestations/Prestations";
import Article from "../../components/article/Article";
import chauffage1 from "../../assets/chauffage_1.jpg";
import chauffage2 from "../../assets/chauffage_2.jpg";
import chauffage3 from "../../assets/chauffage_3.jpeg";
import chauffage4 from "../../assets/plomberie_1.jpeg";
import Scroller from "../../components/scroller/Scroller";
import imageChauffage from "../../assets/chaudiere-appartement.webp";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";


export default function Chauffage () {

    const images = [
        { url: chauffage2, description: "Description" },
        { url: chauffage3, description: "Description" },
        { url: chauffage4, description: "Description" },
        { url: chauffage1, description: "Description" },

      ];
      const title1 = "Nos services de chauffage";
      const text1 ="Chez M-Tech ENERGIE, nous proposons des solutions personnalisées pour la création, l'entretien et le diagnostic de vos installations de chauffage. Que ce soit pour un projet neuf, une rénovation ou une amélioration énergétique, nous garantissons un service de qualité, et adapté à vos besoins spécifiques."

      const chauffageImage = imageChauffage;

      const title2 = "Nos Services de chauffage en images";
      const text2 ="Dans notre galerie, explorez la diversité de nos projets, incluant l'installation de chauffages au sol, de chaudières, et d'autres systèmes. Chaque photo témoigne de notre polyvalence et de notre savoir-faire."

      const prestationsTitle = "Prestations";
      const prestationsList = [
        "Installations sanitaires complètes",
        "Création de douches à l'italienne",
        "Remplacement et maintenance de chauffe-eau",
        "Installation de solutions WC modernes et éco-responsables",
        "Installation de plomberie pour votre cuisine",
        "Mise en place de VMC",
        "Travaux de zinguerie pour une finition impeccable",
    ];

    return (
        <>
        <div className="header__navbar">
        <Navbar/>
        </div>
        <Article title={title1} text={text1} />
        <Prestations prestationsImage={chauffageImage} title={prestationsTitle} listItems={prestationsList}/>
        <Article title={title2} text={text2} />
        <Scroller images={images} />
        <Contact/>
        <Footer/>
        </>
    )
}