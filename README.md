# 🎡 Next.js Spin the Wheel Template (Wheel of Names)

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black.svg?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)
[![Powered By](https://img.shields.io/badge/Powered%20By-SpinWheel.to-ff6b00.svg)](https://spinwheel.to)

A modern, production-ready, open-source **Spin the Wheel & Random Name Picker** web application template built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

👉 **Looking for a ready-to-use live online tool? Check out [SpinWheel.to - Free Online Wheel of Names](https://spinwheel.to)**

---

## ✨ Features

- ⚡ **Next.js 15 App Router & React 19**: Modern architecture with Server & Client components.
- 🎨 **HTML5 Canvas Wheel Engine**: High-DPI crisp rendering, smooth deceleration physics, dynamic sizing.
- 🔊 **Zero-Asset Sound Synthesizer**: Realistic ticking sound effects using the Web Audio API without external audio files.
- 🎊 **Canvas Confetti**: Lightweight particle burst on winning spin.
- 📱 **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop displays.
- 🌓 **Modern Dark Mode UI**: Styled with Tailwind CSS & Lucide icons.
- 🔍 **SEO & Schema.org JSON-LD Ready**: Pre-configured metadata, OpenGraph, `WebApplication` schema markup, robots.txt, and sitemap.

---

## 🌐 Live Spin Wheel Tools

Explore ready-made wheels on the live platform:

* 🎯 **[Spin the Wheel (Main App)](https://spinwheel.to)** - The full-featured random picker & giveaway wheel.
* 🔮 **[Yes or No Wheel](https://spinwheel.to/yes-or-no)** - Quick decision maker for 50/50 choices.
* 🍕 **[What to Eat Wheel](https://spinwheel.to/food-decider)** - Random food & lunch decider.
* 🔢 **[Random Number Spinner](https://spinwheel.to/random-number)** - Number generator for raffles.
* 🎨 **[Color Wheel Picker](https://spinwheel.to/color-wheel)** - Random color selector for creatives.

---

## 🛠️ Project Structure

```text
nextjs-spin-wheel/
├── app/
│   ├── layout.tsx         # Root layout with Schema.org & Meta
│   ├── page.tsx           # Main interactive wheel page
│   ├── yes-or-no/         # Yes/No decision wheel route
│   ├── what-to-eat/       # Food decider route
│   ├── random-number/     # Number picker route
│   ├── robots.ts          # Robots configuration
│   └── sitemap.ts         # Sitemap generator
├── components/
│   ├── layout/            # Header, Footer components
│   └── wheel/             # CanvasWheel, WheelControls, WinnerDialog
├── lib/
│   ├── audio.ts           # Web Audio API tick synthesizer
│   ├── confetti.ts        # Particle confetti generator
│   └── presets.ts         # Pre-configured templates
├── next.config.ts         # Next.js config
├── tailwind.config.ts     # Tailwind styling
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/spinwheel-to/nextjs-spin-wheel.git
cd nextjs-spin-wheel
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📦 One-Click Deployment

Deploy your own instance easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/spinwheel-to/nextjs-spin-wheel)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

Built with ❤️ by the team at **[SpinWheel.to](https://spinwheel.to)**.
