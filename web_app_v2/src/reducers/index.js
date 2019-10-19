import { combineReducers } from "redux";
import postsByCategories from "./posts";

const rootReducer = combineReducers({ postsByCategories });

export default rootReducer;
