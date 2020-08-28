import React, { Component } from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
import Search from '../Search/Search.jsx';
import Favorite from '../Favorite/Favorite.jsx';
import FavoriteItem from '../FavoriteItem/FavoriteItem.jsx';


class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <h1>Giphy Search!</h1>
          
          <Route exact path="/" component={Search} />
          <Route path="/favorite" component={Favorite} />
          <FavoriteItem />
        </div>
      </Router>

    );
  }
  
}

export default App;
