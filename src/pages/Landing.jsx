import Navbar from "../components/Navbar";
import Hero from "../components/landingpage/Hero";
import HowItWorks from "../components/landingpage/HowItWorks";
import Benefits from "../components/landingpage/Benefits";
import Illustration from "../components/landingpage/Illustration";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Illustration />
      <Footer />
    </>
  );
}
