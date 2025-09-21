import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TestQuestions.css';

const TestQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation(); // Hook to access state from navigate

    // Get user interests from the state passed from InterestForm
    const userInterests = location.state?.userInterests || [];

    useEffect(() => {
        const fetchQuestions = async () => {
            if (userInterests.length === 0) {
                // If no interests were passed, handle gracefully
                setLoading(false);
                return;
            }

            try {
                // Pass interests as a query parameter
                const response = await fetch(`http://localhost:5000/api/test/questions?interests=${userInterests.join(',')}`);
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Failed to fetch questions:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchQuestions();
    }, [userInterests]); // The effect re-runs if interests change

    const handleAnswerChange = (e) => {
        const { value } = e.target;
        setUserAnswers({
            ...userAnswers,
            [questions[currentQuestionIndex]._id]: value
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleSubmitTest();
        }
    };

    const handleSubmitTest = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/recommendation/recommend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answers: userAnswers, interests: userInterests }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                navigate('/results', { state: { recommendation: data } });
            } else {
                console.error('Failed to submit test and get recommendation:', data.message);
            }

        } catch (error) {
            console.error('Network error during test submission:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading-container">Generating your test...</div>;
    }
    
    if (questions.length === 0) {
        return <div className="loading-container">No questions found. Please go back and select interests.</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="test-container">
            <div className="test-header">
                <h2>Aptitude Test</h2>
                <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
            </div>
            <div className="question-card">
                <p className="question-text">{currentQuestion.question}</p>
                <div className="options-list">
                    {currentQuestion.options.map((option, index) => (
                        <div key={index} className="option-item">
                            <input
                                type="radio"
                                id={`option-${index}`}
                                name="current-question"
                                value={option}
                                onChange={handleAnswerChange}
                                checked={userAnswers[currentQuestion._id] === option}
                            />
                            <label htmlFor={`option-${index}`}>{option}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="navigation-buttons">
                <button onClick={handleNextQuestion} className="next-button">
                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Submit Test'}
                </button>
            </div>
        </div>
    );
};

export default TestQuestions;