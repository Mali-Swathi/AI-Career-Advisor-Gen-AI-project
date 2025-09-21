import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerAdvisorPage.css';
import finalImage from '../../assets/final.jpg';

const predefinedInterests = [
    'Technology', 'Art', 'Science', 'Business', 'Healthcare', 'Education', 'Design', 'Engineering', 'Law', 'Agriculture', 'Environment', 'Architecture', 'Sports', 'Animals'
];

const predefinedQuestions = [
    {
        id: 1,
        text: "Do you enjoy solving logical and technical problems?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['analytical', 'problem_solving'], "Sometimes": [], "No": [] }
    },
    {
        id: 2,
        text: "Do you like working with machines, electronics, or building devices?",
        options: ["Yes", "Somewhat", "No"],
        traits: { "Yes": ['mechanical', 'engineering'], "Somewhat": [], "No": [] }
    },
    {
        id: 3,
        text: "Do you find coding and software development interesting?",
        options: ["Yes", "A little", "No"],
        traits: { "Yes": ['coding', 'tech_interest'], "A little": [], "No": [] }
    },
    {
        id: 4,
        text: "Do you enjoy drawing, painting, or digital design?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['creative', 'design'], "Sometimes": [], "No": [] }
    },
    {
        id: 5,
        text: "Do you like performing on stage (acting, singing, dancing)?",
        options: ["Yes", "Occasionally", "No"],
        traits: { "Yes": ['performing', 'creative'], "Occasionally": [], "No": [] }
    },
    {
        id: 6,
        text: "Would you enjoy entertaining people with humor?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['entertaining', 'creative'], "Sometimes": [], "No": [] }
    },
    {
        id: 7,
        text: "Do you like creating content for social media, YouTube, or blogs?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['content_creation', 'creative'], "Maybe": [], "No": [] }
    },
    {
        id: 8,
        text: "Would you enjoy designing clothes, interiors, or products?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['fashion', 'design'], "Maybe": [], "No": [] }
    },
    {
        id: 9,
        text: "Do you like organizing, managing, and leading teams?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['organizing', 'leadership'], "Sometimes": [], "No": [] }
    },
    {
        id: 10,
        text: "Would you like to run your own business someday?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['entrepreneurship', 'business'], "Maybe": [], "No": [] }
    },
    {
        id: 11,
        text: "Are you comfortable speaking in front of large groups of people?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['communication', 'social'], "Sometimes": [], "No": [] }
    },
    {
        id: 12,
        text: "Do you want to influence society and create policies?",
        options: ["Yes", "Somewhat", "No"],
        traits: { "Yes": ['leadership', 'politics'], "Somewhat": [], "No": [] }
    },
    {
        id: 13,
        text: "Do you enjoy analyzing markets, money, and business growth?",
        options: ["Yes", "A little", "No"],
        traits: { "Yes": ['finance', 'analytical'], "A little": [], "No": [] }
    },
    {
        id: 14,
        text: "Would you enjoy helping people improve their health?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['healthcare', 'social'], "Maybe": [], "No": [] }
    },
    {
        id: 15,
        text: "Do you want to work with mental health, counseling, or therapy?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['psychology', 'social'], "Maybe": [], "No": [] }
    },
    {
        id: 16,
        text: "Are you motivated by helping poor and underprivileged people?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['social_service', 'social'], "Sometimes": [], "No": [] }
    },
    {
        id: 17,
        text: "Do you enjoy working with children and teaching them?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['education', 'social'], "Sometimes": [], "No": [] }
    },
    {
        id: 18,
        text: "Do you like debating and discussing justice or legal matters?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['law', 'analytical'], "Sometimes": [], "No": [] }
    },
    {
        id: 19,
        text: "Would you enjoy working for government services or civil exams?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['government', 'organizing'], "Maybe": [], "No": [] }
    },
    {
        id: 20,
        text: "Do you like farming, gardening, or working in nature?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['agriculture', 'environment'], "Sometimes": [], "No": [] }
    },
    {
        id: 21,
        text: "Would you enjoy protecting forests, animals, and the environment?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['environmental', 'conservation'], "Maybe": [], "No": [] }
    },
    {
        id: 22,
        text: "Do you enjoy working outdoors rather than in an office?",
        options: ["Yes", "Both", "No"],
        traits: { "Yes": ['outdoors'], "Both": [], "No": [] }
    },
    {
        id: 23,
        text: "Would you enjoy designing buildings, houses, or cities?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['architecture', 'design'], "Maybe": [], "No": [] }
    },
    {
        id: 24,
        text: "Do you enjoy research, experiments, and discovering new things?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['science', 'research'], "Maybe": [], "No": [] }
    },
    {
        id: 25,
        text: "Are you curious about space, planets, and astronomy?",
        options: ["Yes", "Somewhat", "No"],
        traits: { "Yes": ['astronomy', 'science'], "Somewhat": [], "No": [] }
    },
    {
        id: 26,
        text: "Do you like playing competitive sports?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['sports', 'active'], "Sometimes": [], "No": [] }
    },
    {
        id: 27,
        text: "Would you enjoy coaching or training athletes?",
        options: ["Yes", "Maybe", "No"],
        traits: { "Yes": ['coaching', 'sports'], "Maybe": [], "No": [] }
    },
    {
        id: 28,
        text: "Do you prefer physical activity over sitting at a desk job?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['active', 'sports'], "Sometimes": [], "No": [] }
    },
    {
        id: 29,
        text: "Do you like working with animals?",
        options: ["Yes", "Sometimes", "No"],
        traits: { "Yes": ['animals', 'veterinary'], "Sometimes": [], "No": [] }
    },
    {
        id: 30,
        text: "Which kind of career environment excites you the most?",
        options: ["Corporate office", "Creative studio", "Parliament/Court", "Sports field", "Stage", "Nature field", "Hospital/Clinic"],
        traits: {
            "Corporate office": ['business'],
            "Creative studio": ['creative', 'art'],
            "Parliament/Court": ['politics', 'law'],
            "Sports field": ['sports', 'active'],
            "Stage": ['creative', 'performing'],
            "Nature field": ['environment', 'agriculture'],
            "Hospital/Clinic": ['healthcare', 'science']
        }
    }
];

const careerRecommendations = [
    { title: "Software Engineer", interests: ['Technology', 'Science'], traits: ['coding', 'analytical', 'problem_solving', 'tech_interest'], score: 0 },
    { title: "Graphic Designer", interests: ['Design', 'Art'], traits: ['creative', 'design', 'content_creation'], score: 0 },
    { title: "Financial Analyst", interests: ['Business'], traits: ['analytical', 'finance', 'organizing'], score: 0 },
    { title: "Physician/Doctor", interests: ['Healthcare', 'Science'], traits: ['healthcare', 'analytical', 'problem_solving'], score: 0 },
    { title: "Teacher", interests: ['Education', 'Social'], traits: ['education', 'communication', 'social'], score: 0 },
    { title: "Architect", interests: ['Architecture', 'Design'], traits: ['architecture', 'design', 'problem_solving'], score: 0 },
    { title: "Environmental Scientist", interests: ['Environment', 'Science'], traits: ['environmental', 'conservation', 'science'], score: 0 },
    { title: "Lawyer", interests: ['Law', 'Justice'], traits: ['law', 'analytical', 'communication'], score: 0 },
    { title: "Entrepreneur", interests: ['Business'], traits: ['entrepreneurship', 'leadership', 'organizing'], score: 0 },
    { title: "Athlete/Coach", interests: ['Sports', 'Fitness'], traits: ['sports', 'active', 'coaching'], score: 0 },
    { title: "Artist/Performer", interests: ['Art', 'Creativity'], traits: ['creative', 'performing', 'entertaining'], score: 0 },
    { title: "Zoologist/Veterinarian", interests: ['Animals', 'Science'], traits: ['animals', 'veterinary', 'science'], score: 0 },
    { title: "Politician", interests: ['Politics'], traits: ['politics', 'leadership', 'communication'], score: 0 },
    { title: "Social Worker", interests: ['Social Service'], traits: ['social', 'social_service'], score: 0 },
    { title: "Civil Engineer", interests: ['Engineering', 'Architecture'], traits: ['engineering', 'architecture', 'problem_solving'], score: 0 },
    { title: "Data Analyst", interests: ['Science', 'Business'], traits: ['analytical', 'problem_solving'], score: 0 },
];

function CareerAdvisorPage() {
    const navigate = useNavigate();
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [customInterest, setCustomInterest] = useState('');
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isTestCompleted, setIsTestCompleted] = useState(false);
    const [topRecommendations, setTopRecommendations] = useState([]);

    const calculateScore = () => {
        let finalScores = careerRecommendations.map(rec => ({ ...rec, score: 0 }));
        const maxPossibleScore = (predefinedInterests.length * 20) + (predefinedQuestions.length * 1); // Simple max score calculation for normalization

        finalScores.forEach(rec => {
            rec.interests.forEach(interest => {
                if (selectedInterests.includes(interest)) {
                    rec.score += 20;
                }
            });
        });

        Object.keys(userAnswers).forEach(questionId => {
            const question = predefinedQuestions.find(q => q.id === parseInt(questionId));
            const answer = userAnswers[questionId];
            const matchingTraits = question.traits[answer] || [];

            finalScores.forEach(rec => {
                matchingTraits.forEach(trait => {
                    if (rec.traits.includes(trait)) {
                        rec.score += 1;
                    }
                });
            });
        });

        finalScores.sort((a, b) => b.score - a.score);
        const top3 = finalScores.slice(0, 3).map(rec => ({
            ...rec,
            match: `${((rec.score / finalScores[0].score) * 100).toFixed(0)}%` // Normalize to a percentage of the top score
        }));

        setTopRecommendations(top3);
        setIsTestCompleted(true);
    };

    const handleInterestClick = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter((item) => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const handleAddCustomInterest = () => {
        if (customInterest.trim() !== '' && !selectedInterests.includes(customInterest.trim())) {
            setSelectedInterests([...selectedInterests, customInterest.trim()]);
            setCustomInterest('');
        }
    };

    const handleStartTest = async () => {
        if (selectedInterests.length > 0) {
            setIsTestStarted(true);
            setCurrentQuestionIndex(0);
            setUserAnswers({});
            setIsTestCompleted(false);
            setTopRecommendations([]);
        } else {
            alert("Please select at least one interest to start the test.");
        }
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption !== null) {
            const questionId = predefinedQuestions[currentQuestionIndex].id;
            const newAnswers = {
                ...userAnswers,
                [questionId]: selectedOption,
            };
            setUserAnswers(newAnswers);
            setSelectedOption(null);

            if (currentQuestionIndex === predefinedQuestions.length - 1) {
                calculateScore();
            } else {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
        } else {
            alert("Please select an option to continue.");
        }
    };

    const startOver = () => {
        setIsTestStarted(false);
        setIsTestCompleted(false);
        setSelectedInterests([]);
        setCustomInterest('');
        setTopRecommendations([]);
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        setSelectedOption(null);
    };
    
    // --- Render Logic ---
    
    if (isTestCompleted) {
        return (
            <div className="career-advisor-container results-background">
                <div className="results-content">
                    <h2 className="results-title">Your Career Path</h2>
                    <p className="motivational-text">
                        You have a bright future! Based on your responses, here are your best career matches.
                    </p>
                    <div className="recommendations-list">
                        {topRecommendations.map((rec, index) => (
                            <div key={index} className="recommendation-card">
                                <h3>{rec.title}</h3>
                                <p className="match-score">Match: {rec.match}</p>
                                <p className="match-reason">Based on your interests in **{rec.interests.join(', ')}** and traits like **{rec.traits.join(', ')}**.</p>
                                <button
                                    className="start-test-button"
                                    onClick={() => navigate(`/career-directions/${encodeURIComponent(rec.title)}`)}
                                >
                                    Get Directions
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="next-button-container">
                        <button className="start-test-button" onClick={startOver}>
                            Start Over
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
    if (isTestStarted) {
        const currentQuestion = predefinedQuestions[currentQuestionIndex];
        const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

        return (
            <div className="career-advisor-container">
                <h2>Your Career Test</h2>
                <p>Question {currentQuestionIndex + 1} of {predefinedQuestions.length}:</p>
                
                <div className="test-questions">
                    <div className="question">
                        <h3>{currentQuestion.text}</h3>
                        <div className="options">
                            {currentQuestion.options.map((option, index) => (
                                <button 
                                    key={index} 
                                    className={`option-button ${selectedOption === option ? 'selected' : ''}`} 
                                    onClick={() => handleOptionClick(option)}
                                >
                                    <span className="option-label">{optionLabels[index]}.</span> {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="next-button-container">
                    <button 
                        className="start-test-button" 
                        onClick={handleNextQuestion}
                        disabled={selectedOption === null}
                    >
                        {currentQuestionIndex === predefinedQuestions.length - 1 ? 'Finish Test' : 'Next Question'}
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="career-advisor-container">
            <h2>Welcome to your AI Career Advisor!</h2>
            <p>
                To get started, please tell us about your interests. You can choose from the options below or type your own.
            </p>
            <div className="interest-section">
                <div className="interest-buttons">
                    {predefinedInterests.map((interest, index) => (
                        <button
                            key={index}
                            className={`interest-button ${selectedInterests.includes(interest) ? 'selected' : ''}`}
                            onClick={() => handleInterestClick(interest)}
                        >
                            {interest}
                        </button>
                    ))}
                </div>
                <div className="interest-input-group">
                    <p>Or, type your own interests:</p>
                    <input 
                        type="text" 
                        className="interest-input"
                        placeholder="e.g., writing, cooking, finance, marketing..."
                        value={customInterest}
                        onChange={(e) => setCustomInterest(e.target.value)}
                    />
                    <button className="add-button" onClick={handleAddCustomInterest}>Add</button>
                </div>
            </div>
            
            {selectedInterests.length > 0 && (
                <div className="selected-interests-section">
                    <h3>Your Interests:</h3>
                    <div className="selected-interests-list">
                        {selectedInterests.map((interest, index) => (
                            <span key={index} className="selected-interest-tag">
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            <div className="start-test-button-container">
                <button 
                    className="start-test-button" 
                    onClick={handleStartTest}
                    disabled={selectedInterests.length === 0}
                >
                    Take Test
                </button>
            </div>
        </div>
    );
}

export default CareerAdvisorPage;