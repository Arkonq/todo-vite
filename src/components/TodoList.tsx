import { IError, Todo, TodoState } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Filter from './Filter';
import TodoListFiltered from './TodoListFiltered';

const TodoList = () => {
  const todos = useSelector<TodoState>(state => state.todo.todos) as Todo[];
  const dispatch = useDispatch();
  const [showDone, setShowDone] = useState(true);
  const [error, setError] = useState<IError>(null);

  useEffect(() => {
    fetch('http://localhost:8000/todos')
      .then(response => {
        if (!response.ok) {
          setError('Error: Network response was not ok');
          throw new Error('Network response was not ok');
        }
        return response.json()
      })
      .then(resTodos => {
        dispatch({ type: 'INIT', payload: resTodos })
      })
      .catch(error => {
        console.error('Error:', error);
        setError("Error: " + error);
      });
  }, [])

  const todoIsDone = (todo: Todo) => {
    fetch('http://localhost:8000/todos/' + todo.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ ...todo, isDone: !todo.isDone })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    dispatch({ type: "DONE", payload: todo.id });
  }

  return (
    <>
      <Filter showDone={showDone} setShowDone={setShowDone} />
      {todos.length > 0 ?
        <div className="todo__list">
          {
            showDone ?
              <TodoListFiltered todos={todos} todoIsDone={todoIsDone} />
              :
              <TodoListFiltered todos={todos.filter(todo => todo.isDone !== true)} todoIsDone={todoIsDone} />
          }
        </div>
        :
        (
          error ?
            <div className='todo__list'>
              <p style={{ color: 'red' }} >{error}</p>
            </div>
            :
            <div className='todo__list'>
              <p>List is empty</p>
            </div>
        )
      }
    </>
  );
}

export default TodoList;