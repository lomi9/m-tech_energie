import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import marque1 from "../../assets/marques/logo-alantic.png";
import marque2 from "../../assets/marques/logo-frisquet.png";
import marque3 from "../../assets/marques/logo-geberit.png";
import marque4 from "../../assets/marques/logo-thermor.png";
import background from "../../assets/card-chaudiere-appartement.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Marques () {

    const marques = [
        {
            imgSrc: marque1,
            link: "https://www.atlantic.fr",
            altText: "Atlantic"
        },
        {
            imgSrc: marque2,
            link: "https://www.frisquet.com",
            altText: "Frisquet"
        },
        {
            imgSrc: marque3,
            link: "https://www.geberit.fr/accueil/",
            altText: "Geberit"
        },
        {
            imgSrc: marque4,
            link: "https://www.thermor.fr",
            altText: "Thermor"
        },
        
    ];

    useEffect(() => {
        gsap.to(".marques__bottom-background", {
            scrollTrigger: {
                trigger: ".marques__bottom",
                start: "top bottom+=150", 
                end: "bottom top", 
                scrub: true, 
            },
            y: -200, 
        });
    }, []);
    

    return (
        <section className="marques"> 
            <div className="marques__top">
                <h3 className="marques__top-title">Nos marques préférées</h3>
            </div>
            <div className="marques__bottom">
            <img src={background} alt="Homme travaillant le métal" className="marques__bottom-background"/>
            <div className="marques__bottom-content">
            {marques.map((marques, index) => (
                    <article key={index} className="marques__bottom-content-article">
                        <a href={marques.link} target="_blank" rel="noopener noreferrer" className="marques__bottom-content-article-link">
                            <img src={marques.imgSrc} alt={marques.altText} className="marques__bottom-content-article-link-logo"/>
                        </a>
                    </article>
                ))}
                </div>
            </div>

        </section>
    )
}