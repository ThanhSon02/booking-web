import Header from '../Header/Header';
import '../../style/style.scss';
import Nav from '../Nav/Nav';

/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <div className="container">
            <Header />
            <Nav />
            <div className="content">{children}</div>
        </div>
    );
}

export default Layout;
