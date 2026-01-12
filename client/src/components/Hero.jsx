import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import heroImg from '../assets/hero_park_family.png';

const Hero = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            <div
                className="hero-parallax-bg"
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            >
                <img src={heroImg} alt="Happy Indian Family in Park" />
            </div>
            <div className="hero-overlay"></div>

            <div className="container hero-container">
                <div className="hero-content" style={{ transform: `translateY(${offsetY * -0.1}px)` }}>
                    <span className="badge">🌱 Welcome to the Smile Park</span>
                    <h1 className="hero-title">
                        Gentle Dental Care <br />
                        <span className="highlight">For Your Whole Family</span>
                    </h1>
                    <p className="hero-subtitle">
                        Experience world-class dentistry in a calming, park-themed environment.
                        Dr. C G Madhan transforms dental visits into a joyful journey.
                    </p>
                    <div className="hero-actions">
                        <Link to="/book" className="btn btn-primary btn-lg shine-effect">
                            Book Free Appointment
                        </Link>
                        <a href="#services" className="btn btn-outline-white">
                            Explore Services
                        </a>
                    </div>
                    <div className="trust-indicators">
                        <div className="trust-item">
                            <span className="stat">14+</span>
                            <span className="label">Years Exp</span>
                        </div>
                        <div className="divider-v"></div>
                        <div className="trust-item">
                            <span className="stat">10k+</span>
                            <span className="label">Happy Smiles</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
