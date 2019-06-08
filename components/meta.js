import Head from 'next/head';
export default () => (
    <div>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description"
                content="Trasmissione sporadica di intrattenimento e somministrazione di stimoli creativi, notizie di tech, videogiochi, film, musica e libri." />
            <meta name="keywords" content="notizie,tech,videogiochi,film,musica,libri" />
            <meta name="author" content="Vincenzo Ciaccio" />
            <link rel="alternate" type="application/rss+xml" title="RSS Feed for L'Arrotino Podcast" href="/static/feed.xml" />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
            <meta name="msapplication-TileColor" content="#f2f2f2" />
            <meta name="theme-color" content="#f2f2f2" />

            <meta property="og:title" content="L'Arrotino - Podcast" />
            <meta property="og:description" content="Trasmissione sporadica di intrattenimento e somministrazione di stimoli creativi" />
            <meta property="og:image" content="https://larrotino.surge.sh/static/logo.png" />
            <meta property="og:url" content="https://larrotino.surge.sh" />
            <meta name="twitter:title" content="L'Arrotino" />
            <meta name="twitter:description" content="Trasmissione sporadica di intrattenimento e somministrazione di stimoli creativi" />
            <meta name="twitter:image" content=" https://larrotino.surge.sh/static/logo.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@vikkio88" />

            <link href="/static/styles.css" rel="stylesheet" />
        </Head>
    </div>
)