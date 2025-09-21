const careerData = require('../data/careerData'); // Mock data for careers

// This is a simple, mock database of correct answers for the aptitude test
const correctAnswers = {
    'q1': '3 hours',
    'q2': '32',
    'q3': 'React',
    'q4': 'Execute instructions'
};

// This maps test question categories to career paths
const careerMapping = {
    'Quantitative Skills': ['Data Scientist', 'Financial Analyst'],
    'Logical Reasoning': ['Software Engineer', 'Data Scientist'],
    'Technology & Programming': ['Software Engineer', 'Web Developer'],
};

exports.getRecommendation = async (req, res) => {
    const { answers, interests } = req.body;

    let scores = {};
    for (const interest of interests) {
        scores[interest] = 1;
    }

    // Score the test based on correct answers
    for (const qId in answers) {
        const userAnswer = answers[qId];
        const correctAnswer = correctAnswers[qId];

        if (userAnswer === correctAnswer) {
            const questionCategory = careerData.find(q => q.id === qId)?.category || 'General';
            scores[questionCategory] = (scores[questionCategory] || 0) + 1;
        }
    }

    // Find the best-matching career based on scores and interests
    let bestMatch = null;
    let highestScore = -1;

    for (const career of careerData) {
        let careerScore = 0;
        if (interests.includes(career.interest)) {
            careerScore += 2; // Strong match for direct interest
        }
        career.skills.forEach(skill => {
            if (scores[skill.category]) {
                careerScore += scores[skill.category];
            }
        });

        if (careerScore > highestScore) {
            highestScore = careerScore;
            bestMatch = career;
        }
    }

    if (!bestMatch) {
        return res.status(404).json({ message: 'No career recommendation found.' });
    }

    res.json(bestMatch);
};