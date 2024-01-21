

export default function SectionHeader ({ title, text }) {

    return (
        <div className="section__header">
            <div className="section__header-content">
                <h1 className="section__header-content-title">
                    {title}
                </h1>
                <p className="section__header-content-text">
                {text}
                </p>

            </div>

        </div>
    )
}