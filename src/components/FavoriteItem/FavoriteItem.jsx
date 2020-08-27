import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class FavoriteItem extends Component {

    state = {
        newFavorite: ''
    }

    getURL = () => {
        
    }

    addFavorite = () => {
        console.log('click works');
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: 'Hi' });
    }
    
   


    render() { 
        return (
                <button onClick={this.addFavorite}>Add to Favorites</button>
          );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
  })
 
export default connect(mapStateToProps)(FavoriteItem);