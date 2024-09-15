import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterest, FaLinkedinIn } from 'react-icons/fa';
import { BiFingerprint } from 'react-icons/bi';
import '../Style/LoginCSS.css'; // Import the custom CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin@gmail.com' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        
          <h2>Login</h2>
        
        <p>
          By signing in you are agreeing to our <a href="/" style={{textDecoration:"none"}}>Term and privacy policy</a>
        </p>
        <div className="tab-links">
          <Link to="/login">
          <span className="active-tab">Login</span>
        </Link>
        <Link to="/">
          <span className="deactive-tab">Register</span>
        </Link>
          
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <span className="show-password-icon">👁️</span> */}
          </div>
          <div className="login-options">
            <div>
              <input type="checkbox" id="remember-password" />
              <label htmlFor="remember-password">Remember password</label>
            </div>
            <div><a href="#">Forget password</a></div>
            
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>or connect with</p>
        <div className="social-icons">
          <FaFacebookF className="icon" />
          <FaInstagram className="icon" />
          <FaPinterest className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
        <div className="fingerprint-icon">
          <BiFingerprint className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Login;
