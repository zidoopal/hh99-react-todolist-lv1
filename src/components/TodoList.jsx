import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoListWorking() {
  return (
    <div>
      <div>
        <h2>Working...🔥</h2>
        <TodoItem />
      </div>

      <div>
        <h2>Done !!!✨</h2>
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoListWorking;
