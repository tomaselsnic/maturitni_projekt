import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.handleRedirect=this.handleRedirect.bind(this);
    }


    handleLogout() {
        localStorage.removeItem("token");
        this.props.history.push("/");
    }
    handleRedirect() {

        this.props.history.push("/fields");
    }
    render() {
        return (
            <div className="height-100vh flex flex-row align-items-stretch justify-content-stretch margin-auto">

                <div class="background_menu primary flex justify-content-center align-items-center">
                    <div class="box secondary flex flex-col justify-content-center align-items-center"onClick={this.handleRedirect}>
                        <span>Seznam hřišť</span>
                    </div>
                </div>

                <div class="background_menu secondary flex justify-content-center align-items-center">
                    <div class="box primary flex flex-col justify-content-center align-items-center" onClick={this.handleLogout}>
                        <a>Odhlásit</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;