import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }


    handleLogout() {
        localStorage.removeItem("token");
        this.props.history.push("/");
    }

    render() {
        return(
            <div className="height-100vh flex flex-row align-items-center justify-content-center margin-auto">
            <div class="box flex flex-col justify-content-center align-items-center">
            
                <a class="center "href="http://localhost:3001/fields">Seznam hřišť</a>
            </div>
            <div class="box flex flex-col justify-content-center align-items-center">
            <a onClick={this.handleLogout}>Odhlásit</a>
            </div>
            </div>
            
        )
    }
}
export default Menu;