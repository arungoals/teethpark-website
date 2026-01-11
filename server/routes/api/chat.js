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

        // Use the standard Flash model
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: {
                role: "system",
                parts: [{
                    text: `You are the AI Concierge for TeethPark Dental Clinic...
    (Context: Dr. C G Madhan, Pediatric, Kovur, Chennai. 
     Services: Kids, Ortho, RCT. 
     Hours: Mon-Sat 4-9pm, Sun 10am-1pm. 
     Phone: +91 94868 46534. Fee: ₹100.)
    Be warm, professional, use Indian English. 
    Answer concisely.` }]
            }
        });

        const chat = model.startChat({
            history: history || [], // Use actual history from frontend if available
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
