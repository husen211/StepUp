// src/components/Navbar.jsx
import "../styles/navbar.css";
import { FiArrowRight } from "react-icons/fi"; // Kita pakai ini sebagai pengganti 'arrow'
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="nv-navbar-fixed">
      <div className="nv-main-wrapper">
        {/* LOGO */}
        <Logo />

        {/* MENU */}
        <div className="nv-nav-links">
          <a href="#" className="nv-link-item">
            Home
          </a>
          <a href="#" className="nv-link-item">
            How it Works
          </a>
          <a href="#" className="nv-link-item">
            Features
          </a>
          <a href="#" className="nv-link-item">
            For Universities
          </a>
        </div>

        {/* CTA */}
        <div className="nv-action-area">
          <span className="nv-signin-text" onClick={() => Login()}>
            Sign In
          </span>
          <button className="nv-btn-dark">
            Start Analysis
            {/* GANTI <img src={arrow} /> DENGAN ICON DI BAWAH INI */}
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
