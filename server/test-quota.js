const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function checkQuota() {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const models = ["gemini-1.5-flash", "gemini-2.0-flash", "gemini-2.0-flash-exp", "gemini-1.5-pro"];

    console.log("Checking quota for models...");
    for (const m of models) {
        try {
            const model = genAI.getGenerativeModel({ model: m });
            const result = await model.generateContent("hi");
            console.log(`✅ ${m}: SUCCESS`);
        } catch (err) {
            if (err.message.includes("429")) {
                console.log(`❌ ${m}: 429 QUOTA EXCEEDED (Limit 0?)`);
            } else if (err.message.includes("404")) {
                console.log(`❌ ${m}: 404 NOT AUTHORIZED`);
            } else {
                console.log(`❓ ${m}: ${err.message}`);
            }
        }
    }
}

checkQuota();
