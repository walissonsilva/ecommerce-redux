import { combineReducers } from "redux";
import { cartSlice } from "./CartReducer/slice";
import { userSlice } from "./UserReducer/slice";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
