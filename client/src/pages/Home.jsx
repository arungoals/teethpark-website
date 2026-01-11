import Hero from '../components/Hero';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import beforeImg from '../assets/teeth_before.png';
import afterImg from '../assets/teeth_after.png';

const Home = () => {
    const services = [
        {
            title: "Pediatric Dentistry",
            desc: "Specialized care for infants, children, and adolescents. We make dental visits fun!",
            icon: "👶"
        },
        {
            title: "Orthodontics",
            desc: "Straighten teeth with metal braces, ceramic braces, or clear aligners.",
            icon: "🦷"
        },
        {
            title: "Root Canal Treatment",
            desc: "Advanced rotary endodontics for painless root canal treatments.",
            icon: "🔬"
        }
    ];

    return (
        <div className="page-content">
            <Hero />

            {/* Services Preview Section */}
            <section className="section-padding bg-warm">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>World-Class Services</h2>
                        <p>Comprehensive dental care delivered with a gentle touch.</p>
                    </div>
                    <div className="services-grid">
                        {services.map((s, index) => (
                            <ServiceCard key={index} {...s} />
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/services" className="btn btn-outline">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Before/After Section */}
            <section className="section-padding">
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
            <section className="section-padding bg-soft">
                <TestimonialSlider />
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2>Ready for a Healthy Smile?</h2>
                    <p>Book your appointment today and experience the difference.</p>
                    <Link to="/book" className="btn btn-primary btn-lg shine-effect">
                        Book Appointment Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

// Simple inline Service Card wrapper to match the loop, or import it if preferred
import ServiceCardComponent from '../components/ServiceCard';
const ServiceCard = ({ title, desc, icon }) => (
    <ServiceCardComponent title={title} description={desc} icon={icon} link="/services" />
);

export default Home;
