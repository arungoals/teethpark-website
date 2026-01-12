import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-section brand-section">
                    <h3>Teeth<span className="highlight">Park</span></h3>
                    <p>Your family's smile sanctuary. Gentle, pain-free dentistry in a lush, park-like environment.</p>
                </div>

                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">Dr. Madhan</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Visit Us</h4>
                    <address>
                        No. 7/1127, 1st Floor, Kundrathur Main Road<br />
                        Kovur, Chennai - 600128<br />
                        (Opposite Kanaga Hospital)
                    </address>
                </div>

                <div className="footer-section">
                    <h4>Contact & Hours</h4>
                    <p className="contact-item">📞 <a href="tel:+919486846534">+91 94868 46534</a></p>
                    <p className="contact-item">✉️ <a href="mailto:madhancg@gmail.com">madhancg@gmail.com</a></p>
                    <div className="hours-box">
                        <p>Mon-Sat: 4pm - 9pm</p>
                        <p>Sun: 10am - 1pm (Appt Only)</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} TeethPark Dental Clinic. All Rights Reserved.</p>
                    <div className="footer-meta-links">
                        <Link to="/admin" className="admin-link">Staff Login</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
