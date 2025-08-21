import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/not-found";
import { logger, LogId } from "./services/logger";
import { useEffect } from "react";
import Layout from "./components/layout";

export default function PageRouter() {
  return (
    <Router>
      <RouteLogger />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function RouteLogger() {
  const location = useLocation();

  useEffect(() => {
    logger.screen({
      logId: LogId.APP_SCREEN,
      params: {
        title: location.pathname,
      },
    });
  }, [location.pathname]);

  return null;
}
