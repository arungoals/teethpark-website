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

    if (!isAuthenticated) {
        return (
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Dr. Madhan's Dashboard</h2>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Login</button>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>Demo: admin / smile2026</p>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <h3>TeethPark Admin</h3>
                <button className={activeTab === 'appointments' ? 'active' : ''} onClick={() => setActiveTab('appointments')}> appointments</button>
                <button className={activeTab === 'services' ? 'active' : ''} onClick={() => setActiveTab('services')}>Services (CMS)</button>
                <button onClick={() => setIsAuthenticated(false)}>Logout</button>
            </div>
            <div className="admin-content">
                {activeTab === 'appointments' && (
                    <div className="appointments-view">
                        <h2>Appointment Requests</h2>
                        <div className="appointments-list">
                            {appointments.map(app => (
                                <div key={app.id} className="appointment-card">
                                    <div className="app-header">
                                        <h4>{app.child} (Parent: {app.parent})</h4>
                                        <span className={`status-badge ${app.status}`}>{app.status}</span>
                                    </div>
                                    <p><strong>Date:</strong> {app.date} at {app.time}</p>
                                    <p><strong>Reason:</strong> {app.reason}</p>
                                    <div className="app-actions">
                                        {app.status === 'pending' && (
                                            <button onClick={() => handleStatusChange(app.id, 'confirmed')} className="btn btn-sm btn-success">Confirm</button>
                                        )}
                                        <button className="btn btn-sm">Reschedule</button>
                                        <button className="btn btn-sm btn-danger">Cancel</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'services' && (
                    <div className="services-view">
                        <h2>Manage Services</h2>
                        <p>CMS functionality to update service cards and pricing.</p>
                        {/* CMS Placeholder */}
                        <div className="cms-placeholder">
                            Current Consultation Fee: <input type="number" defaultValue="100" />
                            <button className="btn btn-sm btn-primary">Update</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
