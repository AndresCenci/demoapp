import logo from '../logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Título</h1>
            <nav className='header-nav'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
