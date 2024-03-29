import { useState } from "react";
import LeftNavbar from "./LeftNavbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const NewNote = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  const handleChange = (value) => {
    setDescription(value);
  };

  const requestAi = () => {
    navigate("/aiNote");
  };

  const submitButton = async () => {
    console.log(`Title: ${title} , Content: ${description}`);
    const response = await fetch("http://localhost:3000/todo/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title, description }),
    });
    const data = await response.json();
    console.log(data);
    window.location.reload();
  };
  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <LeftNavbar />
      <div className="flex flex-col md:w-3/4">
        <div className="flex flex-row justify-between bg-[#f1f0f8]">
          <h1 className="mx-5 my-3 py-2 font-semibold text-lg">{title}</h1>
          <div>
            <button
              className="my-3 mx-5 bg-[#7671DE] px-5 py-2 rounded-md"
              onClick={requestAi}
            >
              Write with AI
            </button>
            <button
              className="my-3 mx-5 bg-[#7671DE] px-5 py-2 rounded-md"
              onClick={submitButton}
            >
              Submit
            </button>
          </div>
        </div>
        <div className=" overflow-y-auto">
          <input
            placeholder="Write Title Here.."
            className="py-2 px-2"
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill
            value={description}
            onChange={handleChange}
            placeholder="Write Here.."
            modules={{
              toolbar: [
                ["bold", "italic", "underline", "strike"], // text formatting
                ["blockquote", "code-block"], // blocks
                [{ list: "ordered" }, { list: "bullet" }], // lists
                [{ script: "sub" }, { script: "super" }], // subscript/superscript
                [{ indent: "-1" }, { indent: "+1" }], // indentation
                [{ direction: "rtl" }], // text direction
                [{ header: [1, 2, 3, 4, 5, 6, false] }], // headers
                [{ color: [] }, { background: [] }], // text color/background color
                [{ font: [] }], // font family
                [{ align: [] }], // text alignment
                ["clean"], // remove formatting
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default NewNote;
