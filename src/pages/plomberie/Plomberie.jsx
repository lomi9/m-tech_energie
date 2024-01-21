import Navbar from "../../components/navbar/Navbar";
import Prestations from "../../components/prestations/Prestations";
import Article from "../../components/article/Article";
import plomberie1 from "../../assets/salle_de_bain_douche_1.webp";
import plomberie2 from "../../assets/douche_italienne_1.webp";
import plomberie3 from "../../assets/douche_2.webp";
import plomberie4 from "../../assets/plomberie_6.jpg";
import plomberie5 from "../../assets/plomberie_7.jpg";
import Scroller from "../../components/scroller/Scroller";
import Footer from "../../components/footer/Footer";


export default function Plomberie () {

    const images = [
        { url: plomberie1, description: "Réalisation complète d'une salle de douche" },
        { url: plomberie2, description: "Réalisation complète d'une salle de bain" },
        { url: plomberie3, description: "Réalisation complète d'une salle de douche" },
        { url: plomberie4, description: "Pose et raccordement d'un WC suspendu" },
        { url: plomberie5, description: "Installation complète d'une salle de bain" },

      ];
      const title1 = "Nos services de plomberie";
      const text1 =" Chez M Tech ENERGIE, nous offrons des services complets allant de l'installation neuve à la rénovation de votre plomberie sanitaire.  Nos compétences techniques nous permettent de répondre à une large gamme de besoins : de l'entretien minutieux au dépannage efficace. Notre équipe qualifiée s'engage également dans la mise en place de solutions durables."

      const title2 = "Quelques exemples de nos réalisations de plomberie";
      const text2 =""

    return (
        <>
        <div className="header__navbar">
        <Navbar/>
        </div>
        <Article title={title1} text={text1} />
        <Prestations/>
        <Article title={title2} text={text2} />
        <Scroller images={images} />
        <Footer/>
        </>
    )
}