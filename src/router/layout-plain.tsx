import { Outlet } from "react-router";

export default function PlainLayout() {
  return (
    <div className="flex w-full min-h-dvh bg-orange-300 bg-white">
      <main className="flex flex-col flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
}
