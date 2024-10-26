import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase"; 
import { signOut } from "firebase/auth";
import './navbar.css';

const NavBAR = () =>{

    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/login"); // Redirect to login after signing out
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };
    return(
        <nav className="navbar">
            <div className="navbar-top">DEV@Deakin</div>
            <input 
                type="text"
                className="navbar-input"
                placeholder="Search"
            />
            <div className="link">
                <button className="post">Post</button>
                <Link to="/login">
                    <button className="post">Log In</button>
                </Link>
                <button className="post" onClick={handleSignOut}>Sign Out</button>
            </div>
        </nav>
    );
}

export default NavBAR;