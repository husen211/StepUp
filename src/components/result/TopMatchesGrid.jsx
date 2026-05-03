import MatchCard from "./MatchCard.jsx";
import { Code2, PenTool, BarChart3 } from "lucide-react";
import "../../styles/result/topmatches.css";

export default function TopMatchesGrid() {
  const data = [
    {
      title: "Frontend Developer",
      match: 94,
      description:
        "Build user interfaces and web applications using modern frameworks..",
      readiness: "High",
      progress: 94,
      Icon: Code2,
      color: {
        bg: "#EBF2FF",
        badgeBg: "#EBF2FF",
        text: "#3B82F6",
      },
    },
    {
      title: "UX/UI Designer",
      match: 88,
      description:
        "Design intuitive digital experiences focusing on user flow, wireframing, and..",
      readiness: "Good",
      progress: 88,
      Icon: PenTool,
      color: {
        bg: "#FCE7F3",
        badgeBg: "#F3F4F6", // Abu-abu tipis sesuai gambar
        text: "#DB2777",
      },
    },
    {
      title: "Product Manager",
      match: 76,
      description:
        "Lead product strategy, coordinate between teams, and drive the product..",
      readiness: "Moderate",
      progress: 76,
      Icon: BarChart3,
      color: {
        bg: "#FFEDD5",
        badgeBg: "#F3F4F6",
        text: "#F97316",
      },
    },
  ];

  return (
    <section className="tm-grid-container">
      <div className="tm-matches-grid">
        {data.map((item, index) => (
          <MatchCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
