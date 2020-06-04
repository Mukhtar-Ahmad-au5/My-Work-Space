import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import App from './App';
import appReducer from './redux/stateReducer';
import thunk from "redux-thunk"
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

JavascriptTimeAgo.locale(en)
JavascriptTimeAgo.locale(ru)

let store = createStore(appReducer, applyMiddleware(thunk,logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));