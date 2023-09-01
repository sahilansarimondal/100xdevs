import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBar from "./Appbar";
import "./App.css";
import Signup from "./Signup";
import Signin from "./Signin";
import CreateCourse from "./CreateCourse";
import Courses from "./Courses";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#eeeeee",
      }}
    >
      <Router>
        <AppBar />
        <Routes>
          <Route path="/create_course" element={<CreateCourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
