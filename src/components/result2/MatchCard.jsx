import {
  FiCheckCircle,
  FiArrowRight,
  FiCode,
  FiDatabase,
  FiServer,
} from "react-icons/fi";
import "../../styles/result2/matchcard.css";

export default function MatchCard({ data }) {
  if (!data) return null;

  const getIcon = () => {
    if (data.title?.includes("Software")) return <FiCode />;
    if (data.title?.includes("Data")) return <FiDatabase />;
    return <FiServer />;
  };

  return (
    <div className="mc-card">
      {/* HEADER */}
      <div className="mc-header">
        <div className="mc-left">
          <div className="mc-icon">{getIcon()}</div>

          <div>
            <div className="mc-title-row">
              <h3>{data.title}</h3>
              <span className="mc-badge">{data.level}</span>
            </div>

            <p className="mc-desc">{data.description}</p>
          </div>
        </div>

        <div className="mc-score-box">
          <h2>{data.score}%</h2>
          <span>MATCH SCORE</span>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="mc-progress">
        <div
          className="mc-progress-fill"
          style={{ width: `${data.score}%` }}
        ></div>
      </div>

      {/* REASONS */}
      <div className="mc-reason-box">
        <p className="mc-reason-title">WHY THIS MATCHES YOU:</p>

        {data.reasons.map((item, i) => (
          <div key={i} className="mc-reason-item">
            <FiCheckCircle className="mc-check" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="mc-footer">
        <button className="mc-btn">
          View Details <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
