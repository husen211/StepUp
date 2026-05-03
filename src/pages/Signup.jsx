import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import "../styles/signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Data Signup:", formData);
  };

  return (
    <div className="su-page">
      <div className="su-container">
        {/* --- BRANDING (LEFT) --- */}
        <div className="su-branding-side">
          <div className="su-lg-wrapper">
            <div className="su-logo-row">
              <div className="su-lg-box">S</div>
              <span className="su-lg-text">StepUp</span>
            </div>
            <p className="su-branding-tagline">
              Elevate your journey to the next level
            </p>
          </div>
        </div>

        {/* --- SIGNUP CARD (RIGHT) --- */}
        <div className="su-auth-side">
          <div className="su-auth-card">
            <header className="su-card-header">
              <h2>Sign Up</h2>
              <p>Sign up to continue</p>
            </header>

            <form onSubmit={handleSignup} className="su-form">
              {/* NAME */}
              <div className="su-input-group">
                <label>FULL NAME</label>
                <div className="su-input-wrapper">
                  <FiUser color="#2563eb" />
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="su-input-group">
                <label>EMAIL ADDRESS</label>
                <div className="su-input-wrapper">
                  <FiMail color="#2563eb" />
                  <input
                    name="email"
                    type="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="su-input-group">
                <label>PASSWORD</label>
                <div className="su-input-wrapper">
                  <FiLock color="#2563eb" />
                  <input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="su-btn-main">
                Sign Up
              </button>
            </form>

            <footer className="su-card-footer">
              <p>
                Already have an account?{" "}
                <span onClick={() => navigate("/")} className="su-link">
                  Sign in
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
