import React, { Component } from 'react';

import { connect } from 'react-redux';
import SearchList from '../SearchList/SearchList.jsx';
import './Search.css';

class Search extends Component {

    state = {
        thisSearch: '',
        searchList: []
    };

    searchForGif = (searchQuery) => {
        console.log(searchQuery)
        this.props.dispatch({ type: 'SEARCH_FOR_GIF', payload: searchQuery })
        this.setState({ searchList: this.props.reduxState.searchReducer.data })
    };

    render() {
        return (
            <div>
                <div className="searchBar">
                    <input className="searchInput" placeholder="Search" onChange={(event) => this.setState({ thisSearch: event.target.value })} />
                    <button className="searchBtn" onClick={() => this.searchForGif(this.state.thisSearch)}>Search</button>
                </div>


                {this.props.reduxState.searchReducer.map((searchResult) => {
                    return (<SearchList searchResult={searchResult} key={searchResult.url} />)
                })}
                {/* {JSON.stringify(this.props.reduxState.searchReducer.data)} */}
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Search);

