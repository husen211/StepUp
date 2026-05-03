import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi"; // Ikon Otak
import { HiShieldCheck } from "react-icons/hi2"; // Ikon Perisai
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/analyzing.css";

const Analyzing = () => {
  const navigate = useNavigate();

  const messages = [
    "Parsing academic records and skills...",
    "Analyzing your strengths...",
    "Matching career paths...",
    "Finalizing your results...",
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < messages.length - 1) {
      const timer = setTimeout(() => setStep(step + 1), 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step, navigate, messages.length]);

  return (
    <div className="analyzing-page">
      <Navbar />

      <main className="analyzing-main">
        <div className="analyzing-card">
          <div className="loader-container">
            <div className="loader"></div>
            <div className="loader-icon">
              {/* Pakai React Icon GiBrain */}
              <GiBrain size={32} color="#2563eb" />
            </div>
          </div>

          <h2>Analyzing your profile...</h2>

          <p className="status">{messages[step]}</p>

          <div className="divider"></div>

          <div className="privacy">
            {/* Pakai React Icon HiShieldCheck */}
            <HiShieldCheck size={20} color="#3b82f6" />
            <p>Your data is securely encrypted and private.</p>
          </div>

          <small>This usually takes about 15–30 seconds.</small>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analyzing;
