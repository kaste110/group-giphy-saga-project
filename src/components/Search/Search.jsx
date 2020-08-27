import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

    state = {
        thisSearch: ''
    };

    componentDidMount() {
        this.searchForGif();
    };

    searchForGif = (searchQuery) => {
        this.props.dispatch({type: 'SEARCH_FOR_GIF', payload: searchQuery})
    };

    render() {
        return (
            <div>
                <input placeholder="Search" />
                <button onClick={() => this.searchForGif(this.state.thisSearch)}>Search</button>
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Search);