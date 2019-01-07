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
            <React.Fragment>
                <a href="http://localhost:3001/fields">Seznam hřišť</a>
                
                <a onClick={this.handleLogout}>Odhlásit</a>
            </React.Fragment>
            </div>
        )
    }
}
export default Menu;