import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.js';
import MainPage from './pages/MainPage.js';
import Bio from './pages/Bio.js';
import Footer from './components/Footer.js';
import { skills } from './components/Main';
import Content from './components/Content';

function App() {
  return (
    <>
      <Navigation /> 
      <Router>
      <Switch>
        <Content />
      </Switch>
      </Router>        
      <Footer />
    </>
  );
}

export default App;
