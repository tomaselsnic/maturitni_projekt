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
            <div>
            <div class="box">
            
                <a class="center "href="http://localhost:3001/fields">Seznam hřišť</a>
            </div>
            <div class="a">
            <a onClick={this.handleLogout}>Odhlásit</a>
            </div>
            </div>
            
        )
    }
}
export default Menu;