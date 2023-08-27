import { Fragment, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import Header from 'components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'style.css';
import 'App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // TodoForm에서 값 받아오기
  const addTodos = (title, content) => {
    const newTodos = {
      id: todos.length + 1,
      title: title,
      content: content,
      done: false,
    };

    setTodos([...todos, newTodos]);
    setTitle('');
    setContent('');
  };

  // Todo 삭제
  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  // Todo 완료
  const doneTodoHandler = (id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      return todo;
    });
    setTodos(newTodoList);
  };

  return (
    <Fragment>
      <TodoTemplate>
        <Header />
        <TodoForm title={title} content={content} addTodos={addTodos} />
        <TodoList
          todos={todos}
          deleteHandler={deleteTodoHandler}
          doneHandler={doneTodoHandler}
        />
      </TodoTemplate>
    </Fragment>
  );
};

export default App;
