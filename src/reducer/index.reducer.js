import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import services from "./servicesState";
import order from "./orderState";
import allOrder from "./allOrders";
const allReducer = combineReducers({
  users,
  services,
  order,
  allOrder,
});

export default allReducer;
