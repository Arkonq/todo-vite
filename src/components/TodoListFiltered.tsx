import DoneIcon from '@mui/icons-material/Done';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { Todo } from '../types/types';

type TodoListFilteredProps = {
  todos: Todo[],
  todoIsDone: (todo: Todo) => void
}

const TodoListFiltered = ({ todos, todoIsDone }: TodoListFilteredProps) => {
  return (
    todos.map((todo: Todo) =>
      <div className="todo__item" key={todo.id} >
        {
          todo.isDone ?
            <div className="todo__body todo__body_done" onClick={() => todoIsDone(todo)}>
              <div>{todo.body}</div>
              <div><DoneIcon color='success' /></div>
            </div>
            :
            <div className="todo__body" onClick={() => todoIsDone(todo)}>
              <div>{todo.body}</div>
              <div><DoNotDisturbIcon color='error' /></div>
            </div>
        }
      </div>
    )
  );
}

export default TodoListFiltered;