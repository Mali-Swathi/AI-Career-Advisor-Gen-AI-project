import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className="contact-us-container">
            <div className="contact-us-content">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <p class="mail">📩 Email: careeradvisor@gmail.com</p>
                    <p class="mail">📩 Email: supportadvisor@gmail.com</p>
                    <h3>Have a Question?</h3>
                    <p>Here are some common queries you can reach out to us for:</p>
                    <ul>
                        <li>📌 “Which career path suits my skills and interests?”</li>
                        <li>📌 “What courses or certifications should I take to improve my profile?”</li>
                        <li>📌 “How do I prepare for interviews in my chosen field?”</li>
                        <li>📌 “Can you suggest job opportunities based on my resume?”</li>
                        <li>📌 “What are the latest industry trends I should know about?”</li>
                    </ul>
                </div>
                <div className="query-section">
                    <h3>Submit Your Query</h3>
                    <p>
                        If you have any other questions or specific concerns, just drop us a mail at <strong>careeradvisor@gmail.com</strong>.
                    </p>
                    <p>
                        Our AI-powered support team will guide you with personalized answers and resources to help you move forward in your career journey.
                    </p>
                    <p className="tagline">
                        ✨ No question is too small when it comes to your career—ask us anything, and we’ll help you find the right direction.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;