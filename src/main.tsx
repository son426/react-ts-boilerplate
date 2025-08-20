import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { logger } from "./services/logger.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={null} onError={logger.error}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
