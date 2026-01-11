import { useState } from 'react';
import '../styles/TestimonialSlider.css';

const TestimonialSlider = () => {
    const testimonials = [
        {
            id: 1,
            name: "Lakshmi Narayanan",
            role: "Parent",
            text: "Dr. Madhan is wonderful with kids! My son Rahul used to be scared of dentists, but now he actually looks forward to his visits here. The 'Eco-Park' theme is so relaxing."
        },
        {
            id: 2,
            name: "Karthik Raja",
            role: "Patient",
            text: "I got my root canal done here. Absolutely pain-free and very professional. The clinic is very clean and follows all hygiene protocols. Highly recommended!"
        },
        {
            id: 3,
            name: "Anitha Suresh",
            role: "Parent",
            text: "Best pediatric dentist in Kovur. They explained the entire procedure patiently. My daughter loves the play area and the friendly staff."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonial-slider">
            <h2 className="section-title">Happy Smiles</h2>
            <div className="slider-content">
                <button className="nav-btn prev" onClick={prevSlide}>&#10094;</button>
                <div className="testimonial-card">
                    <p className="quote">"{testimonials[currentIndex].text}"</p>
                    <div className="author">
                        <h4>{testimonials[currentIndex].name}</h4>
                        <span>{testimonials[currentIndex].role}</span>
                    </div>
                </div>
                <button className="nav-btn next" onClick={nextSlide}>&#10095;</button>
            </div>
            <div className="dots">
                {testimonials.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
