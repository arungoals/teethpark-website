const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function test() {
    console.log("--- Gemini API Deep Diagnostic ---");
    if (!process.env.GOOGLE_API_KEY) {
        console.error("❌ Error: GOOGLE_API_KEY not found in .env file");
        return;
    }
    console.log("Key found (ends with):", process.env.GOOGLE_API_KEY.slice(-4));

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

    const modelsToTry = [
        "gemini-1.5-flash",
        "gemini-1.5-pro",
        "gemini-1.0-pro",
        "gemini-pro"
    ];

    for (const modelName of modelsToTry) {
        try {
            console.log(`Checking ${modelName}...`);
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("hello");
            console.log(`✅ ${modelName} works!`);
            return; // Stop if any work
        } catch (error) {
            console.log(`❌ ${modelName} failed: ${error.message}`);
        }
    }

    console.log("\n--- Conclusion ---");
    console.log("All common model names returned 404 or errors.");
    console.log("This usually means:");
    console.log("1. The API KEY is not associated with a project that has Gemini enabled.");
    console.log("2. You are in a restricted region (unlikely to be 404).");
    console.log("3. Your SDK version is conflicting with the model names (rare).");
}

test();
