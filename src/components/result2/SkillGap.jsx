import {
  FiCheckCircle,
  FiTrendingUp,
  FiAlertCircle,
  FiLayers,
} from "react-icons/fi";
import "../../styles/result2/skillgap.css";
import PromoCard from "./PromoCard";

export default function SkillGap() {
  const skillsHave = [
    "Python",
    "Java",
    "Data Structures",
    "SQL",
    "Problem Solving",
  ];
  const skillsImprove = [
    { name: "System Design", level: "Intermediate", progress: 60 },
    { name: "React.js", level: "Beginner", progress: 30 },
  ];
  const missingSkills = ["AWS / Cloud", "Docker", "CI/CD Pipelines"];

  return (
    <div className="rcs-container">
      {/* HEADER */}
      <div className="rcs-header">
        <FiLayers className="rcs-header-icon" />
        <div className="rcs-header-text">
          <h3>Skill Gap Analysis</h3>
          <p>Highly recommended for your matched careers.</p>
        </div>
      </div>

      <div className="rcs-body">
        {/* SKILLS YOU HAVE */}
        <div className="rcs-section">
          <h4 className="rcs-section-title success">
            <FiCheckCircle /> Skills You Have
          </h4>
          <div className="rcs-tag-container">
            {skillsHave.map((skill, i) => (
              <span key={i} className="rcs-tag success">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* SKILLS TO IMPROVE */}
        <div className="rcs-section">
          <h4 className="rcs-section-title warning">
            <FiTrendingUp /> Skills to Improve
          </h4>
          {skillsImprove.map((item, i) => (
            <div key={i} className="rcs-progress-item">
              <div className="rcs-progress-info">
                <span className="name">{item.name}</span>
                <span className="level">{item.level}</span>
              </div>
              <div className="rcs-progress-bg">
                <div
                  className="rcs-progress-fill"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* MISSING SKILLS */}
        <div className="rcs-section">
          <h4 className="rcs-section-title danger">
            <FiAlertCircle /> Missing Skills
          </h4>
          <div className="rcs-tag-container">
            {missingSkills.map((skill, i) => (
              <span key={i} className="rcs-tag danger">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
