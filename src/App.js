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
    exact to="/"
    component={Home} />
    <Route 
    exact to="/about"
    component={About} />
    <Route 
    exact to="/contact"
    component={Contact} />
  </div>
);

export default App;
