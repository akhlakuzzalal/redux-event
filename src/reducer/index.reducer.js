import { combineReducers } from "@reduxjs/toolkit";
import users from './users'

const allReducer = combineReducers({
   users
})

export default allReducer