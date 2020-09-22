import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes/MainRoute';
import Header from './components/Header';

import './css/App.css';
import './css/Header.css';

import { User } from './Contexts';

const App = function () {
  const [user, setUser] = useState(null);

  return (
    <User.Provider value={{ user, setUser }}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </User.Provider>
  );
};

export default App;
