import React from 'react';
import './WelcomePage.css';

function WelcomePage() {
  return (
    <div className="welcome-page-container">
      <div className="welcome-content">
        <h1>Find Your Perfect Career Path</h1>
        <p>Our AI-powered platform helps you discover your true potential by matching your skills and interests with the ideal career. Unlock opportunities and make informed decisions for a brighter future.</p>

        <div className="image-quote-section">
          <div className="image-pair">
            <img src="/assets/group.jpeg" alt="Group of people representing careers" className="content-image" />
            <div className="quote-box">
              <blockquote>"If opportunity doesn't knock, build a door."</blockquote>
              <blockquote>"The only way to do great work is to love what you do."</blockquote>
            </div>
          </div>
          <div className="image-pair">
            <img src="/assets/steps.jpg" alt="Career path with steps" className="content-image" />
            <div className="quote-box">
              <blockquote>"Success is not final, failure is not fatal: it is the courage to continue that counts."</blockquote>
              <blockquote>"The future belongs to those who believe in the beauty of their dreams."</blockquote>
            </div>
          </div>
          <div className="image-pair">
            <img src="/assets/collaborate.jpg" alt="Diverse professionals collaborating" className="content-image" />
            <div className="quote-box">
              <blockquote>"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."</blockquote>
              <blockquote>"It's not about how hard you hit. It's about how hard you can get hit and keep moving forward."</blockquote>
            </div>
          </div>
          <div className="image-pair">
            <img src="/assets/success.jpg" alt="Person achieving goals" className="content-image" />
            <div className="quote-box">
              <blockquote>"Choose a job you love, and you will never have to work a day in your life."</blockquote>
              <blockquote>"The best way to predict the future is to create it."</blockquote>
            </div>
          </div>
        </div>

        <div className="cta-section">
            <h2>Ready to shape your future?</h2>
            <p>Join thousands of individuals who are transforming their careers with AI Career Advisor. Get started today!</p>
            <button className="get-started-button">Get Started Now</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;