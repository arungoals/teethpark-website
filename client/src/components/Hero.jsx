import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import heroBg from '../assets/hero_background.png'; // Assuming generated image will be moved here

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="badge">✨ Best Pediatric Care in Kovur</span>
                    <h1 className="hero-title">
                        Gentle Dental Care <br />
                        <span className="highlight">For Your Little Ones</span>
                    </h1>
                    <p className="hero-subtitle">
                        TeethPark combines world-class dental expertise with a fun, child-friendly atmosphere.
                        Dr. C G Madhan ensures a pain-free, happy smile for every child.
                    </p>
                    <div className="hero-actions">
                        <Link to="/book" className="btn btn-primary btn-lg shine-effect">
                            Book an Appointment
                        </Link>
                        <Link to="/services" className="btn btn-outline">
                            View Services
                        </Link>
                    </div>
                    <div className="trust-indicators">
                        <div className="trust-item">
                            <span className="stat">10+</span>
                            <span className="label">Years Exp</span>
                        </div>
                        <div className="divider-v"></div>
                        <div className="trust-item">
                            <span className="stat">5k+</span>
                            <span className="label">Happy Smiles</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    {/* Placeholder for a nice dental illustration or photo - using a div for now or existing img */}
                    <img src={heroBg} alt="Happy Kid at Dentist" className="hero-img" />
                    <div className="floating-card card-1">
                        <span>🦷 Root Canal Specialist</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
