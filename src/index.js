import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import axios from 'axios';
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
// Saga
import {takeEvery, put } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

const favoriteReducer = (state = [], action) => {
    if(action.type === 'SET_FAVORITES') {
        return action.payload;
    }
    console.log(state);
    return state;
}

const searchReducer = (state = [], action) => {
    if(action.type === 'SET_SEARCH') {
        return action.payload;
    }
    return state;
}


function* searchForGif(action) {
    try {
        console.log(action.payload)
        let response = yield axios.get(`/api/search/q=${action.payload}`);
        console.log(response.data);
        yield put({type: 'SET_SEARCH', payload: response.data.data})
    } catch (error) {
        console.log('error in searchForGif', error);
    }
}

function* getFavorites() {
    try {
        let response = yield axios.get('/api/favorite')
        console.log('Favorites:', response.data);
        yield put({type:'SET_FAVORITES', payload: response.data});
    } catch (error) {
        console.log('error in getFavorites', error)
    }
}

function* addFavorite(action) {
    try {

        let response = yield axios.post('/api/favorite', {url: action.payload})
        console.log('adding to favorites', action.payload);
        yield put({type:'GET_FAVORITES'});
    } catch (error) {
        console.log('error in addFavorite', error);
    }
}

function* updateFavorite(action) {
    try {
        console.log(action.payload);
        let response = yield axios.put(`/api/favorite/${action.payload.id}`, action.payload)
    } catch (error) {
        console.log('error in updateFavorite', error);
    }
}

function* watcherSaga() {
    yield takeEvery('GET_FAVORITES', getFavorites);
    yield takeEvery('SEARCH_FOR_GIF', searchForGif);
    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery('UPDATE_FAVORITE', updateFavorite);
}
  
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        favoriteReducer,
        searchReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);


sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'))