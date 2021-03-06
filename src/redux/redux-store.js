import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer'
import dialogReducer from './dialogs-reducer'
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    mainPage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

let  store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store;