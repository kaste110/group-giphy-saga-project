import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class FavoriteItem extends Component {

    render() { 
        return (
                <>
                </>
          );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
  })
 
export default connect(mapStateToProps)(FavoriteItem);