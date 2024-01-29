import { createReducer } from "@reduxjs/toolkit";
import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_REQUEST_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  TOKEN_VERIFY_FAIL,
  TOKEN_VERIFY_REQUEST,
  TOKEN_VERIFY_REQUEST_FAIL,
  TOKEN_VERIFY_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_REQUEST_FAIL,
  USER_SIGNUP_SUCCESS,
} from "../constant/User";

const initialState = {
  isAuthantication: false,
  isLoading: false,
  user: {},
};

export const UserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(USER_SIGNUP_REQUEST, (state, action) => {
      state.isLoading = true;
    })
    .addCase(USER_SIGNUP_REQUEST_FAIL, (state, action) => {
      state.isLoading = false;
    })
    .addCase(USER_SIGNUP_SUCCESS, (state, action) => {
      state.isLoading = false;
    })
    .addCase(USER_SIGNUP_FAIL, (state, action) => {
      state.isLoading = false;
    })
    // --- login user
    .addCase(LOGIN_USER_REQUEST, (state, action) => {
      state.isLoading = true;
      state.isAuthantication = false;
    })
    .addCase(LOGIN_USER_REQUEST_FAIL, (state, action) => {
      state.isLoading = false;
      state.isAuthantication = false;
    })
    .addCase(LOGIN_USER_SUCCESS, (state, action) => {
      state.isLoading = false;
      state.isAuthantication = true;
      state.user = action.payload;
    })
    .addCase(LOGIN_USER_FAIL, (state, action) => {
      state.isLoading = false;
      state.isAuthantication = false;
    })
    // --- verify token
    .addCase(TOKEN_VERIFY_REQUEST, (state, action) => {
      state.isLoading = true;
      state.isAuthantication = false;
    })
    .addCase(TOKEN_VERIFY_REQUEST_FAIL, (state, action) => {
      state.isLoading = false;
      state.isAuthantication = false;
    })
    .addCase(TOKEN_VERIFY_SUCCESS, (state, action) => {
      state.isLoading = false;
      state.isAuthantication = true;
      state.user = action.payload;
    })
    .addCase(TOKEN_VERIFY_FAIL, (state, action) => {
      state.isLoading = false;
      state.isAuthantication = false;
    })
    // --- logout  the user
    .addCase(LOGOUT_USER_REQUEST, (state, action) => {
      state.isLoading = true;
      state.isAuthantication = true;
    })
    .addCase(LOGOUT_USER_SUCCESS, (state) => {
      state.isLoading = false;
      state.isAuthantication = false;
      state.user = {};
    });
});
