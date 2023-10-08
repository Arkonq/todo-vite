import DoneIcon from '@mui/icons-material/Done';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { Todo, TodoState } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Filter from './Filter';

const TodoList = () => {
  const todos = useSelector<TodoState>(state => state.todo.todos) as Todo[];
  const dispatch = useDispatch();
  const [showDone, setShowDone] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/todos')
      .then(data => data.json())
      .then(resTodos => {
        console.log(resTodos);
        dispatch({ type: 'INIT', payload: resTodos })
      });
  }, [])

  const todoIsDone = (todo: Todo) => {
    dispatch({ type: "DONE", payload: todo.id })

    fetch('http://localhost:8000/todos/' + todo.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ ...todo, isDone: !todo.isDone })
    })
  }

  return (
    <>
      <Filter showDone={showDone} setShowDone={setShowDone} />
      {todos ?
        <div className="todo__list">
          {
            showDone ?
              todos.map((todo: Todo) =>
                <div className="todo__item" key={todo.id} onClick={() => todoIsDone(todo)}>
                  <div className="todo__body">{todo.body}</div>
                  {todo.isDone ?
                    <div className="todo__is-done">
                      <DoneIcon color='success' />
                    </div>
                    :
                    <div className="todo__is-done">
                      <DoNotDisturbIcon color='error' />
                    </div>
                  }
                </div>
              )
              :
              todos.filter(todo => todo.isDone !== true).map((todo: Todo) =>
                <div className="todo__item" key={todo.id} onClick={() => todoIsDone(todo)}>
                  <div className="todo__body">{todo.body}</div>
                  {todo.isDone ?
                    <div className="todo__is-done">
                      <DoneIcon color='success' />
                    </div>
                    :
                    <div className="todo__is-done">
                      <DoNotDisturbIcon color='error' />
                    </div>
                  }
                </div>
              )
          }
        </div>
        :
        <div className='todo__list'>
          <p>Loading...</p>
        </div>
      }
    </>
  );
}

export default TodoList;