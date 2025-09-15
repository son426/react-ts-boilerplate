import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { ErrorBoundary } from "react-error-boundary";
import { logger } from "./services/logger.ts";
import { RouterProvider } from "react-router";
import { pageRouter } from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={null} onError={logger.error}>
      <RouterProvider router={pageRouter} />
    </ErrorBoundary>
  </StrictMode>
);
