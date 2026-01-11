import { useState, useRef } from 'react';
import '../styles/BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImage, afterImage, altBefore = "Before", altAfter = "After" }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };

    return (
        <div className="before-after-container" ref={containerRef}>
            <div className="ba-image-wrapper">
                <img src={beforeImage} alt={altBefore} className="ba-image ba-before" />
                <div
                    className="ba-image ba-after"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img src={afterImage} alt={altAfter} />
                </div>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="ba-slider"
                aria-label="Slider to compare before and after images"
            />
            <div
                className="ba-slider-line"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="ba-slider-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
