import { GET_COMPANIES } from './constants';

export const getCompanies = () => async dispatch => {
    const res = await fetch('/api/companies');
    const companies = await res.json();
    console.log(companies)
    return dispatch({ type: GET_COMPANIES, payload: companies });
}
