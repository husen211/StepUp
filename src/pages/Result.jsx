import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import DashboardContent from "../components/result/DashboardContent.jsx";
import "../styles/result/result.css";

export default function Result() {
  return (
    <div className="result-page">
      <Navbar />

      <main className="result-main">
        <DashboardContent />
      </main>

      <Footer />
    </div>
  );
}
