import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('SEARCH_GIPHY', searchGiphy);
}

//get request to GIPHY router
function* searchGiphy(action) {
    try {
        const query = action.payload;
        const searchGiphy = yield axios.get(`/giphy/${query}`); // response
        // send data to redux, put accepts an object
        yield put({type: 'SEARCH_RESULTS', payload: searchGiphy.data})
    } catch (error) {
        console.log('error getting gifs', error);
    }
}

const searchResults = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchResults,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);


// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
