import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Navbar from "./Navbar";
import Page from "./Page";
const Homepage = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div className="bg-[#ebeafb]">
        <Navbar></Navbar>
        <Banner1></Banner1>
        <Banner2></Banner2>
        <Banner3></Banner3>
      </div>
    );
  } else {
    <Page></Page>;
  }
};
export default Homepage;
