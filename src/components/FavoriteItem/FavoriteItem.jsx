import React from 'react';
import axios from 'axios';

class FavoriteItem extends Component {

    addFavorite = () => {
        axios.post('/api/favorite')
    }
    
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
 
export default FavoriteItem;