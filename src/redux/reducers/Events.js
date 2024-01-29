import { createReducer } from "@reduxjs/toolkit";
import {
  CREATE_ORDER_ERROR,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ALL_EVENTS_ERROR,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_EVENTS_DEATILS_ERROR,
  GET_EVENTS_DEATILS_REQUEST,
  GET_EVENTS_DEATILS_SUCCESS,
  GET_EVENTS_GROUP_DEATILS_ERROR,
  GET_EVENTS_GROUP_DEATILS_REQUEST,
  GET_EVENTS_GROUP_DEATILS_SUCCESS,
} from "../constant/Events";

const initialState = {
  isLoading: false,
  AllEvents: [],
  EventDetails: [],
  GroupsEvents: {},
  SibgleEventLoading: false,
  AllEventLoading: false,
};

export const EventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_ALL_EVENTS_REQUEST, (state, action) => {
      state.isLoading = true;
      state.AllEventLoading = true;
    })
    .addCase(GET_ALL_EVENTS_SUCCESS, (state, action) => {
      const uniqueEventIds = new Set(state.AllEvents.map((event) => event.id));
      const newEvents = action.payload.filter(
        (event) => !uniqueEventIds.has(event.id)
      );
      state.AllEvents = [...state.AllEvents, ...newEvents];
      state.isLoading = false;
      state.AllEventLoading = false;
    })
    .addCase(GET_ALL_EVENTS_ERROR, (state, action) => {
      state.isLoading = false;
      state.AllEventLoading = false;
    })
    // ========== event details
    .addCase(GET_EVENTS_DEATILS_REQUEST, (state, action) => {
      state.isLoading = true;
    })
    .addCase(GET_EVENTS_DEATILS_SUCCESS, (state, action) => {
      state.isLoading = false;
      state.EventDetails = action.payload;
    })
    .addCase(GET_EVENTS_DEATILS_ERROR, (state, action) => {
      state.isLoading = false;
    })
    // --- grou details
    .addCase(GET_EVENTS_GROUP_DEATILS_REQUEST, (state, action) => {
      state.isLoading = true;
      state.SibgleEventLoading = true;
    })
    .addCase(GET_EVENTS_GROUP_DEATILS_SUCCESS, (state, action) => {
      state.isLoading = false;
      state.SibgleEventLoading = false;
      state.GroupsEvents = action.payload;
    })
    .addCase(GET_EVENTS_GROUP_DEATILS_ERROR, (state, action) => {
      state.isLoading = false;
      state.SibgleEventLoading = false;
    })
    // ---- CREATE ORDER
    .addCase(CREATE_ORDER_REQUEST, (state, action) => {
      state.isLoading = true;
    })
    .addCase(CREATE_ORDER_SUCCESS, (state, action) => {
      state.isLoading = false;
    })
    .addCase(CREATE_ORDER_ERROR, (state, action) => {
      state.isLoading = false;
    });
});
