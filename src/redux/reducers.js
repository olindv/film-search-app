import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
    filmListRequest,
    filmListSuccess,
    filmListFailure,
    filmInfoRequest,
    filmInfoSuccess,
    filmInfoFailure,
} from "./actions";

const isLoading = createReducer(false, {
    [filmListRequest]: (state) => true,
    [filmListSuccess]: (state) => false,
    [filmListFailure]: (state) => false,
    [filmInfoRequest]: (state) => true,
    [filmInfoSuccess]: (state) => false,
    [filmInfoFailure]: (state) => false,
});

const isLoaded = createReducer(false, {
    [filmListRequest]: (state) => false,
    [filmListSuccess]: (state) => true,
    [filmListFailure]: (state) => true,
    [filmInfoRequest]: (state) => false,
    [filmInfoSuccess]: (state) => true,
    [filmInfoFailure]: (state) => true,
});

const error = createReducer(false, {
    [filmListRequest]: (state) => false,
    [filmListSuccess]: (state) => false,
    [filmListFailure]: (state) => true,
    [filmInfoRequest]: (state) => false,
    [filmInfoSuccess]: (state) => false,
    [filmInfoFailure]: (state) => true,
});

export default combineReducers({
    isLoading,
    isLoaded,
    error,
});
