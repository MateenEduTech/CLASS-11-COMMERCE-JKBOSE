# JKBOSE Class 11 Business Studies App
**Author: Mateen Yousuf | Teacher, School Education Department, J&K**

## 📁 File Structure
```
jkbose-class11-business-app/
├── index.html          ← Main app (all HTML + CSS + JS)
├── manifest.json       ← PWA manifest
├── service-worker.js   ← Offline caching
├── author.jpg          ← Author photo (add your own)
└── README.md
```

## ▶️ How to Run Locally

### Option 1: Direct Browser (Simplest)
1. Double-click `index.html` to open in browser
2. App runs fully offline (no internet needed for content)
3. Some PWA features require a server

### Option 2: VS Code Live Server (Recommended)
1. Install VS Code: https://code.visualstudio.com
2. Install extension: **Live Server** by Ritwick Dey
3. Right-click `index.html` → "Open with Live Server"
4. App opens at http://127.0.0.1:5500

### Option 3: Python Local Server
```bash
cd jkbose-class11-business-app
python -m http.server 8000
# Open http://localhost:8000
```

---

## 🌐 How to Host for Free

### GitHub Pages (Free)
1. Create account at https://github.com
2. New repository → Upload all files
3. Settings → Pages → Source: main branch
4. App live at: `https://yourusername.github.io/repo-name`

### Netlify (Free, Easiest)
1. Go to https://netlify.com
2. Drag-and-drop the entire folder onto Netlify dashboard
3. App goes live instantly with a public URL

### Cloudflare Pages (Free)
1. Go to https://pages.cloudflare.com
2. Connect GitHub repo OR upload files
3. Free global CDN hosting

---

## 📱 How to Convert to APK (Android App)

### Method 1: PWA Builder (Easiest)
1. Host app on Netlify/GitHub Pages (get a URL)
2. Go to https://www.pwabuilder.com
3. Enter your app URL
4. Click "Build" → Select Android
5. Download the APK/AAB file

### Method 2: Trusted Web Activity (TWA)
1. Use Bubblewrap: https://github.com/GoogleChromeLabs/bubblewrap
2. Run: `bubblewrap init --manifest https://yoursite.com/manifest.json`
3. Build AAB: `bubblewrap build`

---

## 📲 Upload to Google Play Store

1. Create Google Play Developer account ($25 one-time fee)
2. Go to https://play.google.com/console
3. Create new app → Upload your AAB file
4. Fill in app details:
   - App name: "Class 11 Business Studies"
   - Description: JKBOSE curriculum app
   - Category: Education
5. Add screenshots (take from phone browser)
6. Submit for review (takes 2-7 days)

---

## ✅ App Features
- ✅ 10 Complete Chapters (JKBOSE Class 11)
- ✅ Concept explanations per chapter
- ✅ Real business case studies (Tata, Infosys, Amul, Flipkart, etc.)
- ✅ SVG diagrams and flowcharts
- ✅ Quiz engine (MCQ + Case-based + Assertion-Reason)
- ✅ 5 Interactive business simulations
- ✅ Progress tracking with LocalStorage
- ✅ Works offline (Service Worker)
- ✅ Installable as Android/iOS app
- ✅ NEP 2020 / NCERT aligned content

---

**Developed for JKBOSE Class 11 students**  
*School Education Department, Jammu & Kashmir*
