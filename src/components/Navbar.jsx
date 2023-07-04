import { NavLink } from "react-router-dom";
import './navbar.css'
import logo from '../img/logo.svg';

const Navbar = () => {
    function navFunc() {
        document.querySelector('html').classList.toggle('open');
    }
    
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.header');
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
        if (scrollTop > 0) {
          navbar.classList.add('show-bg');
        } else {
          navbar.classList.remove('show-bg');
        }
      });

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="site">
                        <ul>
                            <li>
                                <NavLink to="index.html"><img src={logo} alt="logo" /></NavLink>
                            </li>
                        </ul>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><NavLink to="index.html">DESCRIPTION</NavLink></li>
                            <li><NavLink to="index.html">FEATURES</NavLink></li>
                            <li><NavLink to="index.html" >SCREENS</NavLink></li>
                            <li className="menu-container">
                                <div className="menu-item">
                                    <NavLink className="link">EXTRA<span></span></NavLink>

                                    <div className="links-container">
                                        <NavLink className="link-item">ARTICLE DETAILS</NavLink>
                                        <NavLink className="link-item">TERMS CONDITIONS</NavLink>
                                        <NavLink className="link-item">PRIVACY POLICY</NavLink>
                                    </div>
                                </div>
                            </li>
                            <li><NavLink className="btn" href="download.html" download>DOWNLOAD</NavLink></li>
                        </ul>
                    </nav>
                    <button type="button" className="nav-button" onClick="navFunc()">
                        <span className="sr-only">MENU</span>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar;