import {
    BRANDS_FETCH_START,
    BRANDS_FETCH_SUCCESS,
    BRANDS_FETCH_FAILURE
} from '../actions/actionTypes';

const intialState = {
    brands: [],
    fetching: false,
    error: null,
};

export const brandsReducer = (state=intialState, action) => {
    switch(action.type) {
        case BRANDS_FETCH_START:
            return {
                ...state,   // copy initial state
                fetching: true
            };
        case BRANDS_FETCH_SUCCESS:
            console.log(action, 'action');
            return {
                ...state,   
                fetching: false,
                brands: action.payload
            };
        case BRANDS_FETCH_FAILURE:
            return {
                ...state,   
                fetching: false,
                brands: [],
                error: action.data
            };
        default: 
            return state;
    }
}