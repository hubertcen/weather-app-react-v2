// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./pages/Card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
