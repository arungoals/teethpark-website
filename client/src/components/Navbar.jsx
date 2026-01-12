import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

import logo from '../assets/logo_new.jpg';

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

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Adjust for sticky header height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            {/* Top Bar */}
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
                    <a href="#" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
                        <img src={logo} alt="TeethPark Logo" className="logo-img" />
                    </a>

                    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
                        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Dr. Madhan</a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
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
