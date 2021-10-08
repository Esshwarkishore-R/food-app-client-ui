import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllFoodReducer } from "./reducers/foodReducers";
import { registerUserReducer } from "./reducers/userReducers";
import { loginUserReducer } from "./reducers/userReducers";

const finalReducer = combineReducers({
    getAllFoodReducer: getAllFoodReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
})

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = { loginUserReducer: { currentUser: currentUser } }
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store