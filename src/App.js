import Counter from "./components/Counter";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import DoVerbGame from "./pages/DoVerbGame";
import Home from "./pages/Home";
import NounGame from "./pages/NounGame";
import PhraseGame from "./pages/PhraseGame";
import VerbMatchGame from "./pages/VerbMatchGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verbmatchgame" element={<VerbMatchGame />} />
      <Route path="/noungame" element={<NounGame />} />
      <Route path="/phrasegame" element={<PhraseGame />} />
      <Route path="/doverbgame" element={<DoVerbGame />} />
    </Routes>
  );
}

export default App;
