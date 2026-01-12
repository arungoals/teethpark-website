import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import ServiceCard from '../components/ServiceCard';
import Timeline from '../components/Timeline';
import beforeImg from '../assets/teeth_before.png';
import afterImg from '../assets/teeth_after.png';
import profileImg from '../assets/dr_madhan.jpg';
import '../styles/Home.css';

const Home = () => {
    const [fee, setFee] = useState(100);

    useEffect(() => {
        const fetchFee = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002';
                const res = await fetch(`${API_URL}/api/settings`);
                const data = await res.json();
                if (data.consultationFee) setFee(data.consultationFee);
            } catch (err) {
                console.error("Failed to load fee", err);
            }
        };
        fetchFee();

        // Reveal animations on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const services = [
        { title: "Pediatric Dentistry", description: "Specialized care for children including Pulpectomy and painless procedures.", icon: "👼" },
        { title: "Orthodontics", description: "Metal/Ceramic Braces and Invisible Aligners for all ages.", icon: "🦷" },
        { title: "General Care", description: "Routine checkups, Scaling, and advanced Implants for adults.", icon: "✨" },
        { title: "Preventive Care", description: "Habit breaking appliances and diet counseling for healthy growth.", icon: "🛡️" }
    ];

    const educationEvents = [
        { year: "2013", title: "Clinic Established", description: "Founded TeethPark Dental Clinic with a vision for pain-free pediatric care." },
        { year: "2008", title: "MDS - Pedodontics", description: "Specialized in Pediatric & Preventive Dentistry at Ragas Dental College." },
        { year: "2005", title: "BDS", description: "Graduated from Oxford Dental College, starting the journey in dental excellence." }
    ];

    return (
        <div className="one-page-container">
            <section id="home">
                <Hero />
            </section>

            {/* Services Section */}
            <section id="services" className="section-padding bg-accent">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="badge">Treatment Options</span>
                        <h2>World-Class Services</h2>
                        <p>Comprehensive dental care delivered with a gentle touch.</p>
                        <div className="fee-badge">Consultation Starts at ₹{fee}</div>
                    </div>
                    <div className="services-grid">
                        {services.map((s, index) => (
                            <ServiceCard key={index} {...s} link="/book" />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section-padding">
                <div className="container">
                    <div className="about-flex">
                        <div className="about-image">
                            <img src={profileImg} alt="Dr. C G Madhan" className="doctor-profile" />
                            <div className="exp-badge">14+ Years Experience</div>
                        </div>
                        <div className="about-text">
                            <span className="badge">Your Dentist</span>
                            <h2>Meet Dr. C G Madhan</h2>
                            <p className="specialization">BDS, MDS - Pedodontics</p>
                            <p>
                                With over 14 years of experience, Dr. Madhan is dedicated to providing gentle, anxiety-free dental care for children.
                                His approach focuses on building trust with young patients and ensuring their first dental experiences are positive and fun.
                            </p>
                            <Timeline events={educationEvents} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Before/After Section */}
            <section className="section-padding bg-soft">
                <div className="container text-center">
                    <div className="section-header">
                        <h2>Smile Transformations</h2>
                        <p>Real results from our happy little patients.</p>
                    </div>
                    <BeforeAfterSlider
                        beforeImage={beforeImg}
                        afterImage={afterImg}
                        altBefore="Child's smile before treatment"
                        altAfter="Child's smile after treatment"
                    />
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding">
                <TestimonialSlider />
            </section>

            {/* Contact & Map Section */}
            <section id="contact" className="section-padding bg-accent">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="badge">Visit Us</span>
                        <h2>Get in Touch</h2>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-details">
                            <h3>TeethPark Dental Clinic</h3>
                            <p>No. 7/1127, 1st Floor, Kundrathur Main Road, Kovur, Chennai (Opp. Kanaga Hospital)</p>

                            <h4>Hours</h4>
                            <p><strong>Mon - Sat:</strong> 4:00 PM – 9:00 PM</p>
                            <p><strong>Sunday:</strong> 10:00 AM – 1:00 PM <small>(Call first)</small></p>

                            <div className="cta-buttons mt-2">
                                <a href="tel:+919486846534" className="btn btn-primary">Call Now</a>
                                <Link to="/book" className="btn btn-outline ml-1">Book Online</Link>
                            </div>
                        </div>
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.697495893155!2d80.1415233153664!3d13.003189990835163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52605f12345678%3A0x123456789abcdef!2sKovur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
