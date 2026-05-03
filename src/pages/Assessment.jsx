// src/pages/Assessment.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AssessmentSidebar from "../components/AssessmentSidebar";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import "../styles/assessment.css";
import { useNavigate } from "react-router-dom";

export default function Assessment() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div className="assessment-page">
      <Navbar />

      <main className="assessment-main">
        <div className="assessment-card">
          <AssessmentSidebar currentStep={1} />

          <section className="form-content">
            <h1>Academic Profile</h1>
            <p>Tell us about your educational background.</p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-field">
                <label>University / Institution</label>
                <input placeholder="e.g. Stanford University" />
              </div>

              <div className="input-field">
                <label>Major / Field of Study</label>
                <input placeholder="e.g. Computer Science" />
              </div>

              <div className="input-row">
                <div className="input-field">
                  <label>Current Semester</label>
                  <div className="select-wrapper">
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                    >
                      <option value="">Select year</option>
                      <option>Year 1</option>
                      <option>Year 2</option>
                      <option>Year 3</option>
                      <option>Year 4</option>
                    </select>
                    <FiChevronDown className="select-icon" />
                  </div>
                </div>

                <div className="input-field">
                  <label>GPA</label>
                  <input placeholder="e.g. 3.8" />
                </div>
              </div>

              <button
                className="btn-continue"
                onClick={() => navigate("/assessment2")}
              >
                Continue <FiArrowRight />
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
