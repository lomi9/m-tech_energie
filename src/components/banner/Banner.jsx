import bannerImg from "../../assets/metallier-etincelles.webp";
import { MoveDown } from 'lucide-react';


export default function Banner () {

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return (
        <div className="banner">
            <div className="banner__top">
                <img src={bannerImg} alt="Métallier faisant des étincelles" className="banner__top-img"/>
                <div className="banner__top-filter">
                    <div className="banner__top-filter-content">
                        <h1 className="banner__top-filter-content-title">Expertise en plomberie, chauffage et métallerie.</h1>
                        <p className="banner__top-filter-content-text">Votre confort, notre engagement.</p>
                    </div>
                    <div className="banner__top-filter-scroll">
                        <span onClick={scrollToAbout} className="banner__top-filter-scroll-icon icon-bounce"><MoveDown/></span>
                    </div>

                </div>
            </div>
        </div>
    )
}