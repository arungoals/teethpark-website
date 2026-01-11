const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "YOUR_API_KEY_HERE");

router.post('/', async (req, res) => {
    try {
        const { message, history } = req.body;

        // For this demo, if no API key is set, return a simulated response
        if (!process.env.GOOGLE_API_KEY) {
            console.log("No API Key found, using simulation");
            return res.json({
                response: "I'm the TeethPark AI. Since my brain key isn't configured yet, I can tell you that we are open Mon-Sat 4pm-9pm!"
            });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Construct the context
        const systemPrompt = `You are the AI Concierge for TeethPark Dental Clinic in Kovur, Chennai (South India). 
    Dr. C G Madhan (BDS, MDS) is the lead pediatric dentist. 
    Use a warm, respectful Indian English tone (using terms like "Namaste" or "Hello ji" occasionally if appropriate, but keeping it professional).
    We serve South Indian families with gentle care.
    Services: Pediatric Dentistry, Orthodontics, General Care.
    Hours: Mon-Sat 4:00 PM - 9:00 PM. Sunday: 10:00 AM - 10:00 PM (Please call before visiting on Sundays).
    Phone: +91 94868 46534. Email: madhancg@gmail.com.
    Pricing: Consultation starts at ₹100.
    Current Year: 2026.
    Answer the user's question concisely and helpfully.`;

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am ready to assist guests of TeethPark Dental Clinic." }],
                },
                // ... convert simplified history if needed
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.json({ response: text });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
