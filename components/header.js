import Link from 'next/link';

const play = () => {
    window.open("https://scootalite.surge.sh/podcasts/larrotino2019-06-04-0049-if5mc");
};

export default () => {
    return (
        <header className="page-header">
            <nav>
                <Link href="/"><h2 className="logo">L'Arrotino<img src="/static/img/icons/horn.svg" /></h2></Link>
                <ul>
                    <li>
                        <Link href="/">Puntate</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/static/feed.xml">RSS</Link>
                    </li>
                </ul>
                <button className="cta" onClick={play}>Ascolta</button>
            </nav>
        </header>
    );
}