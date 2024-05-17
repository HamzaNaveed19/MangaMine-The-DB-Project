import React, { useState } from "react";
import "../style/navBar.css";
import logoImage from "../img/toplogo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { email } = params;
  const [manga, setManga] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="menuSections">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/scripts/trending">TRENDING</Link>
          </li>
          <li>
            <Link to={`/scripts/favorite`}>
              FAVOURITE
            </Link>
          </li>
          <li>
            <Link to={`/scripts/userWishlist/${encodeURIComponent(email)}`}>
              WISHLIST
            </Link>
          </li>
        </ul>
      </div>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          id="mangaTitle"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {/* Link component for search */}
        <Link
          to={`/scripts/SearchCards/${encodeURIComponent(searchTerm)}`}
          className="search-button"
        >
          Search
        </Link>
      </form>
      <div className="menu-items">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line1 ${isOpen ? "toggle" : ""}`}></div>
          <div className={`line2 ${isOpen ? "toggle" : ""}`}></div>
          <div className={`line3 ${isOpen ? "toggle" : ""}`}></div>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {isLoggedIn ? (
            <li className="greeting">Hi, {email}</li>
          ) : (
            <>
              <li>
                <Link to="/scripts/Login">
                  <button className="login-button">Login</button>
                </Link>
              </li>
              <li>
                <Link to="/scripts/signup">
                  <button className="join-button">Join</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
