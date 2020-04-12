import { combineReducers } from "redux";
import userReducer from './userReducer'
import authReducers from "./authReducers";
import adminReducers from "./adminReducers";

export default combineReducers({
    users: userReducer,
    auth: authReducers,
    admins: adminReducers
})