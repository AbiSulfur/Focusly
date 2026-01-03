# Focusly - Landing Page

Landing page modern dan minimalis untuk aplikasi Focusly, sebuah gabungan Pomodoro Timer dan Habit Tracker.

## 🎯 Tentang Focusly

Focusly adalah aplikasi web yang menggabungkan teknik Pomodoro dengan habit tracking untuk membantu pengguna meningkatkan produktivitas dan membangun kebiasaan yang konsisten. Landing page ini dirancang dengan pendekatan minimalis, clean, dan fokus pada user experience.

## ✨ Fitur Landing Page

### 🎨 Desain
- **Minimalis & Clean**: Interface yang bersih dengan banyak whitespace
- **Color Palette Pastel**: Menggunakan warna-warna yang menenangkan dan fokus
- **Typography Modern**: Font Inter untuk readability yang optimal
- **Responsive Design**: Optimal di semua device (desktop, tablet, mobile)

### 🚀 Komponen
- **Hero Section**: Headline yang powerful dengan CTA buttons
- **App Mockup**: Visualisasi aplikasi dengan animasi interaktif
- **Features Section**: 3 keunggulan utama aplikasi
- **How It Works**: 3 langkah sederhana penggunaan
- **Testimonials**: Social proof dari pengguna
- **CTA Section**: Call-to-action yang compelling
- **Footer**: Informasi lengkap dengan social links

### 🎭 Interaktivitas
- **Smooth Scrolling**: Navigasi yang halus antar section
- **Scroll Animations**: Elemen muncul dengan animasi saat scroll
- **Hover Effects**: Feedback visual pada buttons dan cards
- **Mobile Menu**: Navigation yang responsive untuk mobile
- **Timer Animation**: Demo timer yang berjalan di mockup

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Semantic markup untuk accessibility
- **CSS3**: 
  - CSS Grid & Flexbox untuk layout
  - CSS Variables untuk theming
  - Animations & Transitions
  - Media Queries untuk responsive design
- **JavaScript (Vanilla)**: 
  - Intersection Observer API
  - Smooth scrolling
  - Mobile navigation
  - Scroll-based animations

## 📁 Struktur File

```
focusly-landing/
├── index.html          # File HTML utama
├── styles.css          # Stylesheet dengan CSS custom
├── script.js           # JavaScript untuk interaktivitas
└── README.md           # Dokumentasi proyek
```

## 🚀 Cara Menjalankan

1. **Clone atau download** semua file ke folder lokal
2. **Buka file `index.html`** di browser modern
3. **Atau gunakan live server** untuk development:
   ```bash
   # Jika menggunakan VS Code dengan Live Server extension
   # Klik kanan pada index.html -> "Open with Live Server"
   
   # Atau menggunakan Python
   python -m http.server 8000
   
   # Atau menggunakan Node.js
   npx serve .
   ```

## 🎨 Customization

### Mengubah Warna
Edit CSS variables di `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Warna utama */
    --accent-color: #10b981;     /* Warna aksen */
    --text-primary: #1e293b;     /* Warna teks utama */
    /* ... */
}
```

### Mengubah Konten
- **Text**: Edit langsung di `index.html`
- **Images**: Ganti placeholder dengan gambar asli
- **Links**: Update href untuk navigation dan social links

### Menambah Section
1. Tambahkan HTML structure di `index.html`
2. Tambahkan CSS styles di `styles.css`
3. Tambahkan JavaScript interactions di `script.js` (jika diperlukan)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🌟 Fitur Lanjutan

### Performance Optimizations
- **Debounced scroll events** untuk performa optimal
- **CSS animations** menggunakan transform dan opacity
- **Lazy loading** untuk elemen yang tidak critical

### Accessibility
- **Semantic HTML** untuk screen readers
- **Keyboard navigation** support
- **Focus management** untuk mobile menu
- **Color contrast** yang memenuhi WCAG guidelines

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎯 Target Audience

- **Pelajar**: Untuk fokus belajar dan membangun kebiasaan akademik
- **Mahasiswa**: Manajemen waktu dan produktivitas studi
- **Freelancer**: Work-life balance dan project management
- **Profesional**: Productivity improvement dan habit building

## 📈 Metrics & Analytics

Landing page siap untuk integrasi dengan:
- Google Analytics
- Hotjar untuk heatmaps
- A/B testing tools
- Conversion tracking

## 🔧 Development Notes

### CSS Architecture
- **Mobile-first approach**
- **CSS Custom Properties** untuk theming
- **BEM-like naming** untuk maintainability
- **Modular structure** untuk scalability

### JavaScript Patterns
- **Event delegation** untuk performance
- **Intersection Observer** untuk scroll animations
- **Debouncing** untuk scroll events
- **Progressive enhancement** approach

## 📞 Support

Untuk pertanyaan atau feedback tentang landing page ini, silakan hubungi:
- Email: hello@focusly.app
- Twitter: @focusly_app
- LinkedIn: Focusly

## 📄 License

Proyek ini dibuat untuk demonstrasi dan dapat digunakan untuk keperluan komersial maupun non-komersial.

---

**Focusly** - Stay Focused, Build Habits ✨ 