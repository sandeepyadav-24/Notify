import Homepage from "./Homepage";
import Page from "./Page";
const PageRender = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Page />;
  } else {
    return <Homepage />;
  }
};
export default PageRender;
