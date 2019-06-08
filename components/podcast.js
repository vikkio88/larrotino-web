export default ({ id, title, link, description }) => {
    return (
        <div className="podcast">
            <h2>
                <a href={link}>Episodio {`${id}`}</a>
            </h2>
            <h3>{title}</h3>
            {description}
        </div>
    );
}