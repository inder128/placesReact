import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import userAuth from './userAuth';
import placesReducer from './placesReducer';

const currentPathReducer = (currentPath = '/', action) => {
  if(action.type === 'CURRENT_PATH'){
    //this way header will not render every time page changes;
    //going from home to any other page;
    if(action.payload !== '/' && currentPath === '/')
      return action.payload;
    //coming to home from any other node;
    if(action.payload === '/' && currentPath !== '/')
      return action.payload;
  }
  return currentPath;
};

export default combineReducers({
  userAuth : userAuth,
  // all our data from will be present in form object of state;
  places : placesReducer,
  form : formReducer,
  currentPath : currentPathReducer
});
