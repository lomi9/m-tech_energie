import image1 from "../../assets/plomberie-baignoire.webp";

export default function PlomberieServices () {
    return (
        <div className="plomberie__services">

            <div className="plomberie__services-left">
                <div className="plomberie__services-left-image">
                    <img src={image1} alt="Plomberie" className="plomberie__services-left-image-img"/>
                </div>
            </div>

            <div className="plomberie__services-right">
                <div className="plomberie__services-right-title">
                    <h2 className="plomberie__services-right-title-h1">
                        Prestations
                    </h2>
                </div>
                <div className="plomberie__services-right-yellow">
                    <ul className="plomberie__services-right-yellow-list">
                        <li className="plomberie__services-right-yellow-list-item">Installations sanitaires complètes</li>
                        <li className="plomberie__services-right-yellow-list-item">Création de douches à l'italienne</li>
                        <li className="plomberie__services-right-yellow-list-item">Remplacement et maintenance de chauffe-eau</li>
                        <li className="plomberie__services-right-yellow-list-item">Installation de solutions WC modernes et éco-responsables</li>
                        <li className="plomberie__services-right-yellow-list-item">Installation de plomberie pour votre cuisine</li>
                        <li className="plomberie__services-right-yellow-list-item">Mise en place de VMC</li>
                        <li className="plomberie__services-right-yellow-list-item">Travaux de zinguerie pour une finition impeccable</li>

                    </ul>
                </div>
            </div>


        </div>
    )
}