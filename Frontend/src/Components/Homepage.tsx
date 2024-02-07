import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <div className="bg-[#ebeafb]">
      <Navbar />
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </div>
  );
};
export default Homepage;
