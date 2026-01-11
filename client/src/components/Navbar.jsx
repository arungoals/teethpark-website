import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect properly
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            {/* Top Bar - Very common in Medical sites */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <span>📞 +91 94868 46534</span>
                        <span className="divider">|</span>
                        <span>✉️ madhancg@gmail.com</span>
                    </div>
                    <div className="hours-info">
                        🕒 Mon-Sat: 4pm - 9pm
                    </div>
                </div>
            </div>

            <nav className="navbar">
                <div className="container navbar-container">
                    <Link to="/" className="navbar-logo">
                        <span className="logo-text">Teeth<span className="highlight">Park</span></span>
                        {/* <img src={logo} alt="TeethPark" className="logo-img" /> */}
                    </Link>

                    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/services" onClick={toggleMenu}>Services</Link>
                        <Link to="/about" onClick={toggleMenu}>Dr. Madhan</Link>
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                        <Link to="/book" className="btn btn-accent nav-btn" onClick={toggleMenu}>Book Appointment</Link>
                    </div>

                    <div className="navbar-toggle" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
