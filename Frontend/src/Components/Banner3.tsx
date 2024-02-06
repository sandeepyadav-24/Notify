import { Link } from "react-router-dom";

const Banner3 = () => {
  const signupUrl = "http://localhost:5173/signup";
  const loginUrl = "http://localhost:5173/login";
  return (
    <div className="mx-28 mt-20">
      <div className="flex flex-row bg-[#7671DE] rounded-lg px-10 py-10 ">
        <div className="w-1/5">
          <h1 className="font-extrabold text-xl">Social Media</h1>
          <h1 className="text-white">
            <Link to="https://github.com/sandeepyadav-24">GitHub</Link>
          </h1>
          <h1 className="text-white">
            <Link to="https://www.instagram.com/sandeepyadav.24/">
              Instagram
            </Link>
          </h1>
          <h1 className="text-white">
            <Link to="https://devfolio.co/@sandeepyadav24">Devfolio</Link>
          </h1>
          <h1 className="text-white">
            <Link to="https://devpost.com/sandeepyadav004343?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
              Devpost
            </Link>
          </h1>
          <h1 className="text-white">
            <Link to="https://www.linkedin.com/in/sandeep-yadav-027500219/">
              LinkedIn
            </Link>
          </h1>
        </div>
        <div className="w-1/5">
          <h1 className="font-extrabold text-xl">Get Started</h1>
          <h1 className="text-white">
            <Link to={signupUrl}>Sign up for free</Link>
          </h1>
          <h1 className="text-white">
            <Link to={loginUrl}>Login</Link>
          </h1>
        </div>
      </div>
      <div className="py-10">© 2024 Noter. All right Reserved</div>
    </div>
  );
};
export default Banner3;
