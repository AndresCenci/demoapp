import logo from '../logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Título</h1>
            <nav className='header-nav'>
                <ul>
                    <li><a href="http://">Home</a></li>
                    <li><a href="http://">Contact</a></li>
                    <li><a href="http://">Products</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
