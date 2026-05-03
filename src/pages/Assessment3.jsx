// src/pages/Assessment3.jsx

import {
  FiArrowLeft,
  FiCheck,
  FiDownloadCloud,
  FiUploadCloud,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AssessmentLayout from "../layouts/AssessmentLayout";
import "../styles/assessment3.css";

export default function Assessment3() {
  const navigate = useNavigate();

  return (
    <AssessmentLayout currentStep={3}>
      {/* HEADER */}
      <div className="form-header">
        <h1>Your experience</h1>
        <p>
          Tell us about your background to help us tailor your assessment
          journey.
        </p>
      </div>

      {/* BODY */}
      <div className="form-body">
        {/* PROJECT */}
        <div className="input-group">
          <label>
            Project experience <span className="required">*</span>
          </label>
          <textarea placeholder="Describe a significant project you've worked on, your role, and the outcomes..." />
          <div className="input-info">Minimum 100 characters</div>
        </div>

        {/* INTERNSHIP */}
        <div className="input-group">
          <div className="label-row">
            <label>Internship experience</label>
            <span className="optional-badge">Optional</span>
          </div>
          <textarea placeholder="Briefly detail any relevant internships or work placements..." />
        </div>

        {/* CV */}
        <div className="cv-section">
          <h3>Curriculum Vitae (CV)</h3>

          <div className="upload-item">
            <div className="upload-info">
              <FiDownloadCloud className="upload-icon" />
              <p>Download template CV</p>
            </div>
            <button type="button" className="text-link">
              Download
            </button>
          </div>

          <div className="upload-item">
            <div className="upload-info">
              <FiUploadCloud className="upload-icon" />
              <div>
                <p>
                  Upload CV / Resume{" "}
                  <span className="text-muted">(Optional)</span>
                </p>
                <small>PDF, DOCX up to 5MB</small>
              </div>
            </div>
            <button type="button" className="text-link">
              Browse
            </button>
          </div>
        </div>

        {/* ACTION */}
        <div className="form-footer">
          <button
            type="button"
            className="btn-back"
            onClick={() => navigate("/assessment2")}
          >
            <FiArrowLeft /> Back
          </button>

          <button type="button" className="btn-submit">
            Submit Assessment <FiCheck />
          </button>
        </div>
      </div>
    </AssessmentLayout>
  );
}
