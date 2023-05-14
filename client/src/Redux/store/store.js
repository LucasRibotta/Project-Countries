import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTool} from 'redux-devtools-extension';
import rootReducer from '../reducer/reducer';

export const store = createStore(rootReducer, composeWithDevTool(applyMiddleware(thunk)))