import { logger, LogId } from "@/services/logger";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

export default function RootLayout() {
  return (
    <>
      <RouteLogger />
      <Outlet />
    </>
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
