import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
// const { default: AuthSlice } = require("./AuthSlice");
import authReducer from "./AuthSlice"
import TaskSlice from "./TaskSlice";

const rootReducer=combineReducers({
    auth:authReducer,
    task:TaskSlice
})

const store=configureStore({
    reducer:rootReducer,    
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})

export default store;