import "../styles/logo.css";

export default function Logo({ fontSize = "20px", iconSize = "32px" }) {
  return (
    <div class="lg-wrapper">
      <div class="lg-box">
        <span class="s-char">S</span>
      </div>
      <div class="lg-text">StepUp</div>
    </div>
  );
}
