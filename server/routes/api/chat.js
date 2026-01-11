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

        // Use pinned version for stability
        let model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-001" });

        // Enhanced System Prompt with Indian context
        const systemPrompt = `You are the AI Concierge for TeethPark Dental Clinic, located in Kovur, Chennai. 
    Your name is "TeethPark Assistant".
    
    About the Clinic:
    - Lead Doc: Dr. C G Madhan (BDS, MDS), a specialist in Pediatric Dentistry.
    - Vibe: Warm, family-friendly, combining US-standard hygiene with Indian hospitality.
    - Location: Kovur, Chennai, Tamil Nadu.
    
    Services:
    - Pediatric Dentistry (Kids specialist)
    - Orthodontics (Braces/Aligners)
    - Root Canal Treatment
    - Cosmetic Dentistry
    - General Checkups
    
    Practical Info:
    - Hours: Mon-Sat: 4:00 PM - 9:00 PM. Sunday: 10:00 AM - 1:00 PM (Appt only).
    - Phone: +91 94868 46534.
    - Email: madhancg@gmail.com.
    - Consultation Fee: Starts at ₹100.
    
    Tone Guidelines:
    - Speak with "Indian English" warmth. use phrases like "Hello ji", "Don't worry", "We will take good care".
    - Be respectful and professional but approachable.
    - If asked about medical advice, give general info but ALWAYS recommend visiting the doctor for a checkup.
    - Current Year: 2026.
    
    Task: Answer the user's question concisely (< 3 sentences usually) and encourage them to visit.`;

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "Namaste! I understand. I am ready to serve the patients of TeethPark Dental Clinic with care and respect." }],
                },
            ],
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
