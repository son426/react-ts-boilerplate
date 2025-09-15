import { Link } from "react-router";

const MyPage = () => {
  return (
    <div className="bg-red-200 w-full h-500">
      <h1>My Page</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default MyPage;
