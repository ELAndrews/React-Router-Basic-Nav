import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

const App = () => (
  <div>
    <Navigation />
    <Route 
    exact path="/"
    component={Home} />
    <Route 
    exact path="/about"
    component={About} />
    <Route 
    exact path="/contact"
    component={Contact} />
  </div>
);

export default App;
