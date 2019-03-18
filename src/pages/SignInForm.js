import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    // TODO: redirect to /menu when logged in

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    async handleSubmit() {
        try {
            // TODO: move address to declaration file
            // request o prihlaseni uzivatele pomoci dat zadanych do formuláře
            const { data: token } = await axios.post(`${process.env.REACT_APP_API_ROOT}/login`, { email: this.state.email, password: this.state.password });
            await localStorage.setItem("token", token);
            // Pokud se mi spravne vratil token, redirect do menu
            console.log(token);
            this.props.history.push("/menu");
        } catch (error) {
            // Pokud v průběhu nastane chyba, window.alert z chybovou chláškou (nemusí vždy odpovídat nesprávnému heslu, muze se jednat o error 500 atd)
            console.log(error);
            window.alert("nespravný email nebo heslo", error) 
        }
    }
    

    render() {
        return (
      
       <div className="App">
          <div className="App__Aside"></div>
           <div className="App__Form">
             <div className="PageSwitcher">
                 <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
               <NavLink exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                   <NavLink to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
               </div>
        <div className="FormCenter">
            <form className="FormFields">
                            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button onClick={() => this.handleSubmit()} type="button" className="FormField__Button mr-20">Sign In</button>
                  <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
    }
}

export default withRouter(SignInForm);
