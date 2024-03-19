import LeftNavbar from "./LeftNavbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Modal component to display summary
const SummaryModal = ({ summary, onClose }) => {
  return (
    <div className="fixed top-0 left-0  h-full w-full flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg mx-96">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div>{summary}</div>
        <button
          className="bg-red-500 text-white px-4 py-2 mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
const Note = () => {
  const { noteId } = useParams();
  const [allNotes, setAllNotes] = useState([]);
  const [summary, setSummary] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const summmaryHandler = async () => {
    const search = particularNote.description;
    const response = await fetch("http://localhost:3000/generate/summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ search }),
    });
    const data = await response.json();
    setSummary(data);
    setIsModalOpen(true); // Open the modal after setting the summary
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    const notes = async () => {
      const response = await fetch("http://localhost:3000/todo/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Pre Response");
      if (!response.ok) {
        console.error("Failed to fetch notes");
        return;
      }
      console.log("Post ");
      const data = await response.json();
      setAllNotes(data);
    };
    notes();
  }, []);
  console.log(allNotes);
  const particularNote = allNotes.find((note) => note._id == noteId);

  if (!particularNote) {
    // Handle the case where the note with the specified noteId is not found
    return (
      <div className="flex flex-row bg-[#f5f5fc]">
        <LeftNavbar />
        <div className="w-3/4 p-20 ">
          <h1>Note not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row  bg-[#f5f5fc]">
      <LeftNavbar />
      <div className="w-3/4 p-20 h-screen overflow-y-auto ">
        <div className="relative">
          <button
            className=" bg-[#7671DE] px-5 py-2 rounded-md absolute right-0"
            onClick={summmaryHandler}
          >
            Summarize
          </button>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{particularNote.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: particularNote.description }}
          />
        </div>
        {isModalOpen && (
          <SummaryModal
            summary={summary}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        {isLoading && <div>Loading...</div>} {/* Display loading indicator */}
      </div>
    </div>
  );
};
export default Note;
