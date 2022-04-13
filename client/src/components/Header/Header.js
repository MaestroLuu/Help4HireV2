import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
    const [page, setPage] = useState("Home");
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const newPage = e.target.value;
        setPage(newPage);
    }
        
    return (
        <div className="header">
            <h1>Header</h1>
            <NavLink to="/">Home</NavLink> | <NavLink to="/chat">Chat</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/login">Login</NavLink> | <NavLink to="/profile">Profile</NavLink> | <NavLink to="/signup">Signup</NavLink>
        </div>
    );
}