import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Memories from "./Pages/MemoryPage";
import SurprisePage from "./Pages/SurprisePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/surprise" element={<SurprisePage />} />

    </Routes>
  )
}

export default App;