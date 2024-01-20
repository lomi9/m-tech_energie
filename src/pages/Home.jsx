import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Services from "../components/services/Services";
import WorksHome from "../components/realisations/Realisations.jsx";


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
        <Services/>
        <WorksHome/>
        </>
    )
}