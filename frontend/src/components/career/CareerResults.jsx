import React, { useState, useEffect } from 'react';
import './CareerResults.css';

const CareerResults = () => {
    const [recommendation, setRecommendation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRecommendation = async () => {
            try {
                // This is a placeholder. In the next step, you will send user data here.
                const response = await fetch('http://localhost:5000/api/recommendation/recommend', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ answers: {}, interests: [] }), // Placeholder data
                });
                const data = await response.json();
                if (response.ok) {
                    setRecommendation(data);
                } else {
                    setError(data.message || 'Failed to get recommendation.');
                }
            } catch (err) {
                setError('Network error, could not fetch recommendation.');
            } finally {
                setLoading(false);
            }
        };
        fetchRecommendation();
    }, []);

    if (loading) {
        return <div className="loading-container">Generating your career path...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="results-container">
            <div className="results-card">
                <h1>Your Personalized Career Plan</h1>
                <h2 className="career-title">{recommendation.name}</h2>
                <p className="career-description">{recommendation.description}</p>

                <div className="plan-section">
                    <h3>Your Career Roadmap</h3>
                    <ul className="plan-list">
                        {recommendation.plan.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CareerResults;