import { createStore } from "redux";
import { rootReducer } from "./root-reducer";

export const store = createStore(rootReducer);
