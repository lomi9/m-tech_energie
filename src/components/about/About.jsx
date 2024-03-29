import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cardLeft from "../../assets/card-plomberie-tuyaux.webp";
import cardCenter from "../../assets/card-chaudiere-appartement.webp";
import cardRight from "../../assets/card-metallier-travail-2.webp";

export default function About () {
    const [hoverState, setHoverState] = useState({ plomberie: false, chauffage: false, metallier: false });

    return (


            <section className="services" id="about">
                <div className="services__presentation">
                    <article className="services__presentation-content">
                        <h2 className="services__presentation-content-title">
                            Votre partenaire de confiance, <br/> pour des solutions innovantes.
                        </h2>
                        <p className="services__presentation-content-text">
                        Forts de plus de 14 années d'expérience, nous nous engageons à offrir un service de qualité supérieure, adapté à vos besoins uniques. Notre équipe d'experts combine savoir-faire technique et créativité pour transformer chaque projet en succès. Chez nous, votre satisfaction est notre priorité. Découvrez comment nous pouvons apporter une valeur ajoutée à votre espace de vie ou de travail. Nous intervenons principalement dans la région de Bourgoin-Jallieu et Lyon autant pour des particuliers que pour des professionnels .
                        </p>

                    </article>

                </div>
            
            <div className="services__cards">
                <div className="services__cards-card">
                <img src={cardLeft} alt="Plomberie"  className={`services__cards-card-img ${hoverState.plomberie ? 'zoomed' : ''}`}/>
                <div className={`services__cards-card-filter ${hoverState.plomberie ? 'darkened' : ''}`}>
                    <h3 className="services__cards-card-filter-title">
                     Plomberie
                    </h3>
                    <Link to="/plomberie" className="services__cards-card-filter-button">
                        <button className="services__cards-card-filter-button-btn"
                         onMouseEnter={() => setHoverState({ ...hoverState, plomberie: true })}
                         onMouseLeave={() => setHoverState({ ...hoverState, plomberie: false })}>
                     En savoir +
                     </button>
                    </Link>

                </div>
                </div>
                <div className="services__cards-card">
                <img src={cardCenter} alt="Chauffage" className={`services__cards-card-img ${hoverState.chauffage ? 'zoomed' : ''}`}/>
                <div className={`services__cards-card-filter ${hoverState.chauffage ? 'darkened' : ''}`}>
                    <h3 className="services__cards-card-filter-title">
                     Chauffage
                    </h3>
                    <Link to="/chauffage" className="services__cards-card-filter-button">
                        <button className="services__cards-card-filter-button-btn"
                                                 onMouseEnter={() => setHoverState({ ...hoverState, chauffage: true })}
                                                 onMouseLeave={() => setHoverState({ ...hoverState, chauffage: false })}>
                     En savoir +
                     </button>
                    </Link>

                </div>
                </div>
                <div className="services__cards-card">
                <img src={cardRight} alt="Métallerie" className={`services__cards-card-img ${hoverState.metallier ? 'zoomed' : ''}`}/>
                <div className={`services__cards-card-filter ${hoverState.metallier ? 'darkened' : ''}`}>
                    <h3 className="services__cards-card-filter-title">
                     Métallerie
                    </h3>
                    <Link to="/metallerie" className="services__cards-card-filter-button">
                        <button className="services__cards-card-filter-button-btn"
                         onMouseEnter={() => setHoverState({ ...hoverState, metallier: true })}
                         onMouseLeave={() => setHoverState({ ...hoverState, metallier: false })}>
                     En savoir +
                     </button>
                    </Link>

                </div>
                </div>
            
                </div>

            </section>
    )
}