import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="bg-red-200 w-full h-500">
      <h1>About</h1>
      <p>This is the about page of your application.</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default AboutPage;
