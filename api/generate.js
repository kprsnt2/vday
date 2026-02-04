export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.geminiApiKey;

    if (!apiKey) {
        console.error('Gemini API key not configured');
        return res.status(500).json({ error: 'API key not configured on server' });
    }

    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        console.log('📤 Calling Gemini API...');

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.9,
                    maxOutputTokens: 1024
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('❌ Gemini API Error:', error);
            return res.status(response.status).json({ error: error.error?.message || 'API request failed' });
        }

        const data = await response.json();
        const result = data.candidates[0].content.parts[0].text;

        console.log('✅ Gemini API Success');
        return res.status(200).json({ result });

    } catch (error) {
        console.error('❌ Server Error:', error);
        return res.status(500).json({ error: error.message });
    }
}
