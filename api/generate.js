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

    // Check for environment variable
    const apiKey = process.env.geminiApiKey;

    console.log('🔑 API Key exists:', !!apiKey);
    console.log('🔑 API Key length:', apiKey ? apiKey.length : 0);

    if (!apiKey) {
        console.error('❌ Gemini API key not found in environment variables');
        return res.status(500).json({
            error: 'API key not configured. Please add geminiApiKey to Vercel environment variables.'
        });
    }

    try {
        const { prompt } = req.body;

        console.log('📝 Received prompt:', prompt ? prompt.substring(0, 50) + '...' : 'No prompt');

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        console.log('📤 Calling Gemini API...');

        const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-04-17:generateContent?key=${apiKey}`, {
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

        console.log('📥 Gemini Response status:', geminiResponse.status);

        if (!geminiResponse.ok) {
            const errorData = await geminiResponse.text();
            console.error('❌ Gemini API Error Response:', errorData);

            let errorMessage = 'Gemini API request failed';
            try {
                const errorJson = JSON.parse(errorData);
                errorMessage = errorJson.error?.message || errorMessage;
            } catch (e) {
                errorMessage = errorData.substring(0, 200);
            }

            return res.status(geminiResponse.status).json({ error: errorMessage });
        }

        const data = await geminiResponse.json();
        console.log('✅ Gemini API Success');

        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            console.error('❌ Unexpected response structure:', JSON.stringify(data));
            return res.status(500).json({ error: 'Unexpected API response format' });
        }

        const result = data.candidates[0].content.parts[0].text;
        console.log('📄 Generated text length:', result.length);

        return res.status(200).json({ result });

    } catch (error) {
        console.error('❌ Server Error:', error.message);
        console.error('❌ Full Error:', error);
        return res.status(500).json({ error: 'Server error: ' + error.message });
    }
}
