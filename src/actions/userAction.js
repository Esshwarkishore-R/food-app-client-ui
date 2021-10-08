import axios from 'axios';
import { BASE_URL } from '../constants';
export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })
    try {
        const response = await axios.post(BASE_URL + '/api/users/register', user, {
            'x-auth-token': localStorage.getItem('')?.token
        })
        dispatch({ type: 'USER_REGISTER_SUCCESS' })
        console.log(response);
    }
    catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error })
    }
}

export const loginUser = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' })
    try {
        const response = await axios.post(BASE_URL + '/api/users/login', user)
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = '/'
        console.log(response);
    }
    catch (error) {
        console.log("🚀 ~ file: userAction.js ~ line 27 ~ error", error?.response?.data)
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error?.response?.data })
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
}