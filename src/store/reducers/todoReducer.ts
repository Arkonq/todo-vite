import { Todo } from '../../types/types';
import { TodoAction } from "../../types/types";

const initialState = {
  todos: []
}

export const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case "INIT": {
      return { todos: action.payload }
    }
    case "CREATE": {
      let newTodos = (state.todos as Todo[]).concat(action.payload as Todo);
      return { todos: newTodos }
    }
    case "DONE": {
      let newTodos = state.todos.concat() as Todo[];
      let todoIndex = newTodos.findIndex((obj => obj.id === action.payload));
      newTodos[todoIndex].isDone = !newTodos[todoIndex].isDone;
      return { todos: newTodos }
    }
    case "FILTER": {
      return { todos: (state.todos as Todo[]).filter((obj => obj.isDone !== true)) }
    }
    case "CLEAR": {
      return { todos: [] }
    }
    default:
      return state;
  }
}