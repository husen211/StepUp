import { FiBookOpen } from "react-icons/fi";
import "../../styles/result2/promocard.css";

export default function PromoCard() {
  return (
    <>
      {/* Garis Divider Pink di Atas Kartu */}
      <div className="promo-divider-line" />

      <div className="promo-card">
        {/* Latar Belakang Ikon Samar (Topi Wisuda) */}
        <div className="promo-bg-icon">
          {/* Menggunakan FiBookOpen sebagai representasi topi/buku wisuda */}
          <FiBookOpen size={160} />
        </div>

        {/* Content (Teks diatur ke Kiri) */}
        <div className="promo-content">
          <h3 className="promo-title">Need help filling gaps?</h3>

          <p className="promo-desc">
            Explore targeted mini-courses designed for university students to
            quickly learn missing industry skills.
          </p>
        </div>

        {/* Tombol Besar */}
        <button className="promo-btn">Browse Resources</button>
      </div>
    </>
  );
}
