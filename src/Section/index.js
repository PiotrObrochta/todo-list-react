import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__header section__taskListTitleButtons">
            <h2>{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;
