import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import at from '../assets/at.svg';
import lock from '../assets/lock.svg';
import Btn from '../Componenets/Btn';

function Login({ login, setLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setInfo] = useState([]);

    function handleSubmit(e) {
        e.preventDefault(); // Prevent page reload
        login === 3 ? setLogin(2) : setLogin(3);

        // Update userInfo with an object
        setInfo(prevInfo => [...prevInfo, { email, password }]);

        // Log updated info
        console.log([...userInfo, { email, password }]);
    }

    return (
        <div className="Login">
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="label">
                        <label>Email</label>
                        <div className="input">
                            <img src={at} alt="Email Icon" />
                            <input
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                            />
                        </div>
                    </div>
                    <div className="label">
                        <label>Password</label>
                        <div className="input">
                            <img src={lock} alt="Lock Icon" />
                            <input
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                value={password}
                            />
                        </div>
                    </div>
                    <div className="remember">
                        <div className="rem">
                            <input type="radio" />
                            <h5>Remember me</h5>
                        </div>
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                    <Btn text='Sign in'/>
                </form>
            </div>
        </div>
    );
}

export default Login;
