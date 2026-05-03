import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dashboard utama
import Dashboard from "../components/result2/Dashboard";

// styles
import "../styles/result2/dashboard.css";

export default function Result2() {
  return (
    <div className="result2-page">
      <Navbar />

      <main className="result2-main">
        <Dashboard />
      </main>

      <Footer />
    </div>
  );
}
