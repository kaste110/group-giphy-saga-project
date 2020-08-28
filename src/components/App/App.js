import React, { Component } from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search.jsx';
import Favorite from '../Favorite/Favorite.jsx';
import './App.css';



class App extends Component {

  render() {
    return (
      <Router>
        <header>
          <ul>
            <h4><Link to='/'>Search for GIFs</Link></h4>
            <h4><Link to='/favorite'>Favorite GIFs</Link></h4>
          </ul>
        </header>
        <div>
          <header>
          <h1>Giphy Search!</h1>
          </header>

          <Route exact path="/" component={Search} />
          <Route path="/favorite" component={Favorite} />
        </div>
      </Router>

    );
  }
}

export default App;
