import {combineReducers} from 'redux';
import configReducer from './configReducer';
import renderReducer from './renderReducer';

export default combineReducers({
  config: configReducer,
  appRender: renderReducer
});
