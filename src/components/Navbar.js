import React from "react";
import { withRouter } from "react-router-dom";

const Navbar = function(props) {
    
    return(
        <div className="navbar primary">
            <ul>
                <li onClick={() => props.history.push("/menu")}>Menu</li>
                <li onClick={()=>props.history.push("/new")}>Přidat nové hřiště</li>
                <li onClick={()=>props.history.push("/fields")}>Seznam hřišť</li>
            </ul>
        </div>
    );
};
export default withRouter(Navbar);