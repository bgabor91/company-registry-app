import { combineReducers } from 'redux';
import companyReducer from './company';

export default combineReducers({
    companies: companyReducer
})
