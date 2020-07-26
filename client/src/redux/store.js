import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middlewares = [];

if (process.env.ENVIRONMENT !== 'PRODUCTION') middlewares.push(logger);

middlewares.push(thunk);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default { store };
