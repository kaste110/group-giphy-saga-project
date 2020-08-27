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

const favoriteReducer = (state = {}, action) => {
    if(action.type === 'SET_FAVORITES') {
        return action.payload;
    }
    console.log(state);
    return state;
}

const searchReducer = (state = {}, action) => {
    if(action.type === 'SET_SEARCH') {
        return action.payload;
    }
    console.log(state);
    return state;
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

function* getSearch() {
    try {
        let response = yield axios.get('/')
        console.log('Search:', response.data);
        yield put({type:'SET_SEARCH', payload: response.data});        
    } catch (error) {
        console.log('error in getSearch', error);
    }
}

function* watcherSaga() {
    yield takeEvery('GET_FAVORITES', getFavorites)
    yield takeEvery('GET_SEARCH', getSearch)
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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
