import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() { 
    return (
        <div className="header">
            <h1>Help for Hire</h1>
            <NavLink to="/">Home</NavLink> | <NavLink to="/chat">Chat</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/login">Login</NavLink> | <NavLink to="/profile">Profile</NavLink> | <NavLink to="/signup">Signup</NavLink>
        </div>
    );
}