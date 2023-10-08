import { CounterAction } from "../types/types";
import {AnyAction} from 'redux';

 const initialState = {
    counter: 0,
 }

 
 export const counterReducer = (state = initialState, action: CounterAction | AnyAction) => {
  switch (action.type) {
    case "ADD": {
      return {...state, counter: state.counter + action.payload}
    }
    case "REMOVE": {
      return {...state, counter: state.counter - action.payload}
    }
    default:
      return state;
  }
 }