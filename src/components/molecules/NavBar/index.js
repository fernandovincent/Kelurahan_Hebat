import React, { useState } from "react";
import "./index.css";

const Navbar = ({ pic }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        {/* Logo dan Text */}
        <a href="/" className="navbar-logo">
          <img src={pic} alt="Kelurahan Hebat" className="logo-img" />
        </a>
        <div className="text-judul">
          <h7 className="text-1">Kelurahan Kota Bitung</h7>
          <p className="text-2">Portal Resmi Kelurahan Kota Bitung</p>
        </div>

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* Content */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Informasi
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Kontak
            </a>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-links" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="-filse" onClick={closeMobileMenu}>
              Menu <i className="fas fa-caret-down"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/">
                Action
              </a>
              <a class="dropdown-item" href="/">
                Another action
              </a>
              <a class="dropdown-item" href="/">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-links" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="-filse" onClick={closeMobileMenu}>
              Informasi <i className="fas fa-caret-down"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/">
                Action
              </a>
              <a class="dropdown-item" href="/">
                Another action
              </a>
              <a class="dropdown-item" href="/">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-links" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="-filse" onClick={closeMobileMenu}>
              Tentang <i className="fas fa-caret-down"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/">
                Action
              </a>
              <a class="dropdown-item" href="/">
                Another action
              </a>
              <a class="dropdown-item" href="/">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
