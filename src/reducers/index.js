import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {AccountReducer} from './AccountReducer';

 
export default combineReducers({
  appState:appReducer,
  accountState: AccountReducer,
  routing
 // More reducers if there are
  // can go here
})