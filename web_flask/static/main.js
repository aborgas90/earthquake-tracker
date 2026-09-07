// ===== Internationalization (i18n) Dictionary =====
const translations = {
    id: {
        // Nav & Footer
        'nav.home': 'Beranda',
        'nav.data': 'Data Gempa',
        'nav.map': 'Peta Gempa',
        'nav.graphic': 'Grafik',
        'nav.about': 'Tentang',
        'footer.text': '© 2026 Gempain — Tugas Besar Pemrograman Fungsional',
        'lang.btn': '🇮🇩 ID',

        // Index / Home hero
        'hero.title_pre': 'Informasi',
        'hero.title_gradient': 'Gempa Bumi',
        'hero.title_post': 'Terkini',
        'hero.desc': 'Pantau data gempa bumi terkini di Indonesia secara real-time dari Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) dengan visualisasi yang informatif',
        'hero.btn_data': 'Lihat Data Gempa',
        'hero.btn_map': 'Peta Koordinat',
        'feature.realtime.title': 'Data Real-Time',
        'feature.realtime.desc': 'Data gempa langsung dari API resmi BMKG yang selalu ter-update',
        'feature.map.title': 'Peta Koordinat',
        'feature.map.desc': 'Pemetaan koordinat episenter di peta interaktif dengan filter magnitude',
        'feature.filter.title': 'Filter Magnitude',
        'feature.filter.desc': 'Lihat gempa yang berpotensi berbahaya dengan filter magnitude ≥ 5.5',
        'feature.graphic.title': 'Visualisasi Grafik',
        'feature.graphic.desc': 'Grafik dan chart interaktif untuk memahami pola gempa dengan mudah',

        // Common Stats
        'stat.total_quakes': 'Total Gempa',
        'stat.mapped_coords': 'Titik Koordinat Dipetakan',
        'stat.max_mag': 'Magnitude Tertinggi',
        'stat.high_risk': 'Gempa Berbahaya (≥ 5.5 M)',
        'stat.high_risk_short': 'Gempa ≥ 5.5 M',

        // Map Page
        'map.page_title': 'Peta Koordinat Gempa Bumi',
        'map.page_desc': 'Visualisasi geografis titik pusat gempa (episenter) terkini di seluruh wilayah Indonesia berdasarkan koordinat resmi BMKG (100% Peta Gratis)',
        'map.section_title': 'Peta Sebaran Episenter',
        'map.basemap_label': 'Tipe Peta:',
        'map.basemap_osm': 'OpenStreetMap (Gratis & Bebas Watermark)',
        'map.basemap_dark': 'OSM Dark Mode (Bebas Watermark)',
        'map.basemap_topo': 'Topografi (OpenTopoMap)',
        'map.reset_btn': 'Reset Tampilan',
        'map.filter_label': 'Filter Magnitude:',
        'map.filter_all': 'Semua',
        'map.search_placeholder': 'Cari wilayah di peta...',
        'map.legend_minor': '< 5.0 M (Ringan)',
        'map.legend_moderate': '5.0 - 5.4 M (Sedang)',
        'map.legend_strong': '5.5 - 5.9 M (Kuat)',
        'map.legend_major': '≥ 6.0 M (Sangat Kuat / Kritis)',
        'map.legend_hint': 'Klik marker atau kartu untuk melihat detail & navigasi episenter',
        'map.list_title': 'Daftar Koordinat Episenter',
        'map.points_detected': 'Titik Terdeteksi',
        'map.focus_btn': 'Lihat di Peta',
        'map.zoom_epicenter': 'Zoom Episenter',
        'map.source_credit': 'Sumber: BMKG TEWS',

        // Data / Home Page
        'data.page_title': 'Laporan Gempa Terkini',
        'data.page_desc': 'Data gempa bumi terbaru dari BMKG Indonesia',
        'data.preview_map_title': 'Peta Koordinat Episenter',
        'data.btn_fullscreen_map': 'Peta Layar Penuh',
        'data.map_click_hint': 'Klik ikon peta pada tabel di bawah untuk melihat titik gempa',
        'data.all_quakes_title': 'Semua Data Gempa',
        'data.filter_quakes_title': 'Gempa Magnitude ≥ 5.5 (Berpotensi Berbahaya)',
        'data.search_placeholder': 'Cari wilayah...',
        'th.no': 'No',
        'th.date': 'Tanggal',
        'th.time': 'Jam',
        'th.coords': 'Koordinat',
        'th.lat': 'Lintang',
        'th.lng': 'Bujur',
        'th.magnitude': 'Magnitude',
        'th.depth': 'Kedalaman',
        'th.region': 'Wilayah',
        'th.potential': 'Potensi',
        'th.map': 'Peta',
        'table.empty': 'Data gempa tidak tersedia saat ini',
        'table.filter_empty': 'Tidak ada gempa dengan magnitude ≥ 5.5 saat ini',

        // Graphic Page
        'graphic.page_title': 'Visualisasi Data Gempa',
        'graphic.page_desc': 'Analisis dan grafik visual distribusi gempa bumi terkini dari BMKG',
        'graphic.mag_dist': 'Distribusi Magnitude',
        'graphic.region_top': 'Gempa per Wilayah (Top 8)',
        'graphic.depth_dist': 'Distribusi Kedalaman',
        'graphic.tsunami_pot': 'Potensi Tsunami',
        'graphic.timeline_title': 'Tren Urutan Aktivitas Seismik',
        'graphic.timeline_desc': 'Grafik kronologis kekuatan gempa terkini dari waktu ke waktu',
        'graphic.insight_avg_mag': 'Rata-rata Magnitude',
        'graphic.insight_avg_sub': 'Kekuatan getaran tipikal',
        'graphic.insight_shallow': 'Gempa Dangkal (≤ 70 km)',
        'graphic.insight_shallow_sub': 'Paling terasa di permukaan',
        'graphic.insight_safe': 'Aman dari Tsunami',
        'graphic.insight_safe_sub': 'Tidak memicu gelombang tsunami',
        'graphic.insight_top_region': 'Wilayah Teraktif',
        'graphic.insight_top_sub': 'Frekuensi gempa tertinggi',
        'graphic.hint_mag': 'Gempa < 5.0 M tergolong ringan, 5.0 - 5.9 M sedang/kuat, dan ≥ 6.0 M berpotensi merusak infrastruktur.',
        'graphic.hint_depth': 'Gempa dangkal (0 - 70 km) berpotensi menimbulkan guncangan permukaan lebih intensif dibanding gempa dalam.',
        'graphic.hint_region': '8 wilayah kepulauan dengan akumulasi kejadian gempa terbanyak dalam catatan data terkini.',
        'graphic.hint_tsunami': 'Status peringatan dini tsunami ditentukan otomatis oleh sistem BMKG TEWS.',
        'graphic.btn_download': 'Unduh Grafik (PNG)',

        // About Page
        'about.page_title': 'Tentang Kami',
        'about.page_desc': 'Tim pengembang aplikasi Gempain',
        'about.project_desc': 'Gempain dibuat untuk memenuhi tugas mata kuliah Pemrograman Fungsional dengan menerapkan High Order Function dan Web Service menggunakan JSON pada program Python dengan menggunakan data real dari BMKG.'
    },
    en: {
        // Nav & Footer
        'nav.home': 'Home',
        'nav.data': 'Earthquake Data',
        'nav.map': 'Earthquake Map',
        'nav.graphic': 'Charts & Stats',
        'nav.about': 'About Us',
        'footer.text': '© 2026 Gempain — Functional Programming Final Project',
        'lang.btn': '🇬🇧 EN',

        // Index / Home hero
        'hero.title_pre': 'Latest',
        'hero.title_gradient': 'Earthquake',
        'hero.title_post': 'Information',
        'hero.desc': 'Monitor recent Indonesian earthquake data in real-time from the Meteorology, Climatology, and Geophysical Agency (BMKG) with intuitive visualizations',
        'hero.btn_data': 'View Earthquake Data',
        'hero.btn_map': 'Coordinate Map',
        'feature.realtime.title': 'Real-Time Data',
        'feature.realtime.desc': 'Directly connected to BMKG official API with automatic live updates',
        'feature.map.title': 'Coordinate Map',
        'feature.map.desc': 'Interactive geographical epicenter plotting with real-time magnitude filters',
        'feature.filter.title': 'Magnitude Filter',
        'feature.filter.desc': 'Quickly identify hazardous earthquakes with magnitude ≥ 5.5',
        'feature.graphic.title': 'Graphic Visualizations',
        'feature.graphic.desc': 'Interactive charts to easily explore seismic distributions and patterns',

        // Common Stats
        'stat.total_quakes': 'Total Earthquakes',
        'stat.mapped_coords': 'Mapped Epicenter Points',
        'stat.max_mag': 'Highest Magnitude',
        'stat.high_risk': 'Hazardous Quakes (≥ 5.5 M)',
        'stat.high_risk_short': 'Quakes ≥ 5.5 M',

        // Map Page
        'map.page_title': 'Earthquake Coordinate Map',
        'map.page_desc': 'Geographical epicenter mapping of recent earthquakes across Indonesia using official BMKG coordinates (100% Free Open Map)',
        'map.section_title': 'Epicenter Distribution Map',
        'map.basemap_label': 'Map Type:',
        'map.basemap_osm': 'OpenStreetMap (Free & Watermark-Free)',
        'map.basemap_dark': 'OSM Dark Mode (Watermark-Free)',
        'map.basemap_topo': 'Topography (OpenTopoMap)',
        'map.reset_btn': 'Reset View',
        'map.filter_label': 'Magnitude Filter:',
        'map.filter_all': 'All',
        'map.search_placeholder': 'Search region on map...',
        'map.legend_minor': '< 5.0 M (Minor)',
        'map.legend_moderate': '5.0 - 5.4 M (Moderate)',
        'map.legend_strong': '5.5 - 5.9 M (Strong)',
        'map.legend_major': '≥ 6.0 M (Major / Critical)',
        'map.legend_hint': 'Click a marker or card to inspect details & navigate to epicenter',
        'map.list_title': 'Epicenter Coordinates List',
        'map.points_detected': 'Points Detected',
        'map.focus_btn': 'View on Map',
        'map.zoom_epicenter': 'Zoom to Epicenter',
        'map.source_credit': 'Source: BMKG TEWS',

        // Data / Home Page
        'data.page_title': 'Latest Earthquake Reports',
        'data.page_desc': 'Real-time seismic data from BMKG Indonesia',
        'data.preview_map_title': 'Epicenter Coordinate Map',
        'data.btn_fullscreen_map': 'Fullscreen Map',
        'data.map_click_hint': 'Click the map icon on any table row below to locate the earthquake',
        'data.all_quakes_title': 'All Earthquake Data',
        'data.filter_quakes_title': 'Earthquakes Magnitude ≥ 5.5 (Potentially Hazardous)',
        'data.search_placeholder': 'Search region...',
        'th.no': 'No',
        'th.date': 'Date',
        'th.time': 'Time',
        'th.coords': 'Coordinates',
        'th.lat': 'Latitude',
        'th.lng': 'Longitude',
        'th.magnitude': 'Magnitude',
        'th.depth': 'Depth',
        'th.region': 'Region',
        'th.potential': 'Tsunami Potential',
        'th.map': 'Map',
        'table.empty': 'Earthquake data is currently unavailable',
        'table.filter_empty': 'No earthquakes with magnitude ≥ 5.5 currently',

        // Graphic Page
        'graphic.page_title': 'Earthquake Data Visualizations',
        'graphic.page_desc': 'Visual analysis and distribution charts of recent BMKG earthquake data',
        'graphic.mag_dist': 'Magnitude Distribution',
        'graphic.region_top': 'Earthquakes by Region (Top 8)',
        'graphic.depth_dist': 'Depth Distribution',
        'graphic.tsunami_pot': 'Tsunami Potential',
        'graphic.timeline_title': 'Seismic Activity Chronological Trend',
        'graphic.timeline_desc': 'Chronological trend of earthquake magnitudes over time',
        'graphic.insight_avg_mag': 'Average Magnitude',
        'graphic.insight_avg_sub': 'Typical quake intensity',
        'graphic.insight_shallow': 'Shallow Quakes (≤ 70 km)',
        'graphic.insight_shallow_sub': 'Most felt on ground surface',
        'graphic.insight_safe': 'Safe from Tsunami',
        'graphic.insight_safe_sub': 'No tsunami waves triggered',
        'graphic.insight_top_region': 'Most Active Region',
        'graphic.insight_top_sub': 'Highest quake frequency',
        'graphic.hint_mag': 'Earthquakes < 5.0 M are minor, 5.0 - 5.9 M moderate/strong, and ≥ 6.0 M can cause structural damage.',
        'graphic.hint_depth': 'Shallow earthquakes (0 - 70 km) generally deliver stronger ground shaking than deep hypocenters.',
        'graphic.hint_region': 'Top 8 island regions with the highest concentration of seismic events in recent records.',
        'graphic.hint_tsunami': 'Tsunami alert status evaluated automatically by the BMKG TEWS modeling network.',
        'graphic.btn_download': 'Download Chart (PNG)',

        // About Page
        'about.page_title': 'About Us',
        'about.page_desc': 'Development team of Gempain application',
        'about.project_desc': 'Gempain was built to fulfill the Functional Programming coursework requirements by implementing High Order Functions and JSON Web Services in Python with real BMKG data.'
    }
};

// Download Chart as image helper
function downloadChart(chartId, filename) {
    const canvas = document.getElementById(chartId);
    if (!canvas) return;
    const imageURI = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = filename || 'chart.png';
    link.href = imageURI;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Current language state
let currentLanguage = localStorage.getItem('gempain_lang') || 'id';

function t(key) {
    const lang = currentLanguage;
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    if (translations['id'] && translations['id'][key]) {
        return translations['id'][key];
    }
    return key;
}

function setLanguage(lang) {
    currentLanguage = (lang === 'en') ? 'en' : 'id';
    localStorage.setItem('gempain_lang', currentLanguage);
    document.documentElement.lang = currentLanguage;

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });

    // Update data-i18n-html elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            el.innerHTML = translations[currentLanguage][key];
        }
    });

    // Update data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            el.setAttribute('placeholder', translations[currentLanguage][key]);
        }
    });

    // Update Language Toggle button UI
    const langBtnText = document.getElementById('langToggleText');
    if (langBtnText) {
        langBtnText.textContent = currentLanguage === 'id' ? '🇮🇩 ID' : '🇬🇧 EN';
    }

    // Trigger page-specific translation callback if present
    if (typeof onLanguageChange === 'function') {
        onLanguageChange(currentLanguage);
    }
}

function toggleLanguage() {
    setLanguage(currentLanguage === 'id' ? 'en' : 'id');
}

// ===== Active Navbar Highlighting & i18n Init =====
document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-custom .nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (path === '/') {
        document.getElementById('nav-index')?.classList.add('active');
    } else if (path === '/home') {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (path === '/map') {
        document.getElementById('nav-map')?.classList.add('active');
    } else if (path === '/graphic') {
        document.getElementById('nav-graphic')?.classList.add('active');
    } else if (path === '/about') {
        document.getElementById('nav-about')?.classList.add('active');
    }

    // Apply saved language on load
    setLanguage(currentLanguage);
});

// ===== Table Search/Filter =====
function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
}

