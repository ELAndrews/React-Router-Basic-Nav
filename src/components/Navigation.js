import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </div>
        <div>
          <Link to="/about">
           <h3>About</h3>
         </Link>
        </div>
        <div>
          <Link to="/contact">
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
