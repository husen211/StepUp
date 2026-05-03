// src/components/Footer.jsx
import "../styles/footer.css";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="ft-main">
      <div className="ft-container">
        <div className="ft-grid">
          {/* LEFT SECTION: BRAND & SOCIALS */}
          <div className="ft-brand-col">
            <div className="ft-logo-wrapper">
              <div className="ft-logo-box">S</div>
              <span className="ft-logo-text">StepUp</span>
            </div>

            <p className="ft-brand-desc">
              Empowering students to find their true <br />
              calling through AI-driven career path <br />
              analysis.
            </p>

            <div className="ft-social-links">
              <a href="#" className="ft-social-icon">
                <FiTwitter />
              </a>
              <a href="#" className="ft-social-icon">
                <FiLinkedin />
              </a>
              <a href="#" className="ft-social-icon">
                <FiGithub />
              </a>
            </div>
          </div>

          {/* LINKS SECTION */}
          <div className="ft-links-col">
            <h4 className="ft-title">PRODUCT</h4>
            <nav className="ft-list">
              <a href="#" className="ft-item">
                How it works
              </a>
              <a href="#" className="ft-item">
                Features
              </a>
              <a href="#" className="ft-item">
                Pricing
              </a>
              <a href="#" className="ft-item">
                For Universities
              </a>
            </nav>
          </div>

          <div className="ft-links-col">
            <h4 className="ft-title">RESOURCES</h4>
            <nav className="ft-list">
              <a href="#" className="ft-item">
                Career Blog
              </a>
              <a href="#" className="ft-item">
                Success Stories
              </a>
              <a href="#" className="ft-item">
                Skill Assessments
              </a>
              <a href="#" className="ft-item">
                Help Center
              </a>
            </nav>
          </div>

          <div className="ft-links-col">
            <h4 className="ft-title">LEGAL</h4>
            <nav className="ft-list">
              <a href="#" className="ft-item">
                Privacy Policy
              </a>
              <a href="#" className="ft-item">
                Terms of Service
              </a>
              <a href="#" className="ft-item">
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © 2026 StepUp Career Platform. All rights reserved.
          </p>
          <div className="ft-credit">Designed for students ❤️</div>
        </div>
      </div>
    </footer>
  );
}
