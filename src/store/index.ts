import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { todoReducer } from './reducers/todoReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
})

export const store = createStore(rootReducer);