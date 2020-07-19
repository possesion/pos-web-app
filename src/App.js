import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Navigation />
      {/* <Header /> */}
      <Main data={skills}/>
      {/* <Footer /> */}
    </div>
  );
}

const skills = ['HTML', 'CSS', 'JS', 'React Native', 'React Native', 'Git', 'Linux', 'Bash', 'CD/CI', 'модульное тестирование', 'Jest', 'Bootstrap', 'npm' ];
export default App;
