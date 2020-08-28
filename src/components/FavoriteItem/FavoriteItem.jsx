import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteItem extends Component {
    state = {
        favorite: {
            ...this.props.favorite,
            category_id: 0
        }
    }

    handleSelect = (event) => {
        this.setState({
            favorite: {
                ...this.props.favorite,
                category_id: event.target.value
            }
        })
    }

    setCategory = () => {
        this.props.dispatch({ type: 'UPDATE_FAVORITE', payload: this.state.favorite})
    }

    render() { 
        return (
            <div>
                <img src={this.props.favorite.url} />
                <select onChange={(value) => this.handleSelect(value)} name="category" id="category">
                    <option value="1">Funny</option>
                    <option value="2">Cohort</option>
                    <option value="3">Cartoon</option>
                    <option value="4">NSFW</option>
                    <option value="5">Meme</option>
                </select>
                <button onClick={() => this.setCategory(this.state.category_id)}>Set Category</button>
            </div>
          );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
  })
 
export default connect(mapStateToProps)(FavoriteItem);