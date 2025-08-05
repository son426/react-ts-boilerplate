import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="bg-red-200 w-full h-500">
      <h1>보일러 플레이트지롱</h1>

      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default HomePage;
