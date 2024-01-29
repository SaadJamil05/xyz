import { configureStore } from "@reduxjs/toolkit";
import { EventReducer } from "./reducers/Events";
import { Cart } from "./reducers/Cart";
import { UserReducer } from "./reducers/User";
import { UserOrders } from "./reducers/UserOrders";

export const store = configureStore({
  reducer: {
    events: EventReducer,
    cart: Cart,
    user: UserReducer,
    order: UserOrders,
  },
});
