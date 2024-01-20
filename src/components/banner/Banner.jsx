import bannerImg from "../../assets/metallier-etincelles.webp";
import { MoveDown } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Banner () {

    return (
        <div className="banner">
            <div className="banner__top">
                <img src={bannerImg} alt="Métallier faisant des étincelles" className="banner__top-img"/>
                <div className="banner__top-filter">
                    <div className="banner__top-filter-content">
                        <h1 className="banner__top-filter-content-title">Expertise en plomberie, chauffage et métallerie.</h1>
                        <p className="banner__top-filter-content-text">Votre confort, notre engagement.</p>
                    </div>
                    <a href="#about" className="banner__top-filter-scroll">
                        <span href="#about" className="banner__top-filter-scroll-icon icon-bounce"><MoveDown/></span>
                    </a>

                </div>
            </div>
        </div>
    )
}