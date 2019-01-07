import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from './authService'

function ProtectedRoute ({component: Component, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => isLogged()
          ? <Component {...props} />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
}

export default ProtectedRoute;