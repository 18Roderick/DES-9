import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({
  component: Component,
  tag,

  ...rest
}) => {
  const token = useSelector((state) => state.auth.token);

  //console.log(authUser, rest);

  const renderItem = (props) => {
    if (token) {
      return <Component {...props} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: `/Login`,
            state: {
              from: props.location,
            },
          }}
        />
      );
    }
  };

  return <Route {...rest} render={renderItem} />;
};

export default withRouter(ProtectedRoute);
