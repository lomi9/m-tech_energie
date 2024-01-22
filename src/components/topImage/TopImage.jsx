

export default function TopImage ({ topImage, pageTitle, pageText }) {

    return (
        <section className="topimage">
            <div className="topimage__content">
                <img src={topImage} className="topimage__content-image" alt={pageTitle}/>
                <h1 className="topimage__content-title">
                {pageTitle}
                </h1>
                <div className="topimage__content-filter">

                </div>

            </div>
            <div className="topimage__text">
                <p className="topimage__text-p">
                    {pageText}
                </p>

            </div>
        </section>
    )
}