import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { GeminiOutput } from "../Atom/GeminiOutput";

const InputBar = (props) => {
  const [search, setSeacrh] = useState("");
  const [output, setOutput] = useState("");
  const setGeminiOutput = useSetRecoilState(GeminiOutput);
  const generateHandler = async () => {
    props.onSearch(true);
    alert(search);
    const response = await fetch("http://localhost:3000/generate/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ search }),
    });
    const data = await response.json();
    setOutput(data);
    setGeminiOutput(data);
  };

  return (
    <div className="border-2  w-1/2 mx-auto my-20 border-[#B09FF4] flex justify-between rounded-xl">
      <div className="flex flex-row">
        <div className="py-1 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8  text-[#B09FF4] "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Ask AI to write anything... "
          className="w-96 outline-none "
          onChange={(e) => {
            setSeacrh(e.target.value);
          }}
        />
      </div>

      <div>
        <button
          className="bg-[#502CDE] text-white px-5 py-3 rounded-xl"
          onClick={generateHandler}
        >
          Generate
        </button>
      </div>
    </div>
  );
};
export default InputBar;
