import React, { useState } from "react";
import './login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login (){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,pass);
            setMessage("User logged in successfully");
            setIsLoggedIn(true);
            navigate('/profile')
        }
        catch (error){
            setMessage(error.message);
        }
    };

    return(
        <div className="login">
        <h4>Log In</h4>
        <p className="user">
            New User? <Link to="/signup">Sign Up here!</Link>
        </p>
        <form onSubmit={handleSubmit}>
            <div className="area">
                <label>Your email</label>
                <input
                    type="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="area">
                <label >Your Password</label>
                <input
                    type="password"
                    className="input"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="button" >LogIn</button>

            {message && <p>{message}</p>}
            {isLoggedIn && (<p>Login successful!</p>)}
        </form>

    </div>
    );
}

export default Login;