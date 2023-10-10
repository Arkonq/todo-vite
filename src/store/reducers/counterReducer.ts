import { CounterAction } from "../../types/types";

const initialState = {
  counter: 0,
}

export const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, counter: state.counter + action.payload }
    }
    case "REMOVE": {
      return { ...state, counter: state.counter - action.payload }
    }
    default:
      return state;
  }
}