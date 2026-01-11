import Timeline from '../components/Timeline';
import profileImg from '../assets/dr_madhan.jpg';

const About = () => {
    const educationEvents = [
        {
            year: "2013",
            title: "Clinic Established",
            description: "Founded TeethPark Dental Clinic with a vision for pain-free pediatric care."
        },
        {
            year: "2008",
            title: "MDS - Pedodontics",
            description: "Specialized in Pediatric & Preventive Dentistry at Ragas Dental College."
        },
        {
            year: "2005",
            title: "BDS",
            description: "Graduated from Oxford Dental College, starting the journey in dental excellence."
        }
    ];

    return (
        <div className="page-content">
            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ marginBottom: '2rem' }}>Meet Dr. C G Madhan</h1>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}>
                        <img
                            src={profileImg}
                            alt="Dr. C G Madhan"
                            style={{
                                width: '250px',
                                height: '250px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '4px solid var(--color-white)',
                                boxShadow: 'var(--shadow-md)'
                            }}
                        />
                        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
                            <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                                BDS, MDS - Pedodontics
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                With over 14 years of experience, Dr. Madhan is dedicated to providing gentle, anxiety-free dental care for children.
                                His approach focuses on building trust with young patients and ensuring their first dental experiences are positive and fun.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Clinical Journey</h2>
                <Timeline events={educationEvents} />
            </div>
        </div>
    );
};

export default About;
