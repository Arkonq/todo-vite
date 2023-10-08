import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';

const Home = () => {

  return (
    <div className="home">
      <div className="container">
        <h2>Todos</h2>
        <CreateTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default Home;