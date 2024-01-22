import bannerImgDesktop from "../../assets/banner-metallerie-desktop.webp";
import bannerImgTab from "../../assets/banner-metallerie-tab.webp";
import bannerImgMobile from "../../assets/banner-metallerie-mobile.webp";
import { MoveDown } from 'lucide-react';


export default function Banner () {

    return (
        <div className="banner">
            <div className="banner__top">
            <img 
                    src={bannerImgDesktop} 
                    srcSet={`${bannerImgMobile} 500w, ${bannerImgTab} 800w, ${bannerImgDesktop} 1200w`}
                    sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, 1200px"
                    alt="Métallier faisant des étincelles" 
                    className="banner__top-img"
                />
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