export default ({ id, title, description, fileUrl, youtube = null, spreaker = null, notes = [] }) => {
    return (
        <div>
            <h1>Episodio {`${id}`}</h1>
            <div className="podcast">
                <h2>{title}</h2>
                {description}
                {!spreaker ? (
                    <audio controls>
                        <source src={fileUrl} type="audio/mpeg" />
                    </audio>
                ) : (
                        <>
                            <h3>Spreaker</h3>
                            {spreaker}
                        </>
                    )}
                {youtube && (
                    <>
                        <h3>Youtube</h3>
                        {youtube}
                    </>
                )}
                {notes.length > 0 && <div className="notes">
                    <h4>Note dell'episodio</h4>
                    <ul>
                        {notes.map((n, index) => (<li key={index}>{n}</li>))}
                    </ul>
                </div>
                }
            </div>
        </div >
    );
}