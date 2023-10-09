export type Todo = {
  id?: number,
  body: string,
  isDone: boolean,
}

export interface CounterAction {
  type: string,
  payload: number,
}

export interface CounterState {
  counter: {
    counter: number,
  }
}

export interface TodoAction {
  type: string,
  payload: Todo[] | Todo | number | boolean  // init, create, done
}

export interface TodoState {
  todo: {
    todos: Todo[]
  }
}

export type IError = string | null