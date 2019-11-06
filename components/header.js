import Link from 'next/link';
import Icon from './Icon';
import { SPREAKER_LINK, YOUTUBE_LINK } from '../const';

const scootalite = () => {
    window.open("https://scootalite.surge.sh/podcasts/larrotino2019-06-04-0049-if5mc");
};
const spreaker = () => {
    window.open(SPREAKER_LINK);
};
const youtube = () => {
    window.open(YOUTUBE_LINK);
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
                        <Link href="/static/feed.xml"><Icon name="rss" link/></Link>
                    </li>
                </ul>
                <div className="cta-wrapper">
                    <button className="cta" onClick={youtube}><Icon name="youtube"/> Youtube</button>
                    <button className="cta" onClick={spreaker}><Icon name="spreaker"/> Spreaker</button>
                </div>
            </nav>
        </header>
    );
}