import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Assets/CSS/style.css'

function Login() {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginNameErr, setLoginNameErr] = useState(false);
    const [loginPasswordErr, setPasswordErr] = useState(false);
    const [incorrectErr, setIncorrectErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function Loginvalidation() {
        if (loginName.trim().length !== 0) {
            setLoginNameErr(false);
        } else {
            setLoginNameErr(true);
        }

        if (loginPassword.trim().length !== 0) {
            setPasswordErr(false);
        } else {
            setPasswordErr(true);
        }

        const register = JSON.parse(localStorage.getItem('user'));
        if (register && (register.name !== loginName || register.password !== loginPassword)) {
            setIncorrectErr(true);
            alert("User Not Found");
        } else if (register) {
            setIncorrectErr(false);
            window.location.href = '/';
        }
    }

    return (
        <div className="login-body">
            <div className="login-main">
                <h1>Login</h1>
                {incorrectErr && <small style={{ color: 'red', textAlign: 'center' }}>Enter the correct username and password</small>}
                <br />
                <p>Name</p>
                <input type='text' value={loginName} onChange={(e) => { setLoginName(e.target.value) }}></input>
                {loginNameErr && <small style={{ color: '#d3521d' }}>Please enter the Username</small>}
                <br />
                <p>Password</p>
                <input type={showPassword ? 'text' : 'password'} value={loginPassword} onChange={(e) => { setLoginPassword(e.target.value) }}></input>
                {loginPasswordErr && <small style={{ color: '#d3521d' }}>Please enter the password</small>}
                <br />
                <label className="checkbox-container">
                    <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                    <span className="checkmark"></span>
                    Show Password
                </label>
                <br/>
                <button onClick={Loginvalidation}>Login</button>
                <p style={{ fontSize: '10px' }}>Doesn't have an account yet? <Link to={'/register'}>Register</Link></p>
                <p style={{ fontSize: '10px' }}>Are you Admin? <Link to={'/adminlogin'}>Login Here</Link></p>
            </div>
        </div>
    );
}

export default Login;