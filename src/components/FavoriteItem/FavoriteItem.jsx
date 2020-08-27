import React from 'react';
import axios from 'axios';

class FavoriteItem extends Component {

    state = {
        newFavorite: ''
    }

    addFavorite = () => {
        axios.post('/api/favorite')
    }
    
   


    render() { 
        return (
                <button onClick={this.addFavorite}>Add to Favorites</button>
          );
    }
}
 
export default FavoriteItem;