import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './AuthForm.css'; // Assuming you have a CSS file for the forms

function AuthPage() {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(location.pathname === '/login');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-page-container">
            <div className="auth-form-card">
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
                {isLogin ? <LoginForm /> : <RegisterForm />}
                <p className="toggle-text">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span onClick={toggleForm} className="toggle-link">
                        {isLogin ? 'Register here' : 'Login here'}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default AuthPage;