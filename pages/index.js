import Head from 'next/head';
import Page from '../layouts';

import Podcast from '../components/podcast';
import podcasts from '../podcasts';

export default () => {
    return (
        <div>
            <Head>
                <title>L'Arrotino - Podcast - Puntate</title>
            </Head>
            <Page>
                <h1>Puntate</h1>
                {podcasts.map(p => (<Podcast key={p.id} {...p} />))}
            </Page>
        </div>
    );
};