import { createBrowserRouter } from "react-router";
import { AboutPage, HomePage, MyPage, NotFoundPage, TestPage } from "@/pages";
import RootLayout from "./layout-root";
import AuthLayout from "./layout-auth";
import PlainLayout from "./layout-plain";
import FullLayout from "./layout-full";

export const pageRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      // auth
      {
        id: "auth",
        element: <AuthLayout />,
        children: [
          {
            element: <FullLayout />,
            children: [{ path: "/my", element: <MyPage /> }],
          },
          {
            element: <PlainLayout />,
            children: [{ path: "/my-plain", element: <MyPage /> }],
          },
        ],
      },
      // non-auth
      {
        children: [
          {
            element: <FullLayout />,
            children: [{ path: "/", element: <HomePage /> }],
          },
          {
            element: <PlainLayout />,
            children: [
              { path: "/about", element: <AboutPage /> },
              // dev 환경에서만 TestPage
              ...(import.meta.env.DEV
                ? [{ path: "/test", element: <TestPage /> }]
                : []),
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
