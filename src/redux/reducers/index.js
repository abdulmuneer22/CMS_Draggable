import { combineReducers } from 'redux';
import bodybg from './bodybgreducer'
import homestyle from './HomeStylesReducer'

export default combineReducers({
    bodybg : bodybg,
    homestyle : homestyle
});