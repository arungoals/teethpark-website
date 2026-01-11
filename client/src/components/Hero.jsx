import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import heroBg from '../assets/hero_background.png'; // Assuming generated image will be moved here

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    Welcome to <span className="highlight">TeethPark</span>
                </h1>
                <p className="hero-subtitle">
                    The Smile Sanctuary where gentle care meets a fun, eco-park adventure for your family.
                </p>
                <div className="hero-cta-group">
                    <Link to="/book" className="btn btn-primary btn-lg">
                        Schedule Your First Visit
                    </Link>
                    <Link to="/services" className="btn btn-accent">
                        Explore Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
