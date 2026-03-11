# 🌍 Gempain - Laporan Gempa Terkini

Gempain adalah aplikasi web visualisasi informasi gempa bumi terkini di Indonesia. Aplikasi ini menarik data secara *real-time* dari public API Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) dan menyajikannya dalam antarmuka yang modern, premium, dan mudah dipahami.

Project ini juga dibuat untuk memenuhi tugas mata kuliah **Pemrograman Fungsional** dengan menerapkan konsep *High Order Function* dalam memanipulasi data JSON dari web service.

![UI Preview](https://i.imgur.com/example-screenshot-placeholder.png) *(Preview of the UI)*

---

## ✨ Fitur Utama

- **Data Real-Time**: Terintegrasi langsung dengan API BMKG (`gempaterkini.json`).
- **Premium Dark UI**: Antarmuka modern dengan gaya *glassmorphism*, *mesh gradients*, dan elemen interaktif.
- **Visualisasi Data**: Menampilkan statistik dan chart interaktif (Distribusi Magnitude, Wilayah, Kedalaman) menggunakan *Chart.js*.
- **High Order Function Filter**: Menggunakan manipulasi *functional programming* (Python) untuk memfilter gempa dengan magnitude berbahaya (≥ 5.5).
- **Responsive Design**: Tampilan yang optimal baik di Desktop maupun Mobile.

---

## 🛠️ Teknologi yang Digunakan

- **Backend**: Python 3, Flask
- **Frontend**: HTML5, Vanilla CSS, JavaScript, Bootstrap 5
- **Visualisasi**: Chart.js
- **Data Source**: [BMKG Open Data API](https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json)
- **Avatars**: DiceBear API / Static Assets

---

## 🚀 Cara Instalasi & Menjalankan Aplikasi

Pastikan Anda sudah menginstal **Python 3.x** di sistem Anda.

1. **Clone Repository (Opsional jika kode sudah ada)**
   ```bash
   git clone <url-repository>
   cd TUBES-PEMFUNG
   ```

2. **Buat dan Aktifkan Virtual Environment (Sangat Disarankan)**
   - **Windows:**
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
   - **Mac/Linux:**
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. **Install Dependencies**
   Pastikan Anda menginstal Flask:
   ```bash
   pip install flask
   ```

4. **Jalankan Aplikasi**
   Jalankan file utama aplikasi Flask:
   ```bash
   python run.py
   ```
   Atau jika menggunakan command Flask langsung:
   ```bash
   set FLASK_APP=run.py
   flask run
   ```

5. **Akses di Browser**
   Buka browser dan akses alamat berikut:
   `http://127.0.0.1:5000`

---

## 📂 Struktur Direktori

```text
TUBES-PEMFUNG/
├── run.py                 # File entry point untuk menjalankan server Flask
├── web_flask/
│   ├── __init__.py        # Inisialisasi Flask app
│   ├── routes.py          # Logika routing, fetching API, dan manipulasi (High Order Function)
│   ├── static/            # Asset statis: main.css, main.js, dan folder /images
│   └── templates/         # File HTML (Jinja2 Templates): layout, index, home, graphic, about
└── README.md              # Dokumentasi proyek
```

---

## ⚠️ Catatan Penting
Pada beberapa kasus tertentu atau koneksi jaringan spesifik, API BMKG (`https://data.bmkg.go.id/...`) mungkin memblokir *request* yang tidak menyertakan *User-Agent* standar browser (ditandai dengan API *Forbidden*). Di dalam aplikasi (`routes.py`), kami telah menambahkan header *User-Agent* agar sistem dapat melewati proteksi standar ini. Jika masih terkendala, pastikan koneksi internet Anda stabil dan tidak diblokir oleh firewall institusi.
