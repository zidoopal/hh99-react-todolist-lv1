import React from 'react';

const TodoItem = ({ todo, deleteHandler, doneHandler }) => {
  // const { id, title, content, done } = todo;

  return (
    <div>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
      </div>
      <div>
        <button onClick={() => deleteHandler(todo.id)}>삭제</button>
        {/* 기능구현 시 DONE상태에 따라 취소/ 완료로 구분 */}
        {todo.done ? (
          <button onClick={() => doneHandler(todo.id)}>취소</button>
        ) : (
          <button onClick={() => doneHandler(todo.id)}>완료</button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
