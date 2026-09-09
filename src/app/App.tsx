// src/app/App.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DemoPage from "../pages/DemoPage";
import PublicLogPage from "../pages/PublicLogPage";
import NotFoundPage from "../pages/NotFoundPage";
import { DecisionsProvider } from "../context/DecisionsContext";
import ErrorBoundary from "../components/common/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/demo"
          element={
            <DecisionsProvider>
              <DemoPage />
            </DecisionsProvider>
          }
        />
        <Route path="/public" element={<PublicLogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
}
