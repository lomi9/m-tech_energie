import React, { useState } from 'react';
import bannerLeft from "../../assets/plomberie-tuyaux.webp";
import bannerCenter from "../../assets/chaudiere-appartement.webp";
import bannerRight from "../../assets/metallier-travail.webp";

export default function Services () {
    const [hoverState, setHoverState] = useState({ plomberie: false, chauffage: false, metallier: false });

    return (


            <section className="services" id="about">
                <div className="services__presentation">
                    <div className="services__presentation-content">
                        <h2 className="services__presentation-content-title">
                            Votre partenaire de confiance, <br/> pour des solutions innovantes.
                        </h2>
                        <p className="services__presentation-content-text">
                        Forts de plus de 14 années d'expérience, nous nous engageons à offrir un service de qualité supérieure, adapté à vos besoins uniques. Notre équipe d'experts combine savoir-faire technique et créativité pour transformer chaque projet en succès. Chez nous, votre satisfaction est notre priorité. Découvrez comment nous pouvons apporter une valeur ajoutée à votre espace de vie ou de travail. Nous intervenons principalement dans la région de Bourgoin-Jallieu et Lyon autant pour des particuliers que pour des professionnels .
                        </p>

                    </div>

                </div>
            
            <div className="services__cards">
                <div className="services__cards-card">
                <img src={bannerLeft} alt="Plomberie"  className={`services__cards-card-img ${hoverState.plomberie ? 'zoomed' : ''}`}/>
                <div className={`services__cards-card-filter ${hoverState.plomberie ? 'darkened' : ''}`}>
                    <h3 className="services__cards-card-filter-title">
                     Plomberie
                    </h3>
                    <div className="services__cards-card-filter-button">
                        <button className="services__cards-card-filter-button-btn"
                         onMouseEnter={() => setHoverState({ ...hoverState, plomberie: true })}
                         onMouseLeave={() => setHoverState({ ...hoverState, plomberie: false })}>
                     En savoir +
                     </button>
                    </div>

                </div>
                </div>
                <div className="services__cards-card">
                <img src={bannerCenter} alt="Chauffage" className={`services__cards-card-img ${hoverState.chauffage ? 'zoomed' : ''}`}/>
                <div className={`services__cards-card-filter ${hoverState.chauffage ? 'darkened' : ''}`}>
                    <h3 className="services__cards-card-filter-title">
                     Chauffage
                    </h3>
                    <div className="services__cards-card-filter-button">
                        <button className="services__cards-card-filter-button-btn"
                                                 onMouseEnter={() => setHoverState({ ...hoverState, chauffage: true })}
                                                 onMouseLeave={() => setHoverState({ ...hoverState, chauffage: false })}>
                     En savoir +
                     </button>
                    </div>

                </div>
                </div>
                <div className="services__cards-card">
                <img src={bannerRight} alt="Métallerie" className={`services__cards-card-img ${hoverState.metallier ? 'zoomed' : ''}`}/>
                <div className={`services__cards-card-filter ${hoverState.metallier ? 'darkened' : ''}`}>
                    <h3 className="services__cards-card-filter-title">
                     Métallerie
                    </h3>
                    <div className="services__cards-card-filter-button">
                        <button className="services__cards-card-filter-button-btn"
                         onMouseEnter={() => setHoverState({ ...hoverState, metallier: true })}
                         onMouseLeave={() => setHoverState({ ...hoverState, metallier: false })}>
                     En savoir +
                     </button>
                    </div>

                </div>
                </div>
            
                </div>

            </section>
    )
}