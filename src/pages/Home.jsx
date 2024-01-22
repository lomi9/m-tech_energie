import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About.jsx";
import WorksHome from "../components/realisations/Realisations.jsx";
import Footer from "../components/footer/Footer.jsx";
import Contact from "../components/contact/Contact.jsx";
import Fournisseurs from "../components/fournisseurs/Fournisseurs.jsx";
import Marques from "../components/marques/Marques.jsx";


export default function Home () {
    return (
        <>
        <header className="header">
        <div className="header__navbar">
        <Navbar/>
        </div>
        </header>
        <div className="header__banner">
        <Banner/>
        </div>
        <div className="home__content">
        <About/>
        <WorksHome/>
        <Fournisseurs/>
        <Marques/>
        <Contact/>
        <Footer/>
        </div>
        </>
    )
}