import Hero from '../components/Hero';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import beforeImg from '../assets/teeth_before.png';
import afterImg from '../assets/teeth_after.png';

const Home = () => {
    return (
        <div className="page-content">
            <Hero />
            <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Smile Transformations</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--color-text-light)' }}>
                    See the difference gentle, expert care can make for your child's smile.
                </p>
                <BeforeAfterSlider
                    beforeImage={beforeImg}
                    afterImage={afterImg}
                    altBefore="Child's smile before treatment"
                    altAfter="Child's smile after treatment"
                />
            </div>

            <TestimonialSlider />
        </div>
    );
};

export default Home;
