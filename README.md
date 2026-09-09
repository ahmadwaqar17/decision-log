# Decision Log

A production-ready React 18 + TypeScript application for recording and managing architectural decision records (ADRs), technical trade-offs, and critical project pivots.

Built with **Vite**, **Tailwind CSS**, **React Router v6**, **React Hook Form + Zod**, **TanStack Query v5**, and **Lucide Icons**.

---

## 🚀 Key Features

- **Interactive Demo Workspace (`/demo`)**: Add decisions, mark them as superseded or reactivate them, and delete entries with an accessible confirm modal.
- **Public Decision Log (`/public`)**: Read-only searchable public archive featuring debounced search (`useDebouncedValue`), status filter tabs, and skeleton loading states.
- **Client-Side LocalStorage Persistence**: LocalStorage adapter (`decisionService.ts`) with safe JSON error handling and initial seed data.
- **Accessible & Screen-Reader Ready**: Accessible action button labels (`aria-label`), keyboard focus trap on modals, visible focus rings, and `aria-live="polite"` state announcements.
- **Responsive & Reduced Motion**: Mobile-first responsive design tested down to 375px viewports (no horizontal overflow) with `prefers-reduced-motion` compliance.

---

## 🛠️ Project Structure

```text
src/
├── app/
│   └── App.tsx               # App routing & ErrorBoundary container
├── components/
│   ├── common/
│   │   └── ErrorBoundary.tsx # React Error Boundary fallback component
│   ├── decisions/
│   │   ├── ConfirmDialog.tsx # Focus-trapped accessible delete confirmation modal
│   │   ├── DecisionCard.tsx  # Memoized decision row card (supports readOnly mode)
│   │   ├── DecisionForm.tsx  # Zod-validated decision creation form
│   │   ├── EmptyState.tsx    # Contextual empty state display
│   │   └── SkeletonCard.tsx  # Animated skeleton loader placeholder
│   ├── landing/
│   │   ├── DecisionPreviewCard.tsx
│   │   ├── DecisionPreviewRow.tsx
│   │   ├── Hero.tsx
│   │   ├── MetricsSection.tsx
│   │   └── ValuePropsSection.tsx
│   ├── layout/
│   │   └── Header.tsx        # Sticky navigation header with custom action slot
│   └── ui/
│       ├── Button.tsx        # Polymorphic Button component (as={Link})
│       └── index.ts          # UI barrel export
├── context/
│   └── DecisionsContext.tsx  # Context provider for demo workspace state
├── data/
│   ├── previewDecisions.ts   # Hero preview card static data
│   └── publicDecisions.ts    # Public log static decision archive
├── hooks/
│   ├── decisionReducer.ts    # Pure decision state reducer & action union
│   ├── useDebouncedValue.ts  # Debounce hook for real-time search
│   ├── useDecisions.ts       # Main decisions state hook with localStorage sync
│   ├── useDocumentTitle.ts   # Page title manager hook
│   ├── useLocalStorage.ts   # Syncable localStorage state hook
│   └── index.ts              # Hooks barrel export
├── pages/
│   ├── DemoPage.tsx          # Interactive demo workspace route
│   ├── HomePage.tsx          # Main landing page route
│   ├── NotFoundPage.tsx      # Custom 404 page
│   ├── PublicLogPage.tsx     # Public read-only decision log route
│   └── UsersPage.tsx
├── services/
│   ├── decisionService.ts    # LocalStorage adapter (key: "decision-log:v1")
│   └── userService.ts
├── types/
│   └── index.ts              # Decision & Data interfaces
└── index.css                 # Global Tailwind CSS directives
```

---

## 🧠 State Architecture & Data Flow

1. **State Management**: Uses `useReducer` with a pure reducer function (`decisionReducer.ts`) defining explicit action types:
   - `{ type: "add"; payload: Decision }`
   - `{ type: "supersede"; id: string }`
   - `{ type: "reactivate"; id: string }`
   - `{ type: "delete"; id: string }`
   - `{ type: "set"; payload: Decision[] }`
2. **Context Provider**: `DecisionsContext.tsx` wraps the `/demo` route subtree. `useDecisionsContext()` exposes memoized actions and state, throwing an error if accessed outside the provider.
3. **Persistence**: `decisionService.ts` automatically syncs state changes to `localStorage` under key `"decision-log:v1"`.

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: >= 18.x
- **npm**: >= 9.x

### Installation

```bash
# Clone repository
git clone https://github.com/ahmadwaqar17/decision-log.git
cd decision-log

# Install dependencies
npm install
```

### Commands

| Script | Description |
|---|---|
| `npm run dev` | Start local Vite development server |
| `npm run build` | Run TypeScript check and compile production bundle |
| `npx tsc --noEmit` | Validate TypeScript types with zero output errors |
| `npm run preview` | Locally preview the compiled production build |

