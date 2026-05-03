import "../styles/assessment-sidebar.css";
import { FiCloud } from "react-icons/fi";

const steps = [
  {
    id: 1,
    title: "Academic Profile",
    subtitle: "Major, semester, GPA",
  },
  {
    id: 2,
    title: "Skills & Interests",
    subtitle: "Technical, soft skills, level",
  },
  {
    id: 3,
    title: "Experience",
    subtitle: "Projects, internships, CV",
  },
];

export default function AssessmentSidebar({ currentStep = 1 }) {
  return (
    <aside className="assessment-sidebar">
      <h2>Assessment Form</h2>
      <p>Complete your profile to get personalized career recommendations.</p>

      <div className="steps">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`step ${currentStep === step ? "active" : ""}`}
          >
            <div className="step-number">{step}</div>
            <div>
              <div className="step-title">
                {step === 1 && "Academic Profile"}
                {step === 2 && "Skills & Interests"}
                {step === 3 && "Experience"}
              </div>
              <div className="step-desc">
                {step === 1 && "Major, semester, GPA"}
                {step === 2 && "Technical, soft skills"}
                {step === 3 && "Projects, CV"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
