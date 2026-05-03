// src/pages/Assessment2.jsx

import { useState } from "react";
import {
  FiArrowRight,
  FiArrowLeft,
  FiChevronDown,
  FiCode,
  FiCpu,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AssessmentLayout from "../layouts/AssessmentLayout";
import "../styles/assessment2.css";

export default function Assessment2() {
  const [level, setLevel] = useState("intermediate");
  const navigate = useNavigate();

  return (
    <AssessmentLayout currentStep={2}>
      {/* TOP NAVIGATION */}
      <div className="top-nav">
        <button
          type="button"
          className="btn-back"
          onClick={() => navigate("/assessment")}
        >
          <FiArrowLeft /> Back
        </button>

        <button
          type="button"
          className="btn-continue"
          onClick={() => navigate("/Assessment3")}
        >
          Continue <FiArrowRight />
        </button>
      </div>

      {/* HEADER */}
      <div className="form-header">
        <h1>Select your skills</h1>
        <p>
          Choose the technical and soft skills that best represent your
          expertise. This helps us tailor your assessment.
        </p>
      </div>

      {/* FORM BODY */}
      <div className="form-body">
        {/* TECH */}
        <div className="input-field">
          <label>
            <FiCode className="label-icon" /> Technical Skills
          </label>
          <div className="select-wrapper">
            <select>
              <option>Select your technical skills</option>
              <option>JavaScript</option>
              <option>Python</option>
              <option>React</option>
            </select>
            <FiChevronDown className="select-icon" />
          </div>
        </div>

        {/* SOFT */}
        <div className="input-field">
          <label>
            <FiCpu className="label-icon" /> Soft Skills
          </label>
          <div className="select-wrapper">
            <select>
              <option>Select your soft skills</option>
              <option>Communication</option>
              <option>Leadership</option>
              <option>Problem Solving</option>
            </select>
            <FiChevronDown className="select-icon" />
          </div>
        </div>

        {/* LEVEL */}
        <div className="experience-level-container">
          <label className="level-label">Overall Experience Level</label>

          <div className="level-options-card">
            <button
              type="button"
              className={`level-btn ${level === "beginner" ? "active" : ""}`}
              onClick={() => setLevel("beginner")}
            >
              Beginner
            </button>

            <button
              type="button"
              className={`level-btn ${
                level === "intermediate" ? "active" : ""
              }`}
              onClick={() => setLevel("intermediate")}
            >
              Intermediate
            </button>

            <button
              type="button"
              className={`level-btn ${level === "advanced" ? "active" : ""}`}
              onClick={() => setLevel("advanced")}
            >
              Advanced
            </button>
          </div>
        </div>
      </div>
    </AssessmentLayout>
  );
}
