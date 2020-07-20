import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';

import Footer from './components/Footer.js';
import Contacts from './pages/Contacts.js';
import Bio from './pages/Bio.js';
import MainPage from './pages/MainPage.js';
import { skills } from './components/Main';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/bio' component={Bio} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
