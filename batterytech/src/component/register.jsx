import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "C:/Users/pandi/OneDrive/Documents/GitHub/Batterytech/batterytech/src/component/register.css";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        // Reset errors
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

        // Validate name
        if (name.trim() === '') {
            setNameError('Name is required.');
            valid = false;
        }

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

        // Validate confirm password
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            valid = false;
        }

        // If all fields are valid, store data in localStorage and log to console
        if (valid) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);

            alert('Registration successful!');

            // Clear input fields
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    // Function to handle Google Sign-In
    const handleGoogleSignIn = () => {
        const CLIENT_ID = "YOUR_CLIENT_ID"; // Replace with your Client ID
        const REDIRECT_URI = "http://localhost:3000"; // Adjust if necessary
        const scope = "email profile";
        const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope}&response_type=token`;

        window.location.href = url;
    };

    // Fetch user data after redirect
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const token = new URLSearchParams(hash.substring(1)).get("access_token");
            if (token) {
                fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + token)
                    .then(response => response.json())
                    .then(data => {
                        console.log("User data: ", data); // Handle user data here
                        setEmail(data.email); // Optionally, set email to state
                    });
            }
        }
    }, []);

    return (
        <div className="register-container">
            <img src="https://www.ivwindia.com/assets/img/logo.png" alt="" className='logo' />
            <h2>REGISTER</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && (
                        <p style={{ color: 'red', fontSize: '12px' }}>
                            {nameError}
                        </p>
                    )}
                </div>

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

                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPasswordError && (
                        <p style={{ color: 'red', fontSize: '12px' }}>
                            {confirmPasswordError}
                        </p>
                    )}
                </div>

                <button type="submit" className="registerbtn">Register</button>
                <div className='loginredirect'>
                    Already have an account? <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>Login</Link>
                </div>
                
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className='signup' onClick={handleGoogleSignIn}>
                        <img src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1" alt=""  className='google' />
                        <p>Signin with Google</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
