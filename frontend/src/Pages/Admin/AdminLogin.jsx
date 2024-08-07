import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Assets/CSS/style.css';

function AdminLogin() {
    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [adminNameErr, setAdminNameErr] = useState(false);
    const [adminPasswordErr, setAdminPasswordErr] = useState(false);
    const [incorrectErr, setIncorrectErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const adminCredentials = {
        name: 'admin',
        password: 'admin123'
    };

    function AdminLoginValidation() {
        if (adminName.trim().length !== 0) {
            setAdminNameErr(false);
        } else {
            setAdminNameErr(true);
        }

        if (adminPassword.trim().length !== 0) {
            setAdminPasswordErr(false);
        } else {
            setAdminPasswordErr(true);
        }

        if (adminName === adminCredentials.name && adminPassword === adminCredentials.password) {
            setIncorrectErr(false);
            window.location.href = '/admin-dashboard';
        } else {
            setIncorrectErr(true);
            alert("Invalid Admin Credentials");
        }
    }

    return (
        <div className="login-body">
            <div className="login-main">
                <h1>Admin Login</h1>
                {incorrectErr && <small style={{ color: 'red', textAlign: 'center' }}>Invalid Admin Credentials</small>}
                <br />
                <p>Admin Name</p>
                <input type='text' value={adminName} onChange={(e) => { setAdminName(e.target.value) }}></input>
                {adminNameErr && <small style={{ color: '#d3521d' }}>Please enter the Admin Name</small>}
                <br />
                <p>Password</p>
                <input type={showPassword ? 'text' : 'password'} value={adminPassword} onChange={(e) => { setAdminPassword(e.target.value) }}></input>
                {adminPasswordErr && <small style={{ color: '#d3521d' }}>Please enter the Password</small>}
                <br />
                <label className="checkbox-container">
                    <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                    <span className="checkmark"></span>
                    Show Password
                </label>
                <br/>
                <button onClick={AdminLoginValidation}>Login</button>
                <p style={{ fontSize: '10px' }}>Not an admin? <Link to={'/login'}>User Login</Link></p>
            </div>
        </div>
    );
}

export default AdminLogin;
