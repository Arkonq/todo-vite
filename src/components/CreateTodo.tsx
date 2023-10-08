import { TextField, Button } from '@mui/material';
import { Todo, TodoState } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const CreateTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector<TodoState>(state => state.todo.todos) as Todo[];

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch({ type: "CREATE", payload: { body: todo, isDone: false, id: todos.length + 1 } })

    fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ body: todo, isDone: false })
    })    
  }

  return (
    <form onSubmit={(e) => createTodo(e)} className='create-form'>
      <TextField id="standard-basic" label="Write your task" variant="standard" onChange={(e) => setTodo(e.target.value)} />
      <Button variant="contained" type='submit'> Add</Button>
    </form>
  );
}

export default CreateTodo;