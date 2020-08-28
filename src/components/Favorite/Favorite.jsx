import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

class Favorite extends Component {

    componentDidMount() {
        this.getFavorites();
    };

    getFavorites = () => {
        this.props.dispatch({ type: 'GET_FAVORITES' })
    }

    render() { 
        return (
            <>
                <h3>Favorites</h3>
                { this.props.reduxState.favoriteReducer.map((favorite) => {
                    return(<FavoriteItem favorite={favorite} key={favorite.id}/>)
                })}
            </>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
  })
 
 
export default connect(mapStateToProps)(Favorite);