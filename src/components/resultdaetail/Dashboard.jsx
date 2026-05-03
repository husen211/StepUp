import Breadcrumb from "./Breadcrumb";
import CareerHeader from "./CareerHeader";
import MatchBreakdown from "./MatchBreakdown";
import SkillGap from "./SkillGap";
import LearningPath from "./LearningPath";
import IndustryBenchmark from "./IndustryBenchmark";

export default function Dashboard() {
  return (
    <div className="result-detail-container">
      <Breadcrumb />

      <CareerHeader />

      <div className="grid-2">
        <MatchBreakdown />
        <SkillGap />
      </div>

      <div className="grid-2">
        <LearningPath />
        <IndustryBenchmark />
      </div>
    </div>
  );
}

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      ← Back to Results
    </div>
  );
}
