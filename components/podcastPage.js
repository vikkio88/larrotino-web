export default ({ id, title, description, fileUrl, notes = [] }) => {
    return (
        <div>
            <h1>Episodio {`${id}`}</h1>
            <div className="podcast">
                <h2>{title}</h2>
                {description}
                <audio controls>
                    <source src={fileUrl} type="audio/mpeg" />
                </audio>
                {notes.length > 0 && <div className="notes">
                    Note dell'episodio
                    <ul>
                        {notes.map((n, index) => (<li key={index}>{n}</li>))}
                    </ul>
                </div>
                }
            </div>
        </div >
    );
}