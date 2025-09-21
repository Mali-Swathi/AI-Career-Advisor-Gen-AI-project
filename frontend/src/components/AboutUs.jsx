import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h2>About AI Career Advisor</h2>
                <p>
                    At AI Career Advisor, we believe that career guidance should be personalized, accessible, and future-ready. In today’s rapidly changing world, students and professionals often face challenges in choosing the right career path, identifying skill gaps, and preparing for opportunities. That’s where we step in.
                </p>
                <p>
                    Our platform leverages the power of Artificial Intelligence, data-driven insights, and real-time industry trends to provide smart career recommendations tailored to individual strengths, interests, and goals. Whether you’re a student exploring options, a job seeker planning your next move, or a professional looking to upskill, AI Career Advisor helps you make informed decisions with confidence.
                </p>
                
                <div className="commitment-section">
                    <h3>We are committed to:</h3>
                    <ul>
                        <li><strong>Personalized Career Guidance</strong> – Tailored recommendations based on your skills, interests, and aspirations.</li>
                        <li><strong>Skill Gap Analysis</strong> – Identifying where you stand today and what you need to achieve your dream career.</li>
                        <li><strong>Learning Pathways</strong> – Suggesting courses, certifications, and resources that align with your career goals.</li>
                        <li><strong>Job Market Insights</strong> – Providing real-time updates on emerging roles, salary trends, and in-demand skills.</li>
                        <li><strong>Accessible Support</strong> – Making career guidance simple and available to everyone, anytime, anywhere.</li>
                    </ul>
                </div>

                <p className="mission-statement">
                    At AI Career Advisor, our mission is to empower individuals to take charge of their careers by combining technology with meaningful guidance. We envision a future where career choices are no longer confusing but clear, confident, and purpose-driven.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;