import React, { useState } from 'react';
import '../style/navBar.css'
import logoImage from '../img/bitcoin.gif';  // Make sure the path is correct
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming the user is logged in for demo
    const [userName, setUserName] = useState('Hamza_97');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
        <nav>
            <div className="logo">
                <img src={logoImage} alt="Logo" />
            </div>
            <div className="menuSections">
                <ul>
                    <Link to="/scripts/adminAddManga"><li>Add Magna</li></Link>
                    <Link to="/scripts/adminNews"><li>Add News</li></Link>
                    <Link to="/scripts/adminWishlist"><li>View Wishlist</li></Link>
                    <Link to="/scripts/adminDelete"><li>Delete Manga</li></Link>
                </ul>
            </div>

            {/* <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form> */}
            {/* <div className="menu-items">
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`line1 ${isOpen ? "toggle" : ""}`}></div>
                    <div className={`line2 ${isOpen ? "toggle" : ""}`}></div>
                    <div className={`line3 ${isOpen ? "toggle" : ""}`}></div>
                </div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    {isLoggedIn ? (
                        <li className="greeting">Hi, {userName}</li>
                    ) : (
                        <>
                            <li><button className="login-button">Login</button></li>
                            <li><button className="join-button">Join</button></li>
                        </>
                    )}
                </ul>
            </div> */}
        </nav>
    );
}

export default Navbar;