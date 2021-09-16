import {
    BRANDS_FETCH_START,
    BRANDS_FETCH_SUCCESS,
    BRANDS_FETCH_FAILURE,
} from './actionTypes';
import axios from 'axios';

const getBrands = () => {
   return dispatch => {
    dispatch({type: BRANDS_FETCH_START});
    // api calls
    axios.get('http://localhost:8000/brands')
        .then(res => {
            console.log(res, 'res');
            dispatch(
            {
                type: BRANDS_FETCH_SUCCESS, 
                payload: res.data
            }
        )})
        .catch(err => dispatch({type: BRANDS_FETCH_FAILURE, data: err}))
    }
};

export const brandsActions = {
    getBrands
};