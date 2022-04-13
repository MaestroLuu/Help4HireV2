import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
