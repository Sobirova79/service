import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import complete from "./todo";
import todo from "./todo";
import AddApp from "./AddApp";
import AddBrigades from "./AddBrigades";
import addCategories from "./addCategories";

export default combineReducers({
  complete,
  auth,
  todo,
  AddApp,
  AddBrigades,
  addCategories,
});
