import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    TeethPark
                </Link>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/services" onClick={toggleMenu}>Services</Link>
                    <Link to="/about" onClick={toggleMenu}>About Dr. Madhan</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    <Link to="/book" className="btn btn-accent" onClick={toggleMenu}>Book Now</Link>
                </div>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
