import {LOGO_URL} from "../utils/constants";
import { useState , useEffect } from "react";
import {Link} from "react-router-dom";

const Header = () =>{
    // if no dependency array, page rendered multiple times
    //if dependency array, then it is called only once when the component is mounted, and when the component is unmounted, it will be called again.

    const [btnName, setBtnName] = useState("Login");
    useEffect(()=>{
        console.log("useEffect called");
    }, [])
    
    return (

        <div className="header">
            <nav className="Navbar">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}></img>
                </div> 
                <div className="nav-items">
                    <ul div className="nav-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>Dining Out</li>
                        <li>Delivery</li>
                        <li>Cart</li>
                        <button className="login" onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}>
                            {btnName}
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header;
