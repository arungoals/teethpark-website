const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../../data/settings.json');

// Helper to read data
const readData = () => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            // Initialize if missing
            const initialData = { consultationFee: 100, testimonials: [] };
            fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
            return initialData;
        }
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading settings.json:", err);
        return { consultationFee: 100, testimonials: [] };
    }
};

// Helper to write data
const writeData = (data) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error("Error writing settings.json:", err);
        return false;
    }
};

// GET settings
router.get('/', (req, res) => {
    const data = readData();
    res.json(data);
});

// POST to update consultation fee
router.post('/fee', (req, res) => {
    const { fee } = req.body;
    if (!fee) return res.status(400).json({ error: 'Fee is required' });

    const data = readData();
    data.consultationFee = parseInt(fee);

    if (writeData(data)) {
        res.json({ success: true, message: 'Fee updated', fee: data.consultationFee });
    } else {
        res.status(500).json({ error: 'Failed to save settings' });
    }
});

// POST to add testimonial
router.post('/testimonial', (req, res) => {
    const { name, role, text } = req.body;
    if (!name || !text) return res.status(400).json({ error: 'Name and Text are required' });

    const data = readData();
    const newTestimonial = {
        id: Date.now(),
        name,
        role: role || 'Patient',
        text,
        date: new Date().toISOString()
    };

    data.testimonials.push(newTestimonial);

    if (writeData(data)) {
        res.json({ success: true, message: 'Testimonial added', testimonial: newTestimonial });
    } else {
        res.status(500).json({ error: 'Failed to save settings' });
    }
});

module.exports = router;
