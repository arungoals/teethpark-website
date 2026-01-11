import { useState, useEffect } from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('appointments');

    const [appointments, setAppointments] = useState([
        { id: 1, parent: "Rajesh Kumar", child: "Rahul", date: "2026-01-15", time: "16:30", reason: "checkup", status: "pending" },
        { id: 2, parent: "Priya Sundar", child: "Ananya", date: "2026-01-16", time: "17:00", reason: "pain", status: "confirmed" },
    ]);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulation
        if (username === 'admin' && password === 'smile2026') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid credentials');
        }
    };

    const handleStatusChange = (id, newStatus) => {
        setAppointments(appointments.map(app =>
            app.id === id ? { ...app, status: newStatus } : app
        ));
    };

    const [consultationFee, setConsultationFee] = useState(100);
    const [testimonialText, setTestimonialText] = useState('');

    // Fetch initial settings
    useEffect(() => {
        if (isAuthenticated) {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002';
            fetch(`${API_URL}/api/settings`)
                .then(res => res.json())
                .then(data => {
                    if (data.consultationFee) setConsultationFee(data.consultationFee);
                })
                .catch(err => console.error("Failed to load settings:", err));
        }
    }, [isAuthenticated]);

    const handleFeeUpdate = async () => {
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002';
            const res = await fetch(`${API_URL}/api/settings/fee`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fee: consultationFee })
            });
            const data = await res.json();
            if (data.success) {
                alert(`Consultation Fee updated to ₹${data.fee}`);
            } else {
                alert('Failed to update fee');
            }
        } catch (err) {
            console.error(err);
            alert('Error updating fee');
        }
    };

    const handleAddTestimonial = async () => {
        // Todo: Implement API for testimonials
        alert('Testimonials API coming soon!');
        setTestimonialText('');
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        // localStorage.removeItem('token'); // In a real app
    };

    if (!isAuthenticated) {
        return (
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Admin Portal</h2>
                    <p className="mb-4 text-muted">Please login to manage the clinic</p>
                    <div className="form-group text-left">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group text-left">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full shadow-md">Secure Login</button>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>Demo: admin / smile2026</p>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <aside className="admin-sidebar">
                <h3>TeethPark <br /><span style={{ fontSize: '0.8rem', opacity: 0.7, fontWeight: 400 }}>Admin Panel</span></h3>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <button
                        className={activeTab === 'appointments' ? 'active' : ''}
                        onClick={() => setActiveTab('appointments')}
                    >
                        📅 Appointments
                    </button>
                    <button
                        className={activeTab === 'services' ? 'active' : ''}
                        onClick={() => setActiveTab('services')}
                    >
                        ⚙️ Services & Fees
                    </button>
                    <button
                        className={activeTab === 'testimonials' ? 'active' : ''}
                        onClick={() => setActiveTab('testimonials')}
                    >
                        💬 Testimonials
                    </button>
                </nav>
                <button onClick={handleLogout} className="logout-btn">
                    ⚠️ Logout
                </button>
            </aside>

            <main className="admin-content">
                {activeTab === 'appointments' && (
                    <div className="appointments-view fade-in">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2>Appointment Requests</h2>
                            <button className="btn btn-sm btn-outline">🔄 Refresh</button>
                        </div>

                        <div className="appointments-list">
                            {appointments.map(app => (
                                <div key={app.id} className="appointment-card">
                                    <div className="app-header">
                                        <h4>{app.child} <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 400 }}>(Parent: {app.parent})</span></h4>
                                        <span className={`status-badge ${app.status}`}>{app.status}</span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.95rem', color: '#334155' }}>
                                        <p><strong>📅 Date:</strong> {app.date} at {app.time}</p>
                                        <p><strong>📝 Reason:</strong> {app.reason}</p>
                                    </div>
                                    <div className="app-actions">
                                        {app.status === 'pending' && (
                                            <button onClick={() => handleStatusChange(app.id, 'confirmed')} className="btn btn-sm btn-success">✅ Confirm</button>
                                        )}
                                        <button className="btn btn-sm btn-outline">📅 Reschedule</button>
                                        <button className="btn btn-sm btn-danger">❌ Cancel</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'services' && (
                    <div className="services-view fade-in">
                        <h2>Services & Pricing</h2>
                        <div className="cms-card">
                            <h3>Consultation Fee Management</h3>
                            <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>Update the base consultation fee shown on the chatbot.</p>
                            <div className="form-group">
                                <label>Current Fee (₹)</label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <input
                                        type="number"
                                        value={consultationFee}
                                        onChange={(e) => setConsultationFee(e.target.value)}
                                        style={{ maxWidth: '200px' }}
                                    />
                                    <button className="btn btn-primary" onClick={handleFeeUpdate}>Update Fee</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'testimonials' && (
                    <div className="services-view fade-in">
                        <h2>Testimonials</h2>
                        <div className="cms-card">
                            <h3>Add New Patient Review</h3>
                            <div className="form-group">
                                <label>Patient Review</label>
                                <textarea
                                    rows="4"
                                    placeholder="Enter the review text here..."
                                    value={testimonialText}
                                    onChange={(e) => setTestimonialText(e.target.value)}
                                ></textarea>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button className="btn btn-primary" onClick={handleAddTestimonial}>
                                    ➕ Add Review
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
