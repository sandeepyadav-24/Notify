import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const LeftNavbar = () => {
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    const notes = async () => {
      const response = await fetch("http://localhost:3000/todo/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setAllNotes(data);
    };
    notes();
  }, []);
  const navigate = useNavigate();

  const newNotes = () => {
    navigate("/newNote");
    window.location.reload();
  };
  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
    window.location.reload();
  };
  const noteClick = (noteId) => {
    navigate(`/note/${noteId}`);
  };
  return (
    <div className="md:w-1/4  bg-[#d5d3f3] p-10 h-screen relative">
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
        {allNotes.map((todo) => (
          <div
            key={todo._id}
            className="my-2 flex flex-row"
            onClick={() => noteClick(todo._id)}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
            <div className="mx-3">{todo.title}</div>
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
