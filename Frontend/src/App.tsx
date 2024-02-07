import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import TodoList from "./Components/TodoList";
import PageRender from "./Components/PageRender";
import About from "./Components/About.js";
import Note from "./Components/Note";
import NewNote from "./Components/NewNote.js";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<PageRender />} />
          <Route path="/note/:noteId" element={<Note />} />
          <Route path="newNote" element={<NewNote />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
