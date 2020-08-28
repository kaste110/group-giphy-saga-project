import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {

    addFavorite = () => {
        console.log('click works');
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: this.props.searchResult.images.downsized.url });
    }

    render() {
        return (
            <div>
                <img src={this.props.searchResult.images.downsized.url} alt="random gif" />
                <button onClick={this.addFavorite}>Add to Favorites</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SearchList);