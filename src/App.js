import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.js';
import MainPage from './pages/MainPage.js';
import Bio from './pages/Bio.js';
import Footer from './components/Footer.js';
import { skills } from './components/Main';

function App() {
  return (
    <>
      <Navigation />         
      <Footer />
    </>
  );
}

export default App;
