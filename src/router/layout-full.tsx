import Header from "./header";
import { Outlet } from "react-router";

export default function FullLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-6">
        <Outlet />
      </main>

      {/* 푸터 */}
      {/* <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <p className="text-center text-gray-600 text-sm">&copy; My Wod</p>
        </div>
      </footer> */}
    </div>
  );
}
