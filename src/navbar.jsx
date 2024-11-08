import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import './navbar.css';

const NavBAR = ({ user }) => {

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("You're signed out");
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-top">DEV@Deakin</div>
            <input 
                type="text"
                className="navbar-input"
                placeholder="Search"
            />
            <div className="link">
                <button className="post">Post</button>
                {!user ? (
                    <Link to="/login" className="post" style={{ textDecoration: 'none' }}>Log In</Link>
                ) : (
                    <button className="post" onClick={handleLogout}>Logout</button>
                )}
            </div>
        </nav>
    );
};

export default NavBAR;
