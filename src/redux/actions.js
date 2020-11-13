import { createAction } from "@reduxjs/toolkit";

export const filmListRequest = createAction("FILM_LIST_REQUEST")
export const filmListSuccess = createAction("FILM_LIST_REQUEST")
export const filmListFailure = createAction("FILM_LIST_FAILURE")

export const filmInfoRequest = createAction("FILM_INFO_REQUEST")
export const filmInfoSuccess = createAction("FILM_INFO_REQUEST")
export const filmInfoFailure = createAction("FILM_INFO_FAILURE")