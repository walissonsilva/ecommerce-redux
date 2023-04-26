import { User } from "../../types/User";

interface UserState {
  user: User | null;
}

export interface UserDispatchAction {
  type: string;
  payload?: User;
}

const initialState: UserState = {
  user: null,
};

export function userReducer(state = initialState, action: UserDispatchAction) {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload,
    };
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }
  return state;
}
