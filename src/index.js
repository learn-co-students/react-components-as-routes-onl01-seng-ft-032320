import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';




ReactDOM.render(
  // <Home />,
  // document.getElementById('root')
  (<Router>
    <div>
      <Navbar />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" render={() => <h1>Signup</h1>} />
      <Route exact path="/messages" render={() => <h1>Messages</h1>} />
    </div>
  </Router>),
  document.getElementById('root')
);
