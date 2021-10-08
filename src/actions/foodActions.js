import axios from 'axios'
import { BASE_URL } from '../constants';
export const getAllFood = () => async (dispatch, getState) => {


    dispatch({ type: 'GET_FOOD_REQUEST' })
    try {
        const response = await axios.get(BASE_URL + '/api/food/getAllFood', { headers: { isLogin: false } })
        console.log(response);
        dispatch({
            type: 'GET_FOOD_SUCCESS',
            payload: response.data
        })
    }
    catch (error) {
        dispatch({
            type: 'GET_FOOD_FAILED',
            payload: error
        })
    }
}


export const getAllRestaurant = () => async (dispatch, getState) => {
    console.log("🚀 ~ file: foodActions.js ~ line 25 ~ getAllRestaurant ~ getState", getState())
    const { loginUserReducer } = getState()
    dispatch({ type: 'GET_FOOD_REQUEST' })
    try {
        const response = await axios.get(BASE_URL + '/api/food/getAllRestaurant', { headers: { isLogin: loginUserReducer?.currentUser?.email ? true : false, 'x-auth-token': loginUserReducer?.currentUser?.token } })
        console.log(response);
        dispatch({
            type: 'GET_FOOD_SUCCESS',
            payload: response.data
        })
    }
    catch (error) {
        dispatch({
            type: 'GET_FOOD_FAILED',
            payload: error
        })
    }
}

export const filterFood = (search, category) => async dispatch => {
    var filteredFood;
    dispatch({ type: 'GET_FOOD_REQUEST' })
    try {
        const response = await axios.get(BASE_URL + '/api/food/getAllFood')
        console.log(response.data, "Response for the filter");
        filteredFood = response.data.filter(food => food.name.toLowerCase().includes(search))
        if (category !== 'all') {
            filteredFood = response.data.filter(food => food.category.toLowerCase() === (category))
        }
        dispatch({
            type: 'GET_FOOD_SUCCESS',
            payload: filteredFood
        })
    }
    catch (error) {
        dispatch({
            type: 'GET_FOOD_FAILED',
            payload: error
        })
    }
}
export const filterRestaurant = (search, category, filter) => async dispatch => {
    var filteredFood;
    dispatch({ type: 'GET_FOOD_REQUEST' })
    try {
        let response = await axios.get(BASE_URL + '/api/food/getAllRestaurant', { headers: { isLogin: false, } })
        console.log(response.data, "Response for the filter");
        filteredFood = response.data;
        if (search) {
            filteredFood = response.data.filter(food => food.restaurant_name.toLowerCase().includes(search))
            console.log("🚀 ~ file: foodActions.js ~ line 75 ~ filteredFood", filteredFood)
            if (category !== 'all') {
                console.log("I am here")
                filteredFood = response.data.filter(food => food.cuisine.toLowerCase() === category)
                console.log("🚀 ~ file: foodActions.js ~ line 78 ~ filteredFood", filteredFood)
            }
        }
        else if (category !== 'all') {
            console.log("I am here")
            filteredFood = response.data.filter(food => food.cuisine.toLowerCase() === category)
            console.log("🚀 ~ file: foodActions.js ~ line 78 ~ filteredFood", filteredFood)
        }
        else if (filter === 'high') {
            filteredFood = response.data.sort(function (a, b) {
                return b.average_price - a.average_price;
            });
            console.log("🚀 ~ file: foodActions.js ~ line 78 ~ filteredFood", response, filteredFood)

        }
        else if (filter === 'low') {
            filteredFood = response.data.sort(function (a, b) {
                return a.average_price - b.average_price;
            });
            console.log("🚀 ~ file: foodActions.js ~ line 92 ~ filteredFood", filteredFood)

        }
        dispatch({
            type: 'GET_FOOD_SUCCESS',
            payload: filteredFood
        })
    }
    catch (error) {
        dispatch({
            type: 'GET_FOOD_FAILED',
            payload: error
        })
    }
}