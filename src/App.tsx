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

function App() {
  return (
    <Router>
      <RouteLogger />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
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

export default App;
