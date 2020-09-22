import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import requestAPIs from '../api/reqAPIs';

const Login = function (props) {
  useEffect(() => {
    requestAPIs.login();
  }, []);

  return <Route {...props} render={() => <Redirect to="/" />} />;
};

export default Login;
