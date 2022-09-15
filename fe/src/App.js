import "./App.css";
import Card from "./Components/Card";
import CardDetail from "./Components/CardDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card" element={<Card />} />
        <Route path="/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
