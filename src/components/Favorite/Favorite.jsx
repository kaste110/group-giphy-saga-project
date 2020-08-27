import React, { Component } from 'react';
import axios from 'axios';

class Favorite extends Component {
    
    updateFavorite = () => {
        axios.put('/api/favorite')
        .then( response => {
            console.log('updating favorite item with category id');
        }).catch( err => {
            console.log('error in updating', err);
        })
    }

    render() { 
        return (
            <p>Favorites</p>
          );
    }
}
 
export default Favorite;
