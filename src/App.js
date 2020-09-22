import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Routes from './Routes/MainRoute'
import './css/App.css';
import './css/Header.css';
import Header from './components/Header';

const App = function () {
  return (
    <Router>
      <Header />
      <Routes/>
    </Router>
  );
};

export default App;
