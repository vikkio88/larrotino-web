import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer.js';

export default ({ children }) => (
    <div>
        <Meta />
        <div className="wrapper">
            <Header />
            <main className="page-main">
                {children}
            </main>
            <Footer />
        </div>
    </div>
)