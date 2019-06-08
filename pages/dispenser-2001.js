import Head from 'next/head';
import Page from '../layouts';

import PodcastPage from '../components/podcastPage';
import podcasts from '../podcasts';

const podcast = podcasts[0];

export default () => {
    return (
        <div>
            <Head>
                <title>L'Arrotino - Podcast - {podcast.title}</title>
            </Head>
            <Page>
                <PodcastPage {...podcast}/>
            </Page>
        </div>
    );
};