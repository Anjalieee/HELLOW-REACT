import {LOGO_URL} from "../utils/constants";

const Header = () =>{
    return (
        <div className="header">
            <nav className="Navbar">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}></img>
                </div> 
                <div className="nav-items">
                    <ul>
                        <li>Dining Out</li>
                        <li>Delivery</li>
                        <li>Nightlife</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header;
