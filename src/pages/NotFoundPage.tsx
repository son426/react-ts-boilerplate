import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="bg-red-200 w-full h-500">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <nav>
        <Link to="/">Go Home</Link>
      </nav>
    </div>
  );
};

export default NotFoundPage;
