import Navbar from "../../components/navbar/Navbar";
import Prestations from "../../components/prestations/Prestations";
import Article from "../../components/article/Article";
import chauffage1 from "../../assets/chauffage_1.jpg";
import chauffage2 from "../../assets/chauffage_2.jpg";
import chauffage3 from "../../assets/chauffage_3.jpeg";
import chauffage4 from "../../assets/plomberie_1.jpeg";
import Scroller from "../../components/scroller/Scroller";
import cardChauffage from "../../assets/card-chaudiere-appartement.webp";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import TopImage from "../../components/topImage/TopImage";


export default function Chauffage () {

    const topImage = cardChauffage;
    const pageTitle = "Nos services de chauffage";
    const pageText = "Chez M-Tech ENERGIE, nous proposons des solutions personnalisées pour la création, l'entretien et le diagnostic de vos installations de chauffage. Que ce soit pour un projet neuf, une rénovation ou une amélioration énergétique, nous garantissons un service de qualité, et adapté à vos besoins spécifiques.";


    const images = [
        { url: chauffage2, description: "Description" },
        { url: chauffage3, description: "Description" },
        { url: chauffage4, description: "Description" },
        { url: chauffage1, description: "Description" },

      ];
      const title1 = "Nos services de chauffage";
      const text1 ="Chez M-Tech ENERGIE, nous proposons des solutions personnalisées pour la création, l'entretien et le diagnostic de vos installations de chauffage. Que ce soit pour un projet neuf, une rénovation ou une amélioration énergétique, nous garantissons un service de qualité, et adapté à vos besoins spécifiques."

      const chauffageImage = cardChauffage;

      const title2 = "Nos Services de chauffage en images";
      const text2 ="Dans notre galerie, explorez la diversité de nos projets, incluant l'installation de chauffages au sol, de chaudières, et d'autres systèmes. Chaque photo témoigne de notre polyvalence et de notre savoir-faire."

      const prestationsTitle = "Prestations";
      const prestationsList = [
        "Entretien de chaudières",
        "Installation de nouvelles chaudières",
        "Maintenance de circulateurs",
        "Pose de sèche-serviettes",
        "Vérification de vases d'expansion (Flexcon)",
        "Inspection de soupapes de sécurité",
        "Désembuage de planchers chauffants",
        "Installation de planchers chauffants",
        "Diagnostics complets de systèmes de chauffage",
    ];

    return (
        <>
        <div className="header__navbar">
        <Navbar/>
        </div>
        <TopImage topImage={topImage} pageTitle={pageTitle} pageText={pageText}/>
        <Prestations prestationsImage={chauffageImage} title={prestationsTitle} listItems={prestationsList}/>
        <Article title={title2} text={text2} />
        <Scroller images={images} />
        <Contact/>
        <Footer/>
        </>
    )
}