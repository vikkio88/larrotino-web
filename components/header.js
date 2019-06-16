import Link from 'next/link';
import { SPREAKER_LINK } from '../const';

const scootalite = () => {
    window.open("https://scootalite.surge.sh/podcasts/larrotino2019-06-04-0049-if5mc");
};
const spreaker = () => {
    window.open(SPREAKER_LINK);
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
                <button className="cta" onClick={spreaker}>Spreaker</button>
            </nav>
        </header>
    );
}