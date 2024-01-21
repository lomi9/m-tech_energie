import Navbar from "../../components/navbar/Navbar";
import Prestations from "../../components/prestations/Prestations";
import Article from "../../components/article/Article";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import metallerie1 from "../../assets/metallerie_1.jpeg";
import metallerie2 from "../../assets/metallerie_2.jpeg";
import metallerie3 from "../../assets/metallerie_3.jpeg";
import metallerie4 from "../../assets/metallerie_4.jpeg";
import metallerie5 from "../../assets/metallerie_5.jpeg";
import metallerie6 from "../../assets/metallerie_6.jpeg";
import metallerie7 from "../../assets/metallerie_7.jpeg";
import metallerie8 from "../../assets/metallerie_8.jpg";
import metallerie9 from "../../assets/metallerie_9.jpeg";
import metallerie10 from "../../assets/metallerie_10.jpeg";
import metallerie11 from "../../assets/metallerie_11.jpg";
import metallerie12 from "../../assets/metallerie_12.jpg";
import metallerie from "../../assets/metallier-travail.webp";
import Scroller from "../../components/scroller/Scroller";;


export default function Metallerie () {

    const images = [
        { url: metallerie1, description: "Description" },
        { url: metallerie2, description: "Description" },
        { url: metallerie3, description: "Description" },
        { url: metallerie4, description: "Description" },
        { url: metallerie5, description: "Description" },
        { url: metallerie6, description: "Description" },
        { url: metallerie7, description: "Description" },
        { url: metallerie8, description: "Description" },
        { url: metallerie9, description: "Description" },
        { url: metallerie10, description: "Description" },
        { url: metallerie11, description: "Description" },
        { url: metallerie12, description: "Description" },

      ];
      const title1 = "Nos services de métallerie";
      const text1 ="Chez M-Tech ENERGIE, nous proposons des solutions personnalisées pour la création, l'entretien et le diagnostic de vos installations de chauffage. Que ce soit pour un projet neuf, une rénovation ou une amélioration énergétique, nous garantissons un service de qualité, et adapté à vos besoins spécifiques."

      const metallerieImage = metallerie;

      const title2 = "Nos Services de métallerie en images";
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
        <Prestations prestationsImage={metallerieImage} title={prestationsTitle} listItems={prestationsList}/>
        <Article title={title2} text={text2} />
        <Scroller images={images} />
        <Contact/>
        <Footer/>
        </>
    )
}