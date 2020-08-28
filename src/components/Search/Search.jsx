import React, { Component } from 'react';

import { connect } from 'react-redux';
import SearchList from '../SearchList/SearchList.jsx';

class Search extends Component {

    state = {
        thisSearch: '',
        searchList: []
    };

    searchForGif = (searchQuery) => {
        console.log(searchQuery)
        this.props.dispatch({type: 'SEARCH_FOR_GIF', payload: searchQuery})
        this.setState({searchList: this.props.reduxState.searchReducer.data})
    };

    render() {
        return (
            <div>
                <input placeholder="Search" onChange={(event) => this.setState({thisSearch: event.target.value})} />
                <button onClick={() => this.searchForGif(this.state.thisSearch)}>Search</button>

                

                { this.props.reduxState.searchReducer.map((searchResult) => {
                    return(<SearchList searchResult={searchResult} key={searchResult.url}/>)
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

