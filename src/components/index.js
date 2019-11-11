import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import App from '../App';


// export { Home, About, Contact, Navigation };

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
