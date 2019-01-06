import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return(
            <div>
            <h3>Příhlašen jako: </h3>
            <React.Fragment>
                <a href="http://localhost:3001/fields">Seznam hřišť</a>
                <p></p>
                <a href="http://localhost:3001">Odhlásit</a>
            </React.Fragment>
            </div>
        )
    }
}
export default Menu;