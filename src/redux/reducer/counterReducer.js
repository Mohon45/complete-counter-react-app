import { DECREMENT, INCREMENT, RESET } from "../const/counterConst";

const initialCounter = { count: 0 };

const counterReducer = (state = initialCounter, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
