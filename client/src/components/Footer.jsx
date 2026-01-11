import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-section">
                    <h3>TeethPark</h3>
                    <p>Gentle, pain-free pediatric dentistry for your family.</p>
                    <div className="social-links">
                        {/* Icons would go here */}
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Visit Us</h4>
                    <address>
                        No. 7/1127, 1st Floor<br />
                        Kundrathur Main Road<br />
                        Kovur, Chennai<br />
                        (Opp. Kanaga Hospital)
                    </address>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="map-link">
                        Get Directions
                    </a>
                </div>

                <div className="footer-section">
                    <h4>Hours</h4>
                    <p>Mon - Sat: 4:00 PM - 9:00 PM</p>
                    <p>Sun: 10:00 AM - 10:00 PM</p>
                    <p style={{ fontSize: '0.8rem' }}>(Call before visit)</p>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>
                        <a href="tel:+919486846534">+91 94868 46534</a>
                    </p>
                    <p>
                        <a href="mailto:madhancg@gmail.com">madhancg@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} TeethPark Dental Clinic. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
