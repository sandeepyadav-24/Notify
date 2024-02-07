import LeftNavbar from "./LeftNavbar";

const Note = () => {
  return (
    <div className="flex flex-row ">
      <LeftNavbar />
      <div className="w-3/4 p-20">
        <h1>Title</h1>
        <h2>Description</h2>
      </div>
    </div>
  );
};
export default Note;
