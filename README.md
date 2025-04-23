# next-js-app-template

![Next.js Logo](https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg#animated)

> ⚡ A highly composable, fully-featured Next.js 15 app template with TypeScript, TailwindCSS 4, ShadCN UI, and full modern tooling.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://next-js-app-template.vercel.app)
[![Framework](https://img.shields.io/badge/Next.js-15.3.1-black?logo=next.js)](https://nextjs.org)

---

## ✨ Features

- ✅ Next.js 15 (App Router, Server Actions)
- 🎨 Tailwind CSS 4 + `tailwind-merge` and `clsx`
- 🧩 ShadCN UI (radix-powered components)
- 🌀 Framer Motion animations
- 🔐 TypeScript 5.8 for strong typing
- ⚙️ ESLint, Prettier, and Stylelint configured
- 🌐 SEO-ready Head, optimized fonts, and structured layout
- 🪝 Zustand state management

---

## 📦 Tech Stack

| Technology         | Version    | Purpose                                |
|-------------------|------------|----------------------------------------|
| Next.js           | 15.3.1     | React Framework w/ SSR, ISR, etc.     |
| React             | 19.1.0     | Core UI rendering engine               |
| TypeScript        | 5.8.3      | Static typing                          |
| TailwindCSS       | 4.1.4      | Utility-first CSS                      |
| ShadCN UI         | latest     | Component system w/ Radix Primitives  |
| Zustand           | 5.0.3      | Global state management                |
| Lucide-react      | 0.503.0    | Icon system                            |
| Framer Motion     | 12.7.4     | Animation library                      |
| ESLint / Prettier | latest     | Code linting + formatting              |

---

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and start hacking.

---

## 🧠 File Structure Overview

```sh
.
├── app/              # App Router directory
│   └── layout.tsx    # Root layout with providers
│   └── page.tsx      # Home page
├── components/       # Reusable UI components
├── lib/              # Utility functions and hooks
├── public/           # Static assets
├── styles/           # Tailwind base styles
└── tsconfig.json     # TypeScript config
```

---

## 📐 Visual Layout Diagram

```txt
┌─────────────────────────────────────┐
│          App Shell (Layout)        │
│ ┌────────────┐  ┌────────────────┐ │
│ │ Navigation │  │     Page       │ │
│ │  (Header)  │  │    Content     │ │
│ └────────────┘  └────────────────┘ │
│        Footer (if applicable)      │
└─────────────────────────────────────┘
```

---

## 🧪 Lint & Format

```bash
pnpm lint
pnpm format
```

---

## 📤 Deployment

This template is optimized for deployment on [Vercel](https://vercel.com).

---

## 🙌 Credits

- [ShadCN UI](https://ui.shadcn.com/)
- [Vercel](https://vercel.com)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📝 License

MIT © [Andrew Voirol](https://github.com/AndrewVoirol)

