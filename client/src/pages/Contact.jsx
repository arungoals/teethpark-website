const Contact = () => {
    return (
        <div className="page-content">
            <div className="container" style={{ padding: '4rem 1rem' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Get in Touch</h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    <div className="contact-info">
                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Visit Us</h2>
                        <address style={{ listStyle: 'none', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            <strong>TeethPark Dental Clinic</strong><br />
                            No. 7/1127, 1st Floor<br />
                            Kundrathur Main Road<br />
                            Kovur, Chennai<br />
                            (Opp. Kanaga Hospital)
                        </address>

                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Hours</h3>
                        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                            <li><strong>Mon - Sat:</strong> 4:00 PM – 9:00 PM</li>
                            <li><strong>Sunday:</strong> 10:00 AM – 10:00 PM</li>
                            <li style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginTop: '0.5rem' }}>(Please call before visiting on Sundays)</li>
                        </ul>

                        <div style={{ marginTop: '2rem' }}>
                            <a href="tel:+919486846534" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                                Call Now
                            </a>
                            <a href="mailto:madhancg@gmail.com" className="btn btn-accent">
                                Send Email
                            </a>
                        </div>
                    </div>

                    <div className="map-container" style={{ minHeight: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.697495893155!2d80.1415233153664!3d13.003189990835163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52605f12345678%3A0x123456789abcdef!2sKovur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
