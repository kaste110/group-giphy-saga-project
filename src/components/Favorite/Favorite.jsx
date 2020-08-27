import React, { Component } from 'react';

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
            
          );
    }
}
 
export default Favorite;
