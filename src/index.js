import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({}),
    applyMiddleware(sagaMiddleware, logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
