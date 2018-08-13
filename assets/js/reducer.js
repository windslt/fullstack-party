import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import issues from './reducers/reducerIssues';

export default combineReducers({
  issues,
  router: routerReducer
});
