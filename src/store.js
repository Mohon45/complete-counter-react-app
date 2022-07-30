import { createStore } from "redux";
import counterReducer from "./redux/reducer/counterReducer";

const store = createStore(counterReducer);

export default store;
