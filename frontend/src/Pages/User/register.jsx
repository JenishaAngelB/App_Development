import React, { useState } from "react";
import '../../Assets/CSS/style.css'

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [number, setNumber] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function registration() {
        if ((username.trim().length === 0) || (password.trim().length === 0) || (email.trim().length === 0)) {
            setNameErr(true);
        } else if (!email.includes('@') || !email.includes('.') || !email.includes('com')) {
            alert('Please enter a valid email address');
        } else if (password.length < 8) {
            alert('Please enter a password with more than eight characters');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else if (number.length !== 10) {
            alert('Check your phone number');
        } else {
            setNameErr(false);
            const user = { username: username, email: email, number: number, password: password };
            console.log(user);
            localStorage.setItem('user', JSON.stringify({ name: username, email: email, number: number, password: password }));
            window.location.href = '/login';
        }
    }

    return (
        <div className="register-body">
            <div className="register-main">
                <h1>Register</h1>
                {nameErr && <p className="errP">Please fill every input field</p>}
                <br />
                <p>Name</p>
                <input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }}></input>
                <br />
                <p>Phone</p>
                <input type='text' value={number} onChange={(e) => { setNumber(e.target.value) }}></input>
                <br />
                <p>Email</p>
                <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                <br />
                <p>Password</p>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                <br />
                <p>Confirm Password</p>
                <input type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}></input>
                <br />
                <label className="checkbox-container">
                    <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                    <span className="checkmark"></span>
                    Show Password
                </label><br />
                <button onClick={registration}>Register</button>
            </div>
        </div>
    );
}

export default Register;
