import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LeftNavbar = () => {
  const [allNotes, setAllNotes] = useState([]);
  const notes = async () => {
    const response = await fetch("http://localhost:3000/todo/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = response.json();
    console.log(data);
    console.log("Post");
  };
  notes();
  const navigate = useNavigate();
  const todos = [{ _id: 1, title: "Appe" }];
  const newNotes = () => {
    navigate("/newNote");
    window.location.reload();
  };
  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
    window.location.reload();
  };
  const noteClick = (e) => {
    navigate("/note/noteId");
  };
  return (
    <div className="w-1/4 bg-[#ebeafb] p-10 h-screen relative">
      <div className="personal my-10">
        <h1>Sandeep Yadav</h1>
        <h1>sandeepyadav004343@gmail.com</h1>
      </div>
      <div
        className="bg-[#7671DE] text-center py-2 rounded-md "
        onClick={newNotes}
      >
        + New Notes
      </div>

      <div className="mt-5 text-[#5d5a87] font-semibold text-3xl">Notes</div>

      <div className="All_Notes h-[480px] overflow-y-auto">
        {todos.map((todo) => (
          <div key={todo._id} className="my-2" onClick={noteClick}>
            <h3>{todo.title}</h3>
          </div>
        ))}
      </div>
      <div
        onClick={logout}
        className="absolute bottom-10 left-10 text-[#5d5a87] font-semibold "
      >
        Log Out
      </div>
    </div>
  );
};

export default LeftNavbar;
