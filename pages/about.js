import Head from 'next/head';
import Page from '../layouts';

export default () => {
    return (
        <div>
            <Head>
                <title>L'Arrotino - Podcast - About</title>
            </Head>
            <Page>
                <div className="section">
                    <h1>About il Podcast</h1>
                    <p><strong>L'Arrotino</strong> è un podcast sporadico con l'obbiettivo unico di lasciarmi blaterare di
                    roba che ritengo interessante, invece di lasciarla stagnare nel mio cervello.</p>
                    <p>Vede la luce a Giugno 2019, con un episodio registrato con un microfono orribile, e chissà se mai
                    continuerà.</p>
                    <p><a href="./">Qui</a> puoi trovare una lista degli episodi pubblicati fino ad ora</p>
                </div>

                <div className="section">
                    <h1>About il Tizio che parla</h1>
                    <p><strong>L'Arrotino</strong> è <a href="//vikkio.me" target="_blank">Vincenzo Ciaccio</a></p>
                    <p>Un tizio logorroico nato nel 1988.</p>

                    <p>
                        Se avete voglia di contattarmi basta mandare un tweet <a href="https://twitter.com/vikkio88" target="_blank">@vikkio88</a>
                    </p>
                </div>
            </Page>
        </div>
    );
};