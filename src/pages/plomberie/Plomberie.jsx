import Navbar from "../../components/navbar/Navbar";
import Prestations from "../../components/prestations/Prestations";
import Article from "../../components/article/Article";
import plomberie1 from "../../assets/salle_de_bain_douche_1.webp";
import plomberie2 from "../../assets/douche_italienne_1.webp";
import plomberie3 from "../../assets/douche_2.webp";
import plomberie4 from "../../assets/plomberie_6.jpg";
import plomberie5 from "../../assets/plomberie_7.jpg";
import prestationsImage from "../../assets/plomberie-baignoire.webp";
import Scroller from "../../components/scroller/Scroller";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import TopImage from "../../components/topImage/TopImage";


export default function Plomberie () {

    const topImage = prestationsImage;
    const pageTitle = "Nos services de plomberie";
    const pageText = "Chez M Tech ENERGIE, nous offrons des services complets allant de l'installation neuve à la rénovation de votre plomberie sanitaire.  Nos compétences techniques nous permettent de répondre à une large gamme de besoins : de l'entretien minutieux au dépannage efficace. Notre équipe qualifiée s'engage également dans la mise en place de solutions durables.";

    const images = [
        { url: plomberie1, description: "Réalisation complète d'une salle de douche" },
        { url: plomberie2, description: "Réalisation complète d'une salle de bain" },
        { url: plomberie3, description: "Réalisation complète d'une salle de douche" },
        { url: plomberie4, description: "Pose et raccordement d'un WC suspendu" },
        { url: plomberie5, description: "Installation complète d'une salle de bain" },

      ];
      
      const imagePrestations = prestationsImage;
      const title2 = "Nos Services de Plomberie en Images";
      const text2 ="Explorez notre sélection de projets de plomberie où chaque intervention témoigne de notre volonté de vous offrir des services fiables et efficaces. De la réparation mineure aux créations entières de salles de bain, ces images illustrent notre engagement à répondre à vos besoins avec professionnalisme et attention aux détails. "

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
        <TopImage topImage={topImage} pageTitle={pageTitle} pageText={pageText}/>
        <Prestations prestationsImage={imagePrestations} title={prestationsTitle} listItems={prestationsList}/>
        <Article title={title2} text={text2} />
        <Scroller images={images} />
        <Contact/>
        <Footer/>
        </>
    )
}