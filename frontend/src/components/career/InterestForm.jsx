import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InterestForm.css';

const InterestForm = () => {
    const [interests, setInterests] = useState([]);
    const navigate = useNavigate();

    const interestOptions = [
        'Technology & Programming', 'Science & Research', 'Arts & Design',
        'Business & Entrepreneurship', 'Healthcare & Medicine', 'Law & Government',
        'Education & Teaching', 'Creative Writing', 'Finance & Economics'
    ];

    const handleInterestChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setInterests([...interests, value]);
        } else {
            setInterests(interests.filter(interest => interest !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass the interests to the next page using state
        navigate('/test', { state: { userInterests: interests } });
    };

    return (
        <div className="interest-form-container">
            <form onSubmit={handleSubmit} className="interest-form">
                <h2>What are your main interests?</h2>
                <p>Select all that apply.</p>
                <div className="interest-options">
                    {interestOptions.map((option, index) => (
                        <div key={index} className="interest-option">
                            <input
                                type="checkbox"
                                id={option}
                                value={option}
                                onChange={handleInterestChange}
                            />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    ))}
                </div>
                <button type="submit" className="submit-button">Next</button>
            </form>
        </div>
    );
};

export default InterestForm;