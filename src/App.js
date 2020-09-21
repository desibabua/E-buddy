import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import './css/Header.css';
import Header from './components/Header';

const App = function () {
  return (
    <Router>
      <Header />
    </Router>
  );
};

export default App;
