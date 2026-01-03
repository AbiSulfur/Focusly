# Panduan Kontribusi - Focusly Landing Page

Terima kasih atas minat Anda untuk berkontribusi pada proyek Focusly Landing Page! 

## 🚀 Cara Berkontribusi

### 1. Melaporkan Bug
- Gunakan template issue yang tersedia
- Jelaskan langkah-langkah untuk mereproduksi bug
- Sertakan screenshot jika diperlukan
- Jelaskan perilaku yang diharapkan vs yang terjadi

### 2. Mengusulkan Fitur Baru
- Jelaskan fitur yang diusulkan dengan detail
- Berikan alasan mengapa fitur ini penting
- Sertakan mockup atau wireframe jika memungkinkan
- Diskusikan dengan tim sebelum implementasi

### 3. Submit Pull Request
- Fork repository ini
- Buat branch baru untuk fitur Anda
- Buat perubahan dengan commit yang jelas
- Test perubahan di berbagai browser
- Submit pull request dengan deskripsi yang lengkap

## 🛠️ Setup Development

### Prerequisites
- Node.js (versi 14 atau lebih baru)
- Git
- Browser modern

### Langkah Setup
```bash
# Clone repository
git clone https://github.com/focusly/landing-page.git
cd focusly-landing-page

# Install dependencies (opsional)
npm install

# Jalankan development server
npm run dev
# atau
npx serve .
```

## 📁 Struktur Proyek

```
focusly-landing-page/
├── index.html          # File HTML utama
├── styles.css          # Stylesheet dengan CSS custom
├── script.js           # JavaScript untuk interaktivitas
├── README.md           # Dokumentasi proyek
├── CONTRIBUTING.md     # Panduan kontribusi
├── package.json        # Konfigurasi proyek
└── .gitignore          # File yang diabaikan Git
```

## 🎨 Panduan Desain

### Color Palette
- **Primary**: #6366f1 (Indigo)
- **Accent**: #10b981 (Emerald)
- **Text Primary**: #1e293b (Slate 800)
- **Text Secondary**: #64748b (Slate 500)
- **Background**: #ffffff (White)
- **Background Alt**: #f8fafc (Slate 50)

### Typography
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700
- **Base Size**: 16px
- **Line Height**: 1.6

### Spacing
- Menggunakan sistem spacing yang konsisten
- Spacing values: 0.25rem, 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 2rem, 2.5rem, 3rem, 4rem, 5rem, 6rem

### Border Radius
- **Small**: 0.375rem
- **Medium**: 0.5rem
- **Large**: 0.75rem
- **Extra Large**: 1rem
- **2XL**: 1.5rem

## 💻 Panduan Coding

### HTML
- Gunakan semantic HTML5 elements
- Pastikan accessibility (ARIA labels, alt text)
- Struktur yang logis dan mudah dibaca
- Validasi HTML

### CSS
- Gunakan CSS Custom Properties untuk theming
- Mobile-first approach
- BEM-like naming convention
- Optimize untuk performance

### JavaScript
- Vanilla JavaScript (no frameworks)
- ES6+ features
- Event delegation untuk performance
- Progressive enhancement

## 🧪 Testing

### Manual Testing
- Test di berbagai browser (Chrome, Firefox, Safari, Edge)
- Test responsive design di berbagai ukuran layar
- Test accessibility dengan keyboard navigation
- Test performance dengan DevTools

### Automated Testing
- Validasi HTML: `npm run validate-html`
- Validasi CSS: `npm run validate-css`
- Performance testing: Lighthouse

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

### Testing Checklist
- [ ] Mobile navigation berfungsi
- [ ] Touch targets cukup besar (min 44px)
- [ ] Text readable tanpa zoom
- [ ] Images responsive
- [ ] No horizontal scroll

## ♿ Accessibility

### WCAG Guidelines
- **Contrast Ratio**: Minimal 4.5:1 untuk text normal
- **Keyboard Navigation**: Semua interactive elements accessible
- **Screen Readers**: Semantic HTML dan ARIA labels
- **Focus Management**: Visible focus indicators

### Testing Tools
- Chrome DevTools Lighthouse
- axe DevTools
- WAVE Web Accessibility Evaluator

## 🚀 Deployment

### Production Checklist
- [ ] Minify CSS dan JavaScript
- [ ] Optimize images
- [ ] Enable compression
- [ ] Set cache headers
- [ ] Test di production environment

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 📝 Commit Guidelines

### Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- **feat**: Fitur baru
- **fix**: Bug fix
- **docs**: Dokumentasi
- **style**: Formatting, missing semicolons, etc.
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples
```
feat(hero): add animated timer mockup
fix(nav): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(css): improve button hover effects
```

## 🤝 Code Review

### Review Checklist
- [ ] Code follows style guidelines
- [ ] No console.log statements
- [ ] Proper error handling
- [ ] Performance considerations
- [ ] Accessibility compliance
- [ ] Cross-browser compatibility

### Review Process
1. Submit pull request
2. Automated checks pass
3. Code review oleh maintainer
4. Address feedback
5. Merge setelah approval

## 📞 Support

### Getting Help
- **Issues**: Gunakan GitHub Issues
- **Discussions**: Gunakan GitHub Discussions
- **Email**: hello@focusly.app

### Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

---

Terima kasih telah berkontribusi pada Focusly Landing Page! 🎉 