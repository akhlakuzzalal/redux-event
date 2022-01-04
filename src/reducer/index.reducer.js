import { combineReducers } from "@reduxjs/toolkit";
import user from '../reducer/user'

const allReducer = combineReducers({
   user
})

export default allReducer