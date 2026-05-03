import { FiCheck, FiAlertTriangle, FiLayers } from "react-icons/fi";
import "../../styles/result/skillgap.css";

export default function SkillGap() {
  const skillsHave = [
    { title: "HTML5 & CSS3", level: "Advanced proficiency" },
    { title: "JavaScript (ES6+)", level: "Intermediate proficiency" },
    { title: "Responsive Design", level: "Intermediate proficiency" },
  ];

  const skillsImprove = [
    { title: "React.js Framework", desc: "Core requirement for most roles" },
    { title: "State Management (Redux)", desc: "Important secondary skill" },
    { title: "API Integration", desc: "Basic knowledge needed" },
  ];

  return (
    <div className="sg-container">
      {/* HEADER */}
      <div className="sg-header">
        <div className="sg-header-icon">
          <FiLayers size={20} color="#475569" />
        </div>
        <div className="sg-header-text">
          <h3>Skill Gap Analysis</h3>
          <p>Based on your top match: Frontend Developer</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="sg-grid">
        {/* LEFT COLUMN: SKILLS YOU HAVE */}
        <div className="sg-column">
          <h4 className="sg-column-title success">
            <span className="sg-dot success">●</span> SKILLS YOU HAVE
          </h4>
          <div className="sg-list">
            {skillsHave.map((item, index) => (
              <div key={index} className="sg-item-plain">
                <div className="sg-icon-circle success">
                  <FiCheck size={14} />
                </div>
                <div className="sg-item-info">
                  <p className="sg-item-name">{item.title}</p>
                  <span className="sg-item-sub">{item.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: SKILLS TO IMPROVE */}
        <div className="sg-column">
          <h4 className="sg-column-title warning">
            <span className="sg-dot warning">●</span> SKILLS TO IMPROVE
          </h4>
          <div className="sg-list">
            {skillsImprove.map((item, index) => (
              <div key={index} className="sg-card-warning">
                <div className="sg-card-left">
                  <div className="sg-icon-circle warning">
                    <FiAlertTriangle size={14} />
                  </div>
                  <div className="sg-item-info">
                    <p className="sg-item-name">{item.title}</p>
                    <span className="sg-item-sub">{item.desc}</span>
                  </div>
                </div>
                <button className="sg-btn-learn">Learn</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
