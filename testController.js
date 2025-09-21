const { GoogleGenerativeAI } = require('@google/generative-ai');

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

// @desc    Get aptitude test questions from an AI
// @route   GET /api/test/questions
// @access  Private (should be authenticated)
exports.getTestQuestions = async (req, res) => {
    const { interests } = req.query; // Interests are passed as a query parameter from the frontend
    
    // Check if interests are provided
    if (!interests) {
        return res.status(400).json({ message: "Interests are required to generate questions." });
    }

    // This is the prompt that instructs the AI to generate a specific JSON output
    const prompt = `
        Please generate a set of 5 multiple-choice questions for an aptitude test. The questions should be related to the following topics: ${interests}.
        The questions should assess general knowledge, logical reasoning, and skills related to these topics.
        Provide the response in a JSON object format. The JSON object should have a single key 'questions', which contains an array of question objects.
        Each question object must have the following keys:
        - "id": A unique string ID for the question (e.g., "q_1").
        - "question": A string with the question text.
        - "options": An array of 4 strings, representing the possible answers.
        - "answer": A string with the correct answer.
        - "category": A string with the primary category of the question (e.g., "Logical Reasoning", "Technology", "Science").

        Example JSON format:
        {
            "questions": [
                {
                    "id": "q_1",
                    "question": "Example question text?",
                    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
                    "answer": "Option 1",
                    "category": "Example Category"
                }
            ]
        }
    `;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        
        // Extract the text and clean it up to parse as JSON
        const text = response.text().replace(/```json/g, '').replace(/```/g, '').trim();
        
        // Parse the cleaned JSON string
        const generatedData = JSON.parse(text);

        // Send the generated questions to the frontend
        res.json(generatedData.questions);

    } catch (error) {
        console.error('Error fetching questions from AI API:', error.message);
        // Fallback to a static list if the AI call fails
        const fallbackQuestions = [
            { id: 'fb_1', question: 'Fallback question 1', options: ['a', 'b', 'c', 'd'], answer: 'a', category: 'General Knowledge' },
            { id: 'fb_2', question: 'Fallback question 2', options: ['e', 'f', 'g', 'h'], answer: 'e', category: 'General Knowledge' },
        ];
        res.status(500).json(fallbackQuestions); // Send a friendly error message and fallback data
    }
};