import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import services from "./servicesState";
import order from "./orderState";
const allReducer = combineReducers({
  users,
  services,
  order,
});

export default allReducer;
