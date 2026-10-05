# POWERHOUSE × OS CODE | Core Team Recruitment

Recruitment & Selection portal for the **OS Code Core Team** at **East Point College of Engineering and Technology** (Department of IoT & Cybersecurity), presented in collaboration with **POWERHOUSE Tech**.

- **Agency Website**: [https://powerhouse-tech.site/](https://powerhouse-tech.site/)
- **Live Recruitment Portal**: Powered by Cloudflare Pages & Web3Forms

---

## ⚡ Available Core Team Domains
- **Technical & Dev Team**: Full-stack web development, AI integration, infrastructure, and technical workshop execution.
- **Social Media & Content Creation**: Visual design, video editing, social media management, brand storytelling.
- **Marketing & Outreach**: Campus PR, cross-college partnerships, sponsorship outreach, and event marketing.
- **Event Management & Operations**: Hackathon coordination, logistics, tech symposiums, speaker hosting.

---

## 🛠️ Tech Stack & Architecture
- **Markup & Layout**: Semantic HTML5 with accessibility best practices.
- **Styling**: Tailwind CSS v4 design system with custom brand tokens, dark mode `#050505`, custom noise textures, and Anton/Inter typography.
- **Form Handling**: Direct asynchronous form dispatch via Web3Forms API with Cloudflare Pages Functions proxy support (`/api/recruitment`).
- **Icons**: Iconify Lucide & MDI collections.

---

## 🚀 Development & Build

### Install Dependencies
```bash
npm install
```

### Build CSS & Production Dist
```bash
npm run build
```
This runs Tailwind CSS compilation (`tailwindcss -i src/input.css -o src/style.css --minify`) and executes `build.js` to assemble static assets with environment injection into `dist/`.

---

## 📄 License
© 2026 POWERHOUSE × OS CODE. All rights reserved.
