import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import Menu from "./pages/Menu";
import Fields from "./pages/Fields";
import NewField from "./pages/NewField"
import ProtectedRoute from './protectedRoute';


class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={SignInForm} />
            <Route path="/signup" component={SignUpForm} />

            <ProtectedRoute path="/menu" component={Menu}/>
            <ProtectedRoute path="/fields" component={Fields}/>
            <ProtectedRoute path="/new" component={NewField} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;