import { GET_COMPANIES } from '../actions/constants'

const companyReducer = (state = [], { type, payload }) => {
    switch (type) {
        case GET_COMPANIES:
            return payload
        default:
            return state
    }
}

export default companyReducer;
