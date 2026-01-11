const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "YOUR_API_KEY_HERE");

router.post('/', async (req, res) => {
    try {
        const { message, history } = req.body;

        // Check for API Key
        if (!process.env.GOOGLE_API_KEY) {
            console.warn("WARNING: GOOGLE_API_KEY is missing in server environment.");
            return res.json({
                response: "Namaste! I am the TeethPark AI assistant. My brain connection is currently offline (API Key missing). However, I can tell you that we are open Mon-Sat 4pm-9pm. How else can I help?"
            });
        }

        // Reverting to the most stable model for the fresh project
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const systemPrompt = `You are the AI Concierge for TeethPark Dental Clinic in Kovur, Chennai.
        Dr. Madhan (Pediatric Dentist). Mon-Sat 4-9pm, Sun 10am-1pm.
        Fee: ₹100. Phone: +91 94868 46534.
        Be warm and concise.`;

        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: systemPrompt }] },
                { role: "model", parts: [{ text: "Understood. I'm ready to help." }] },
                ...(history || [])
            ]
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.json({ response: text });

    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({
            error: 'Server Error',
            details: error.message
        });
    }
});

module.exports = router;
