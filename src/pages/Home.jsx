import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About.jsx";
import WorksHome from "../components/realisations/Realisations.jsx";
import Footer from "../components/footer/Footer.jsx";
import Contact from "../components/contact/Contact.jsx";


export default function Home () {
    return (
        <>
        <header className="header">
        <div className="header__navbar">
        <Navbar/>
        </div>
        <div className="header__banner">
        <Banner/>
        </div>
        </header>
        <About/>
        <WorksHome/>
        <Contact/>
        <Footer/>
        </>
    )
}