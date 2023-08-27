import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteHandler, doneHandler }) => {
  return (
    <div className="todo-list">
      <h2>Working ...🔥</h2>
      {todos &&
        todos
          .filter((item) => item.done === false)
          .map((ele) => (
            <TodoItem
              todos={ele}
              key={ele.id}
              todo={ele}
              deleteHandler={deleteHandler}
              doneHandler={doneHandler}
            />
          ))}

      <h2>Done !!!🎉</h2>
      {todos &&
        todos
          .filter((item) => item.done === true)
          .map((ele) => (
            <TodoItem
              key={ele.id}
              todo={ele}
              deleteHandler={deleteHandler}
              doneHandler={doneHandler}
            />
          ))}
    </div>
  );
};
export default TodoList;
