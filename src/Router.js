import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import Menu from "./pages/Menu";
class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={SignInForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/menu" component={Menu}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;