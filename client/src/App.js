import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header/Header";
import About from "./components/Pages/About";
import Chat from "./components/Pages/Chat";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Profile from "./components/Pages/Profile";
import Signup from "./components/Pages/Signup";
import Home from "./components/Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
