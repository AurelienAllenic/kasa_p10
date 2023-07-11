import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './nav.css';

const Nav = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <ul className='container-nav'>
          <li><img src={logo} alt="logo" className='logo'/></li>
          <div className='container-links'>
            <li>
              <Link to="/" className={`linkItem ${location.pathname === '/' ? 'active' : ''}`}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className={`linkItem ${location.pathname === '/about' ? 'active' : ''}`}>
                A propos
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
