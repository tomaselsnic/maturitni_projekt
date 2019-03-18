import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import Menu from "./pages/Menu";
import Fields from "./pages/Fields";
import NewField from "./pages/NewField"
import FieldDetail from "./pages/FieldDetail/FieldDetail"
import ProtectedRoute from './protectedRoute';


class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={SignInForm} />
            <Route path="/signup" component={SignUpForm} />

            <ProtectedRoute path="/menu" component={Menu}/>
            <ProtectedRoute exact={true} path="/fields" component={Fields}/>
            <ProtectedRoute path="/new" component={NewField} />
            <ProtectedRoute path="/fields/detail/:id" component={FieldDetail} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;