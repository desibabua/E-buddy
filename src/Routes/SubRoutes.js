import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { User } from '../Contexts';

const Protected = function ({ children, ...props }) {
  const user = useContext(User);
  return (
    <Route
      {...props}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/api/authenticate', state: { from: location } }} />
        )
      }
    />
  );
};

export default Protected;
