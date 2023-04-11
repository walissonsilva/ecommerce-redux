import { Action } from "redux";

export enum UserActions {
  LOGIN = "user/login",
  LOGOUT = "user/logout",
}

type UserState = {
  currentUser: {
    name: string;
  } | null;
};

const initialState: UserState = {
  currentUser: null,
};

export const userReducer = (
  state = initialState,
  action: Action<UserActions>
) => {
  switch (action.type) {
    case UserActions.LOGIN:
      return { ...state, currentUser: { name: "Walisson" } };
    case UserActions.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
