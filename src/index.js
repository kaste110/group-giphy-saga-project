import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const searchReducer = (state = [], action) => {
    if(action.type === 'SET_SEARCH') {
        return action.payload;
    }
    console.log(state);
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

function* watcherSaga() {
    yield takeEvery('SEARCH_FOR_GIF', searchForGif);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({searchReducer}),
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
