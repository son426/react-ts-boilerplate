import type { ReactNode } from "react";
import { Link } from "react-router";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 커스텀 보일러 플레이트 만들어봄</p>
      </footer>
    </div>
  );
};

export default Layout;
