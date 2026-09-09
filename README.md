# Decision Log

A production-ready React + TypeScript starter application built with Vite, Tailwind CSS, TanStack Query, React Router, Zustand, Axios, and React Hook Form + Zod.

## 🚀 Features

- **React 18 & TypeScript** - Strict type checking and modern React features.
- **Vite** - Lightning fast HMR and optimized production builds.
- **Tailwind CSS & PostCSS** - Utility-first styling system.
- **TanStack Query (React Query v5)** - Server state management and caching.
- **Zustand** - Lightweight client state management.
- **React Router v6** - Client-side routing.
- **React Hook Form + Zod** - Type-safe form validation.
- **ESLint & Prettier** - Automated code formatting and linting rules.
- **Vitest & React Testing Library** - Unit and component testing setup.

## 🛠️ Project Structure

```text
├── src/
│   ├── app/          # Core App container & provider setup
│   ├── components/   # Modular UI & Layout components
│   ├── pages/        # Route views (Home, Dashboard, Users, etc.)
│   ├── services/     # API services & Axios client setup
│   ├── types/        # TypeScript declarations and interfaces
│   ├── index.css     # Global styles & Tailwind directives
│   └── main.tsx      # Application entry point
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/ahmadwaqar17/decision-log.git
cd decision-log

# Install dependencies
npm install
```

### Development

Start the local development server with hot reload:

```bash
npm run dev
```

### Build

Compile production-ready assets into the `dist/` directory:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 📄 License

MIT
