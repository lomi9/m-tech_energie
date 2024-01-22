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
import cardMetallerie from "../../assets/card-metallier-travail-2.webp";
import Scroller from "../../components/scroller/Scroller";import TopImage from "../../components/topImage/TopImage";
;


export default function Metallerie () {

    const topImage = cardMetallerie;
    const pageTitle = "Nos services de métallerie";
    const pageText = "Notre galerie de photos illustre notre expertise dans la fabrication sur mesure de tables basses, garde-corps, escaliers et portails extérieurs. Chaque image dévoile notre passion pour le travail du métal, soulignant notre capacité à transformer des idées en réalisations uniques et personnalisées.";


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
      const text1 ="De la conception de meubles sur mesure à la fabrication d'éléments structuraux personnalisés, notre équipe excelle dans l'art de la métallerie. Chacune de nos créations est façonnée avec précision et créativité, en mêlant esthétique et fonctionnalité. Nos techniques de soudure, perçage, pliage et découpe nous permettent de répondre à la totalité de vos besoins, enrichissant vos espaces de vie intérieurs et extérieurs."

      const metallerieImage = cardMetallerie;

      const title2 = "Nos Services de métallerie en images";
      const text2 ="Notre galerie de photos illustre notre expertise dans la fabrication sur mesure de tables basses, garde-corps, escaliers et portails extérieurs. Chaque image dévoile notre passion pour le travail du métal, soulignant notre capacité à transformer des idées en réalisations uniques et personnalisées."

      const prestationsTitle = "Prestations";
      const prestationsList = [
        "Ameublement intérieur sur mesure : Conception et réalisation de pièces uniques adaptées à votre espace.",
        "Fabrication et pose de verrières",
        "Fabrication de portillons extérieurs",
        "Conception de portails électriques pratiques et sécurisés",
        "Création de pièces décoratives qui ajoutent une touche unique à votre intérieur.",
        "Réalisation de gardes-corps sécurisés et personnalisés",
        "Conception d'escaliers sur mesure",
        "Projets personnalisés : Nous sommes à votre écoute pour réaliser tout autre projet selon vos désirs et spécifications.",
    ];

    return (
        <>
        <div className="header__navbar">
        <Navbar/>
        </div>
        <TopImage topImage={topImage} pageTitle={pageTitle} pageText={pageText}/>
        <Prestations prestationsImage={metallerieImage} title={prestationsTitle} listItems={prestationsList}/>
        <Article title={title2} text={text2} />
        <Scroller images={images} />
        <Contact/>
        <Footer/>
        </>
    )
}