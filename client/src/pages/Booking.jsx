import BookingForm from '../components/BookingForm';

const Booking = () => {
    return (
        <div className="page-content">
            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1>Book Your Visit</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Schedule a convenient time for your family. We'll confirm your appointment shortly.
                    </p>
                </div>
                <BookingForm />
            </div>
        </div>
    );
};

export default Booking;
