import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import campusReducer from './campusReducer';

const rootReducer = combineReducers({ students: studentReducer, campuses: campusReducer });

export default rootReducer
