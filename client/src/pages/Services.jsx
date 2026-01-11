import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const services = [
        {
            title: "Pediatric Dentistry",
            description: "Specialized care for children including Pulpectomy (Root Canal for kids), Stainless Steel Crowns, and preventive fluoride treatments.",
            icon: "👼",
            link: "/services/pediatric"
        },
        {
            title: "Orthodontics",
            description: "Straighten your smile with Metal/Ceramic Braces and Invisible Aligners. Early intervention for growing children.",
            icon: "🦷",
            link: "/services/ortho"
        },
        {
            title: "General Care",
            description: "Routine checkups, Scaling, Fillings, and advanced treatments like Dental Implants and Laser Whitening for adults.",
            icon: "✨",
            link: "/services/general"
        },
        {
            title: "Preventive Care",
            description: "Pit & Fissure Sealants to prevent cavities, habit breaking appliances, and diet counseling for healthy teeth.",
            icon: "🛡️",
            link: "/services/preventive"
        }
    ];

    return (
        <div className="page-content">
            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1>Our Services</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Comprehensive dental care for the whole family, with a special focus on making children's visits fun and fearless.
                    </p>
                    <div style={{
                        display: 'inline-block',
                        background: 'var(--color-bg-warm)',
                        padding: '0.5rem 1.5rem',
                        borderRadius: 'var(--radius-full)',
                        marginTop: '1rem',
                        fontWeight: '600',
                        color: 'var(--color-primary)'
                    }}>
                        Consultation starts at ₹100
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
