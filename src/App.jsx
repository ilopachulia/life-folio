import "./App.css";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Projects from "./routes/pages/projects/projects.component";
import Hobby from "./routes/pages/hobby/hobby.component";
import Contact from "./routes/pages/contact/contact.component";
import Education from "./routes/pages/education/education.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="hobby" element={<Hobby />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
