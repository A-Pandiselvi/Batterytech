import React, { useState } from 'react';
import 'C:/Users/pandi/OneDrive/Documents/GitHub/Batterytech/batterytech/src/component/login.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        // Reset errors
        setEmailError('');
        setPasswordError('');

        // Validate email
        if (!validateEmail(email)) {
            setEmailError('Enter a valid email address.');
            valid = false;
        }

        // Validate password
        if (!validatePassword(password)) {
            setPasswordError('Enter a password with at least 6 characters.');
            valid = false;
        }

        // If both are valid, store data in localStorage and log to console
        if (valid) {
            // Store email and password in localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            // Log to the console
            console.log('Email:', email);
            console.log('Password:', password);

            alert('Login successful!');

            // Clear input fields
            setEmail('');
            setPassword('');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleForgetPassword = () => {
        alert('Password recovery functionality is not yet implemented.');
    };

    return (
        <div className="login-container">
            <img src="https://www.ivwindia.com/assets/img/logo.png" alt="" className='logo' />
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                        <p style={{ color: 'red', fontSize: '12px' }}>
                            {emailError}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && (
                        <p style={{ color: 'red', fontSize: '12px' }}>
                            {passwordError}
                        </p>
                    )}
                </div>
                <div
                    className='form-group'
                    onClick={handleForgetPassword}
                    style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' ,textAlign:'start'}}
                >
                    Forget Password?
                </div>
                {/* <div
                    className='form-group'
                    onClick={handleForgetPassword}
                    style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
                >
                    Create a New Account
                </div> */}
                <button type="submit" className="loginbtn">Login</button>
                <div className='createaccount'>
    Don't have an account? <Link to="/register" style={{ color: '#007bff', textDecoration: 'underline' }}>Register</Link>
</div>
            </form>
        </div>
    );
};

export default Login;
