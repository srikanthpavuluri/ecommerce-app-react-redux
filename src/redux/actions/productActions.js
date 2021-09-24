import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
} from "../actions/actionTypes";
import axios from "axios";

export const getProducts = (dispatch) => {
  dispatch({ type: PRODUCTS_FETCH_START });
  axios
    .get('http://localhost:3000/products')
    .then((res) => dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: PRODUCTS_FETCH_FAIL, payload: err }));
};
