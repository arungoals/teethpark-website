const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002; // Use 5002 to avoid conflict with default Vite or other apps

// Middleware
app.use(cors({ origin: '*' })); // Allow all origins for mobile/testing
app.use(express.json());

// Routes
app.use('/api/chat', require('./routes/api/chat'));
app.use('/api/settings', require('./routes/api/settings')); // New CMS Route
// app.use('/api/booking', require('./routes/api/booking')); // Todo

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get(/(.*)/, (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
