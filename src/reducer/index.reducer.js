import { combineReducers } from "@reduxjs/toolkit";
import users from './users'
import services from './servicesState'

const allReducer = combineReducers({
   users,
   services
})

export default allReducer