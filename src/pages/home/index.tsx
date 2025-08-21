import Button from "@/components/ui/button";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="bg-red-200 w-full h-500">
      <h1>보일러 플레이트지롱</h1>
      <Button variant="secondary" onClick={() => console.log("!!")}>
        테스트
      </Button>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default HomePage;
