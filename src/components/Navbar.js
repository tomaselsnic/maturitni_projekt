import React from "react";
import { withRouter } from "react-router-dom";
import jwtDecode from 'jwt-decode';

const Navbar = function(props) {
    
    return(
        <div className="navbar primary">
            <ul>
                <li onClick={() => props.history.push("/menu")}>Menu</li>
                <li onClick={()=>props.history.push("/new")}>Přidat nové hřiště</li>
                <li onClick={()=>props.history.push("/fields")}>Seznam hřišť</li>
                <li className="navbar-right">{localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")).name : null}</li>
            </ul>
        </div>
    );
};
export default withRouter(Navbar);