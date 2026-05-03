// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="login-container">
        {/* SISI KIRI: BRANDING */}
        <div className="branding-side">
          <div className="lg-wrapper">
            <div className="logo-row">
              <div className="lg-box">
                <span className="s-char">S</span>
              </div>
              <span className="lg-text">StepUp</span>
            </div>
            <p className="branding-tagline">
              Elevate your journey to the next level
            </p>
          </div>
        </div>

        {/* SISI KANAN: CARD */}
        <div className="auth-side">
          <div className="login-card">
            <div className="card-header">
              <h2>Welcome Back</h2>
              <p>Please enter your details</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <FiLock className="input-icon" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="forgot-container">
                  <span className="link-blue">Forgot Password?</span>
                </div>
              </div>

              <button className="btn-login-main">Login</button>
            </form>

            <div className="card-footer">
              <p>
                Don’t have an account?{" "}
                <span className="link-blue bold">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
