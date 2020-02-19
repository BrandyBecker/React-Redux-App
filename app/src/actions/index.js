import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchCatPics = () => dispatch => {

    const config = {
        headers: {
        "x-api-key": "22c07182-7231-4b1a-86a0-3cbe160923e7"
        }
        }
        const params = {
        
        params: {limit: 12}
        }

    dispatch({ type: START_FETCHING });
    axios
    .get('https://api.thecatapi.com/v1/images/search', params, config)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
