import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import userReducer from './usuario/reducer';

//aquí se deben colocar todos los reducers con sus namespace
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
