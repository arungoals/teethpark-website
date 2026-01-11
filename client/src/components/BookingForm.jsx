import { useState } from 'react';
import '../styles/BookingForm.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        phone: '',
        email: '',
        date: '',
        reason: 'checkup'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Appointment Request Sent! (Simulation)');
        // Integrate backend API for Google Calendar here
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>New Patient Intake & Booking</h2>

            <div className="form-group">
                <label htmlFor="parentName">Parent/Guardian Name</label>
                <input type="text" id="parentName" name="parentName" required value={formData.parentName} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="childName">Child's Name</label>
                <input type="text" id="childName" name="childName" required value={formData.childName} onChange={handleChange} />
            </div>

            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email (Optional)</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
            </div>

            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="reason">Reason for Visit</label>
                    <select id="reason" name="reason" value={formData.reason} onChange={handleChange}>
                        <option value="checkup">General Checkup</option>
                        <option value="pain">Tooth Pain</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="ortho">Braces/Aligners</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-full">Request Appointment</button>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-light)', textAlign: 'center' }}>
                We will confirm your slot via WhatsApp/Call shortly.
            </p>
        </form>
    );
};

export default BookingForm;
