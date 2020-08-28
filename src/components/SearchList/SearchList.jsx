import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchList.css'

class SearchList extends Component {

    render() {
        return (
            <div>
                <img src={this.props.searchResult.images.downsized.url} alt="random gif" />
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SearchList);