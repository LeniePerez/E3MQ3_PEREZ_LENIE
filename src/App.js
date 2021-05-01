import React from 'react';
import Navbar from './components/Navbar/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import User from './pages/user';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/user' component={User} />
      </Switch>
  
    </Router>
  );
}

export default App;
