**Kelompok CC26-PSU280 :**
1. CDCC319D6X0420 - Ester Paulina Butar-Butar - Data Science 
2. CDCC319D6X0973 - Joyceline Octavia L. Tobing - Data Science 
3. CACC319D6X0492 - Najmiyatul Nabilah Lubis - AI Engineer 
4. CACC319D6X2479 - Valencia Browlim - AI Engineer 
5. CFCC005D6Y2172 - Husein - FullStack Web Developer 
6. CFCC454D6X1065 - Elis Safika - FullStack Web Developer
   
**Deskripsi Project**
Project ini dibuat berdasarkan tugas akhir dari Student Independet oleh Coding Camp 2026 powered by DBS Foundation
sebagai bentuk implementasi dari ilmu yang diberikan selama melakukan pembelajaran secara online

**Latar Belakang**
Perkembangan dunia industri yang semakin cepat menuntut mahasiswa dan fresh graduate untuk memiliki keterampilan yang relevan dengan kebutuhan kerja saat ini. Namun, masih banyak mahasiswa yang mengalami kebingungan dalam menentukan arah karier, memahami kemampuan diri, serta mengetahui skill yang perlu dikembangkan agar sesuai dengan kebutuhan industri. StepUp hadir sebagai platform berbasis AI yang membantu pengguna memahami profil kemampuan mereka melalui Assessment Form.


**Tujuan Project**
Project ini bertujuan untuk membantu mahasiswa dan fresh graduate dalam mempersiapkan diri menghadapi dunia kerja melalui sistem rekomendasi karier berbasis AI. Selain itu, project ini juga bertujuan memberikan analisis skill gap, rekomendasi learning path, serta membantu pengguna memahami kompetensi yang perlu ditingkatkan agar lebih siap dan kompetitif di dunia industri.

**Permasalahan yang Diselesaikan**
Project ini dikembangkan untuk menyelesaikan beberapa permasalahan utama, seperti kebingungan mahasiswa dalam menentukan jalur karier, kurangnya pemahaman terhadap kemampuan diri, tidak adanya panduan pengembangan skill yang terarah, serta minimnya platform karier yang mampu memberikan analisis skill dan skill gap secara personal.

**Fitur Utama**
StepUp memiliki beberapa fitur utama, antara lain analisis inputan pengguna, identifikasi skill pengguna, skill gap analysis, career matching berbasis AI dengan memberikan 3 rekomendasi karier yang disesuaikan inputan pengguna dan kebutuhan industri saat ini.

**Teknologi yang Digunakan**
1. **Python** → Digunakan untuk pengolahan data, pengembangan AI, dan proses machine learning.
2. **Scikit-learn** → Digunakan untuk membangun model machine learning dan sistem rekomendasi karier.
3. **Pandas** → Digunakan untuk manipulasi, pembersihan, dan analisis dataset.
4. **React & Vite** → Digunakan untuk membangun antarmuka pengguna (Frontend) yang interaktif dan cepat.
5. **Node.js & Express** → Digunakan sebagai server Backend untuk mengelola API dan logika bisnis.
6. **MongoDB** → Digunakan sebagai sistem database NoSQL untuk menyimpan data pengguna dan riwayat assessment.


**Struktur Project**
1. Frontend 
2. Backend 
3. AI/ML Module 
4. Database 
5. feature 
6. Deployment & Configuration 

**Dataset**
Link dataset : https://www.kaggle.com/datasets/trendcart/resume-dataset	


**Cara Penggunaan Website & Setup Environment Lokal**

Untuk menjalankan project StepUp secara lokal (di komputer Anda), silakan ikuti langkah-langkah berikut:

**1. Clone Repository**
```bash
git clone https://github.com/EsterButar-Butar/StepUp.git
cd StepUp
```

**2. Setup Backend**
Buka terminal baru dan jalankan perintah berikut:
```bash
cd backend
npm install
```
Buat file `.env` di dalam folder `backend` dan isi dengan konfigurasi berikut (sesuaikan kredensial MongoDB Anda):
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/stepup
JWT_SECRET=rahasia_jwt_anda
CORS_ORIGIN=http://localhost:5173
AI_API_URL=https://nnajmi-stepup-career.hf.space/predict
```
Jalankan server Backend:
```bash
npm run dev
```

**3. Setup Frontend**
Buka terminal baru dan jalankan perintah berikut:
```bash
cd frontend
npm install
```
Buat file `.env` di dalam folder `frontend` dan isi dengan konfigurasi berikut:
```env
VITE_API_URL=http://localhost:5000/api
```
Jalankan aplikasi Frontend:
```bash
npm run dev
```
Aplikasi Frontend sekarang dapat diakses melalui browser di `http://localhost:5173`.
**Hasil dan Evaluasi**

**Deployment**
Aplikasi StepUp telah berhasil di-deploy dan dapat digunakan secara publik melalui tautan resmi berikut:
- 🌐 **Website Utama (Frontend):** https://stepupcareer.id
- ⚙️ **API Server (Backend):** https://api.stepupcareer.id
- 🧠 **AI Endpoint (Hugging Face):** https://nnajmi-stepup-career.hf.space
**Lisensi**
