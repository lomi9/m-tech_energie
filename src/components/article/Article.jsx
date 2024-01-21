

export default function Article ({ title, text }) {

    return (
        <section className="section__header">
            <article className="section__header-content">
                <h1 className="section__header-content-title">
                    {title}
                </h1>
                <p className="section__header-content-text">
                {text}
                </p>

            </article>

        </section>
    )
}