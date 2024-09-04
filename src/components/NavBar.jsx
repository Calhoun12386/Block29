import { Link } from "react-router-dom";
import "../index.css"

export default function NavBar() {
    return(
        <div id="navbar">
            
            <Link to="/">Home</Link>
            <Link to="/allplayers">All Players</Link>
            <Link to="/newplayerform">Create New Player</Link>
            
            
        </div>
    );
}