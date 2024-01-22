import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import fournisseur1 from "../../assets/fournisseurs/logo-cedeo.png";
import fournisseur2 from "../../assets/fournisseurs/logo-chavrier.png";
import fournisseur3 from "../../assets/fournisseurs/logo-descours.png";
import fournisseur4 from "../../assets/fournisseurs/logo-richardson.png";
import fournisseur5 from "../../assets/fournisseurs/logo-tereva.png";
import background from "../../assets/banner-metallerie-desktop.webp"

gsap.registerPlugin(ScrollTrigger);


export default function Fournisseurs () {

    const fournisseurs = [
        {
            imgSrc: fournisseur1,
            link: "https://www.cedeo.fr",
            altText: "Cedeo"
        },
        {
            imgSrc: fournisseur5,
            link: "https://www.tereva-direct.fr",
            altText: "Téréva"
        },
        {
            imgSrc: fournisseur2,
            link: "https://fr.mappy.com/poi/50afedcb84ae616f72b20f04",
            altText: "Chavrier"
        },
        {
            imgSrc: fournisseur3,
            link: "https://www.descours-cabaud.com",
            altText: "Descours et Cabaud"
        },
        {
            imgSrc: fournisseur4,
            link: "https://www.richardson.fr",
            altText: "Richardson"
        },
        
    ];

    useEffect(() => {
        gsap.to(".fournisseurs__bottom-background", {
            scrollTrigger: {
                trigger: ".fournisseurs__bottom",
                start: "top bottom+=150", 
                end: "bottom top", 
                scrub: true, 
            },
            y: -200, 
        });
    }, []);
    

    return (
        <section className="fournisseurs"> 
            <div className="fournisseurs__top">
                <h3 className="fournisseurs__top-title">Nos fournisseurs</h3>
            </div>
            <div className="fournisseurs__bottom">
            <img src={background} alt="Homme travaillant le métal" className="fournisseurs__bottom-background"/>
            <div className="fournisseurs__bottom-content">
            {fournisseurs.map((fournisseur, index) => (
                    <article key={index} className="fournisseurs__bottom-content-article">
                        <a href={fournisseur.link} target="_blank" rel="noopener noreferrer" className="fournisseurs__bottom-content-article-link">
                            <img src={fournisseur.imgSrc} alt={fournisseur.altText} className="fournisseurs__bottom-content-article-link-logo"/>
                        </a>
                    </article>
                ))}
                </div>
            </div>

        </section>
    )
}