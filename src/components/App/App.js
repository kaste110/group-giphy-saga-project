import React, { Component } from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search.jsx';
import Favorite from '../Favorite/Favorite.jsx';


class App extends Component {

  render() {
    return (
      <Router>
        <header>
          <ul>
            <li><Link to='/'>Search for GIFs</Link></li>
            <li><Link to='/favorite'>Favorite GIFs</Link></li>
          </ul>
        </header>
        <div>
          <h1>Giphy Search!</h1>
          
          <Route exact path="/" component={Search} />
          <Route path="/favorite" component={Favorite} />
        </div>
      </Router>

    );
  }
  
}

export default App;
